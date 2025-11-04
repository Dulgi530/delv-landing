-- ==========================================
-- 뉴스레터 기사 작성 템플릿
-- ==========================================
-- 아래 내용을 복사해서 수정한 후 Supabase SQL Editor에서 실행하세요.
-- 
-- 작성 가이드:
-- 1. 제목, 본문, 카테고리, 썸네일 URL을 수정하세요
-- 2. HTML 태그를 사용해 본문을 작성하세요
-- 3. Supabase Dashboard > SQL Editor에 붙여넣고 Run 클릭
-- ==========================================

INSERT INTO newsletters (title, content, author, category, thumbnail_url) 
VALUES (
  
  -- ============== 제목 (필수) ==============
  '여기에 기사 제목을 입력하세요',
  
  
  -- ============== 본문 (필수) ==============
  '<h2>소제목을 여기에</h2>
  <p>본문 첫 문단입니다. 여기에 도입부를 작성하세요.</p>
  
  <h3>섹션 1 제목</h3>
  <p>첫 번째 섹션의 내용입니다.</p>
  
  <ul>
    <li>요점 1</li>
    <li>요점 2</li>
    <li>요점 3</li>
  </ul>
  
  <h3>섹션 2 제목</h3>
  <p>두 번째 섹션의 내용입니다.</p>
  
  <blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">
    중요한 인용문이나 강조하고 싶은 내용
  </blockquote>
  
  <p>추가 설명이나 내용을 계속 작성하세요.</p>
  
  <h3>결론</h3>
  <p>마무리 문단입니다. 요약이나 결론을 작성하세요.</p>',
  
  
  -- ============== 작성자 (선택) ==============
  -- 기본값: DELV Team
  'DELV Team',
  
  
  -- ============== 카테고리 (선택) ==============
  -- 예시: 업계 동향, 법무, 기술, 마케팅, 글로벌
  '업계 동향',
  
  
  -- ============== 썸네일 이미지 URL (선택) ==============
  -- Unsplash 예시: https://images.unsplash.com/photo-xxx?w=800&q=80
  -- 없으면 NULL 또는 '' (빈 문자열)
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
  
);


-- ==========================================
-- HTML 태그 치트시트
-- ==========================================
/*

기본 텍스트:
-----------
<h2>대제목</h2>
<h3>중제목</h3>
<h4>소제목</h4>
<p>일반 문단</p>
<p><strong>굵게</strong></p>
<p><em>기울임</em></p>
<br /> (줄바꿈)


목록:
-----
<ul>
  <li>순서 없는 목록</li>
</ul>

<ol>
  <li>순서 있는 목록</li>
</ol>


링크:
-----
<a href="https://example.com" target="_blank">링크 텍스트</a>


이미지:
-------
<img src="이미지URL" alt="설명" class="w-full my-4" />


인용:
-----
<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">
  인용문
</blockquote>


구분선:
-------
<hr class="my-6" />


코드:
-----
<code>인라인 코드</code>

<pre class="bg-gray-100 p-4 rounded">
코드 블록
여러 줄
</pre>


테이블:
-------
<table class="w-full border-collapse border">
  <thead>
    <tr>
      <th class="border p-2">제목1</th>
      <th class="border p-2">제목2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-2">내용1</td>
      <td class="border p-2">내용2</td>
    </tr>
  </tbody>
</table>

*/


-- ==========================================
-- 이미지 찾기 팁
-- ==========================================
/*

1. Unsplash (무료 고품질 이미지)
   - https://unsplash.com
   - 검색 → 이미지 클릭 → 우클릭 "이미지 주소 복사"
   - URL 끝에 ?w=800&q=80 추가 (최적화)
   
2. Pexels (무료 스톡 이미지)
   - https://pexels.com
   
3. Supabase Storage (직접 업로드)
   - Supabase Dashboard → Storage
   - 버킷 생성 → 이미지 업로드 → Public URL 복사

*/


-- ==========================================
-- 실전 예시
-- ==========================================
/*

INSERT INTO newsletters (title, content, author, category, thumbnail_url) 
VALUES (
  'AI 시대의 법적 쟁점과 대응 전략',
  
  '<h2>AI 기술의 발전과 법적 과제</h2>
  <p>인공지능 기술의 급속한 발전으로 새로운 법적 쟁점들이 부상하고 있습니다.</p>
  
  <h3>주요 법적 이슈</h3>
  <ul>
    <li>AI 저작권 및 지적재산권</li>
    <li>개인정보 보호와 데이터 규제</li>
    <li>AI 윤리와 책임 소재</li>
    <li>고용 및 노동법 변화</li>
  </ul>
  
  <p>기업들은 이러한 변화에 선제적으로 대응해야 합니다.</p>
  
  <blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">
    "AI 시대의 법적 리스크 관리는 선택이 아닌 필수입니다" - DELV 법무팀
  </blockquote>
  
  <h3>DELV의 솔루션</h3>
  <p>DELV는 AI 관련 법적 자문, 컴플라이언스 구축, 리스크 관리 전략을 제공합니다.</p>',
  
  'DELV Team',
  '법무',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
);

*/

