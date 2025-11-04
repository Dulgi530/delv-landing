"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface NewsletterPost {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  category?: string;
  thumbnail_url?: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<NewsletterPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<NewsletterPost | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "DELV Team",
    category: "",
    thumbnail_url: "",
  });

  const ADMIN_PASSWORD = "delv2025"; // 실제로는 환경변수로 관리하세요

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("newsletters")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
  };

  const convertToHTML = (text: string) => {
    // 줄바꿈을 기준으로 분리
    const lines = text.split("\n");
    let html = "";
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      if (!line) {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        continue;
      }

      // 이미지 처리 ![alt](url)
      const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      if (imageRegex.test(line)) {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        line = line.replace(
          /!\[([^\]]*)\]\(([^)]+)\)/g,
          '<img src="$2" alt="$1" class="w-full my-4 rounded-lg" />'
        );
        html += line + "\n";
        continue;
      }

      // 제목 처리 (## 또는 ### 시작)
      if (line.startsWith("### ")) {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        html += `<h3>${line.substring(4)}</h3>\n`;
      } else if (line.startsWith("## ")) {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        html += `<h2>${line.substring(3)}</h2>\n`;
      }
      // 리스트 처리 (- 시작)
      else if (line.startsWith("- ")) {
        if (!inList) {
          html += "<ul>\n";
          inList = true;
        }
        html += `  <li>${line.substring(2)}</li>\n`;
      }
      // 일반 문단
      else {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        html += `<p>${line}</p>\n`;
      }
    }

    if (inList) {
      html += "</ul>\n";
    }

    return html;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 텍스트를 HTML로 변환
    const htmlContent = convertToHTML(formData.content);

    if (editingPost) {
      // 수정
      const { error } = await supabase
        .from("newsletters")
        .update({
          title: formData.title,
          content: htmlContent,
          author: formData.author,
          category: formData.category || null,
          thumbnail_url: formData.thumbnail_url || null,
        })
        .eq("id", editingPost.id);

      if (error) {
        alert("수정 실패: " + error.message);
      } else {
        alert("수정 완료!");
        resetForm();
        fetchPosts();
      }
    } else {
      // 새 글 작성
      const { error } = await supabase.from("newsletters").insert([
        {
          title: formData.title,
          content: htmlContent,
          author: formData.author,
          category: formData.category || null,
          thumbnail_url: formData.thumbnail_url || null,
        },
      ]);

      if (error) {
        alert("작성 실패: " + error.message);
      } else {
        alert("작성 완료!");
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleEdit = (post: NewsletterPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author,
      category: post.category || "",
      thumbnail_url: post.thumbnail_url || "",
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const { error } = await supabase.from("newsletters").delete().eq("id", id);

    if (error) {
      alert("삭제 실패: " + error.message);
    } else {
      alert("삭제 완료!");
      fetchPosts();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      author: "DELV Team",
      category: "",
      thumbnail_url: "",
    });
    setIsEditing(false);
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">
            관리자 로그인
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-2 border rounded-lg mb-4 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">뉴스레터 관리</h1>
          <div className="flex gap-4">
            <Link
              href="/newsletter"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              뉴스레터 보기
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              로그아웃
            </button>
          </div>
        </div>

        {/* 글 작성/수정 폼 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            {isEditing ? "글 수정" : "새 글 작성"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-black">
                제목 *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-black">
                본문 *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-sm text-black"
                rows={15}
                placeholder="일반 텍스트로 작성하세요.&#10;&#10;## 대제목&#10;### 소제목&#10;&#10;본문 내용을 입력하세요.&#10;&#10;- 목록 항목 1&#10;- 목록 항목 2&#10;&#10;![이미지 설명](https://이미지URL.com/image.jpg)&#10;&#10;자동으로 HTML로 변환됩니다."
                required
              />
              <div className="text-xs text-gray-500 mt-2 space-y-1">
                <p className="font-semibold">작성 가이드:</p>
                <p>
                  • <strong>## 텍스트</strong> - 대제목 (H2)
                </p>
                <p>
                  • <strong>### 텍스트</strong> - 소제목 (H3)
                </p>
                <p>
                  • <strong>- 텍스트</strong> - 목록 항목
                </p>
                <p>
                  • <strong>![설명](이미지URL)</strong> - 이미지 삽입
                </p>
                <p>• 일반 문장은 그냥 작성하면 자동으로 문단으로 변환됩니다.</p>
                <p>• 빈 줄은 자동으로 건너뜁니다.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  작성자
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  카테고리
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg text-black"
                  placeholder="업계 동향, 법무, 기술 등"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  썸네일 URL
                </label>
                <input
                  type="text"
                  value={formData.thumbnail_url}
                  onChange={(e) =>
                    setFormData({ ...formData, thumbnail_url: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg text-black"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600"
              >
                {isEditing ? "수정하기" : "작성하기"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  취소
                </button>
              )}
            </div>
          </form>
        </div>

        {/* 글 목록 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">작성된 글 목록</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-black">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    {post.category && (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mr-2">
                        {post.category}
                      </span>
                    )}
                    {post.author} •{" "}
                    {new Date(post.created_at).toLocaleDateString("ko-KR")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/newsletter/${post.id}`}
                    target="_blank"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    보기
                  </Link>
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
