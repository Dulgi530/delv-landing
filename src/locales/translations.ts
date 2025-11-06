export const translations = {
  ko: {
    // 네비게이션
    nav: {
      company: "회사소개",
      services: "서비스",
      newsletter: "뉴스레터",
      contact: "문의하기",
      language: "한국어",
    },

    // 메인 페이지
    hero: {
      title: "전문 컨설팅으로",
      titleBreak: "비즈니스를 혁신하세요",
      subtitle: "법령 검토 / 웹3 기술 자문 / 홍보, 마케팅 / 해외진출",
      description:
        "Web3 분야의 종합적인 컨설팅 서비스를 통해 귀하의 성장을 가속화합니다.",
      ctaStart: "컨설팅 시작하기",
      ctaLearn: "더 알아보기",
    },

    // 서비스 섹션
    services: {
      title: "컨설팅 서비스",
      subtitle: "비즈니스 요구에 맞춘 종합적인 컨설팅 서비스",
      legal: {
        icon: "⚖️",
        title: "법률 자문",
        titleEn: "Legal Advisory",
        description:
          "DAO·해외 법인 설립 자문, 스위스 법인 운영 지원, 토큰 발행 구조 검토, 계약서 검토(MOU·SAFE·Token Warrant), 규제 대응(VASP·금감원), IP/데이터 라이선스 자문, 투자 유치 법률 자문 LDD (Legal Due Diligence)",
        learnMore: "더 알아보기",
        tags: ["DAO 법인화", "VASP 등록", "LDD"],
      },
      accounting: {
        icon: "📊",
        title: "회계·세무 자문",
        titleEn: "Accounting & Tax Advisory",
        description:
          "토큰 회계처리 설계, 원천세·부가세·법인세 신고 대행, 토큰 수익 인식 구조화, 분기별 재무·KPI 보고, 투자유치용 재무검증 FDD / TDD (Financial Due Diligence / Tax Due Diligence)",
        learnMore: "더 알아보기",
        tags: ["토큰 회계처리", "세무 신고", "FDD/TDD"],
      },
      technical: {
        icon: "🧠",
        title: "기술 자문·설계",
        titleEn: "Technical Advisory & Audit",
        description:
          "스마트컨트랙트 설계, ERC, 토큰, 디파이 Paymaster/SBT/DID/NFT 구조 자문 및 개발, 코드 보안·기능 Audit, Web3 프로젝트용 API·SDK 설계",
        learnMore: "더 알아보기",
        tags: ["스마트컨트랙트", "보안 감사", "Web3 설계"],
      },
      business: {
        icon: "💼",
        title: "비즈니스 개발",
        titleEn: "Business Development & IR",
        description:
          "스위스 Crypto Valley 네트워크 연결, 해외 재단 설립 지원, VC·PE 매칭 및 협상, IR Deck·투자전략 수립, Tokenomics 설계, 글로벌 투자 리포트·Valuation 발행",
        learnMore: "더 알아보기",
        tags: ["투자 유치", "재단 설립", "Tokenomics"],
      },
      networking: {
        icon: "🌐",
        title: "네트워킹·커뮤니티",
        titleEn: "Networking & Growth",
        description:
          "DAO·Social-Fi 커뮤니티 운영, 글로벌 커뮤니티 세팅, 밋업·해커톤·포럼 기획, DELV 인증 프로젝트 파트너십 구축, 전문가 네트워크 운영",
        learnMore: "더 알아보기",
        tags: ["커뮤니티 운영", "해커톤", "파트너십"],
      },
    },

    // 뉴스레터 섹션
    newsletter: {
      title: "뉴스레터",
      subtitle: "최신 인사이트와 업데이트를 확인하세요",
      viewAll: "전체 보기",
      noContent: "최신 뉴스레터가 곧 업데이트됩니다.",
      author: "작성자",
    },

    // DELV CHAT 섹션
    delvChat: {
      badge: "Web3 학습 도우미",
      subtitle: "Web3 학습 도우미",
      title: "DELV CHAT",
      description: "Web3 용어와 개념을 쉬운 대화로 배워보세요",
      cta: "채팅 시작하기",
    },

    // 고객 리뷰
    reviews: {
      title: "고객 리뷰",
      subtitle: "델브와 함께한 고객들의 생생한 경험담을 들어보세요",
    },

    // 팀 섹션
    team: {
      title: "팀 소개",
      subtitle: "기술, 법무, 글로벌 시장에서 입증된 실적을 가진 업계 전문가들",
      members: {
        sungyeon: {
          position: "변호사",
          description:
            "- 고려대학교 경영학 학사 / 법학전문대학원 법학박사<br />- 셀트리온, 풀무원 법무팀 근무 경력<br />- ABB 블록체인 해커톤 대상 수상<br />- 국제법무, 블록체인 자문, 강의 경험",
        },
        ilhun: {
          position: "회계사",
          description:
            "- 고려대학교 경영 MBA 수료<br />- 前 삼정회계법인 회계사<br />- 現 한울회계법인 이사 (회계사)<br />- 국내 대기업 금융그룹, 투자회사 회계 용역 多<br />- 국제조세 자문 수행",
        },
        rosa: {
          position: "주재원 (스위스)",
          description:
            "- 성신여자대학교 컴퓨터공학 / 정보공학 석사<br />- SKB(Swiss Korean Blockchain) Advisors 파운더<br />- Women in Web3 Switzerland (WIW3.ch) 파트너십팀 핵심 기여자<br />- 스위스와 한국 간 블록체인 산업 교류 및 협력 경험 多<br />- 스위스 스타트업의 한국 블록체인 프로젝트 투자 유치 및 자금 조달 지원 경험 多",
        },
        hyeongjun: {
          position: "기술 리드",
          description:
            "- aɪˈdentəti CEO & 빌더 아카데미 커뮤니티 파운더<br />- 유네스코 디지털 강의 강사<br />- ETHGlobal 해커톤 수상(2023,2024)<br />- ABB 블록체인 해커톤 최우수상 수상<br />- Web3 Project 기획/디자인 경험 다수",
        },
        youngdae: {
          position: "커뮤니티 리드",
          description:
            "- aɪdentəti COO 및 커뮤니티 관리<br />- Web3 프로젝트 커뮤니티 빌더 경험<br />- 다수의 프로젝트 모더레이터 경험<br />- MEXC 거래소 BD/운영 매니저<br />- 국내외 이벤트 참여 및 관리 풍부한 경험 (해커톤, 밋업)",
        },
      },
    },

    // 파트너 섹션
    partners: {
      title: "파트너",
    },

    // 문의하기 폼
    contactForm: {
      title: "Web3, 무한한 가능성의 첫걸음",
      subtitle: "델브와의 전략 미팅을 통해, 성장 로드맵을 설계하세요.",
      nameLabel: "이름",
      companyLabel: "소속",
      emailLabel: "이메일",
      phoneLabel: "전화번호",
      messageLabel: "문의내용 (선택)",
      privacyLabel: "개인정보 제공에 동의합니다",
      submitButton: "문의하기",
      successMessage: "문의가 성공적으로 전송되었습니다!",
      errorMessage: "문의 전송에 실패했습니다. 다시 시도해주세요.",
      note: "* 담당자가 확인 후 순차적으로 연락 드립니다.",
      namePlaceholder: "이름을 입력해주세요",
      companyPlaceholder: "회사명을 입력해주세요",
      emailPlaceholder: "이메일을 입력해주세요",
      phonePlaceholder: "전화번호를 입력해주세요",
      messagePlaceholder: "문의하실 내용을 입력해주세요",
    },

    // Footer
    footer: {
      description: "전문 컨설팅 서비스를 통해 비즈니스를 강화합니다.",
      servicesTitle: "서비스",
      companyTitle: "회사",
      contactTitle: "연락처",
      technology: "기술",
      legalAdvisory: "법무 자문",
      globalExpansion: "글로벌 확장",
      aboutUs: "회사소개",
      teamLabel: "팀",
      careers: "채용",
    },
  },

  en: {
    // Navigation
    nav: {
      company: "Company",
      services: "Services",
      newsletter: "Newsletter",
      contact: "Contact",
      language: "ENG",
    },

    // Hero Section
    hero: {
      title: "Transform Your Business",
      titleBreak: "with Expert Consulting",
      subtitle:
        "Legal Review / Web3 Tech Advisory / Marketing / Global Expansion",
      description:
        "Accelerate your growth through comprehensive consulting services in Web3.",
      ctaStart: "Start Consulting",
      ctaLearn: "Learn More",
    },

    // Services Section
    services: {
      title: "Our Expertise",
      subtitle:
        "Comprehensive consulting services tailored to your business needs",
      legal: {
        icon: "⚖️",
        title: "Legal Advisory",
        titleEn: "Legal Advisory",
        description:
          "DAO incorporation & overseas entity setup advisory (Korea, Switzerland, Singapore, etc.), Swiss entity establishment & operation support, Token issuance structure review (securities & investment contract analysis), MOU, SAFE, Token Warrant contract drafting & review, Regulatory compliance advisory (VASP registration, FSC/FSS response, disclosure risk analysis), Web3 business IP & data licensing advisory, Investment fundraising legal advisory LDD (Legal Due Diligence)",
        learnMore: "Learn More",
        tags: ["DAO Incorporation", "VASP Registration", "LDD"],
      },
      accounting: {
        icon: "📊",
        title: "Accounting & Tax Advisory",
        titleEn: "Accounting & Tax Advisory",
        description:
          "Financial statements & token accounting ledger design (token issuance, burning, reward accounting), Withholding tax, VAT, corporate tax filing agency & advisory, Token revenue recognition structuring, Quarterly accounting reports & KPI/financial reporting, Investment fundraising financial verification FDD / TDD (Financial Due Diligence / Tax Due Diligence)",
        learnMore: "Learn More",
        tags: ["Token Accounting", "Tax Filing", "FDD/TDD"],
      },
      technical: {
        icon: "🧠",
        title: "Technical Advisory & Audit",
        titleEn: "Technical Advisory & Audit",
        description:
          "Smart contract design, ERC, Token, DeFi Paymaster/SBT/DID/NFT structure advisory & development, Code security·functional audit, Web3 project API·SDK design",
        learnMore: "Learn More",
        tags: ["Smart Contracts", "Security Audit", "Web3 Design"],
      },
      business: {
        icon: "💼",
        title: "Business Development & IR",
        titleEn: "Business Development & IR",
        description:
          "Swiss Crypto Valley network connection, overseas foundation setup support, VC·PE matching & negotiation, IR deck·investment strategy development, Tokenomics design, global investment report·valuation issuance",
        learnMore: "Learn More",
        tags: ["Fundraising", "Foundation", "Tokenomics"],
      },
      networking: {
        icon: "🌐",
        title: "Networking & Growth",
        titleEn: "Networking & Growth",
        description:
          "DAO·Social-Fi community management, global community setup, meetup·hackathon·forum planning, DELV certified project partnership building, expert network operation",
        learnMore: "Learn More",
        tags: ["Community", "Hackathons", "Partnerships"],
      },
    },

    // Newsletter Section
    newsletter: {
      title: "Newsletter",
      subtitle: "Stay updated with our latest insights",
      viewAll: "View All",
      noContent: "Latest newsletters coming soon.",
      author: "Author",
    },

    // DELV CHAT Section
    delvChat: {
      badge: "Web3 Learning Assistant",
      subtitle: "Web3 Learning Assistant",
      title: "DELV CHAT",
      description: "Learn Web3 terms and concepts through easy conversations",
      cta: "Start Chatting",
    },

    // Reviews
    reviews: {
      title: "Client Reviews",
      subtitle: "Hear from our clients about their experience with DELV",
    },

    // Team Section
    team: {
      title: "Meet Our Team",
      subtitle:
        "Industry experts with proven track records in technology, legal, and global markets",
      members: {
        sungyeon: {
          position: "Lawyer",
          description:
            "- B.A. in Business Administration, Korea University / J.D., Korea University School of Law<br />- Former in-house counsel at Celltrion and Pulmuone<br />- Grand Prize, ABB Blockchain Hackathon<br />- Experienced in international legal affairs, blockchain advisory, and lecturing",
        },
        ilhun: {
          position: "Accountant",
          description:
            "- MBA, Korea University<br />- Former Accountant at Samjong Accounting Corporation<br />- Current Director (Accountant) at Hanwool Accounting Corporation<br />- Extensive accounting services for major domestic corporate financial groups and investment companies<br />- International tax advisory",
        },
        rosa: {
          position: "Representative (Switzerland)",
          description:
            "- Master's in Computer Engineering / Information Engineering, Sungshin Women's University<br />- Founder of SKB (Swiss Korean Blockchain) Advisors<br />- Key contributor to Women in Web3 Switzerland (WIW3.ch) Partnership Team<br />- Extensive experience in blockchain industry exchange and cooperation between Switzerland and Korea<br />- Extensive experience in supporting Swiss startups with investment attraction and fundraising for Korean blockchain projects",
        },
        hyeongjun: {
          position: "Tech Lead",
          description:
            "- aɪˈdentəti CEO & Builder Academy Community Founder<br />- UNESCO Digital lecture professor<br />- ETH Global Hackathon Award (2023,2024)<br />- ABB BlockChain Hackathon Award (2023)<br />- Web3 Project PM / Design Department",
        },
        youngdae: {
          position: "Community Lead",
          description:
            "- aɪdentəti COO and Community Management<br />- Experience as a Web3 Project Community Builder<br />- Experience as a Moderator for Multiple Projects<br />- BD/Operations Manager at MEXC Exchange<br />- Extensive Experience Participating in and Managing Domestic & International Events (Hackathons, Meetups)",
        },
      },
    },

    // Partners Section
    partners: {
      title: "Partners",
    },

    // Contact Form
    contactForm: {
      title: "Web3, The First Step to Infinite Possibilities",
      subtitle:
        "Design your growth roadmap through a strategic meeting with DELV.",
      nameLabel: "Name",
      companyLabel: "Company",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message (Optional)",
      privacyLabel: "I agree to provide personal information",
      submitButton: "Submit",
      successMessage: "Your inquiry has been successfully submitted!",
      errorMessage: "Failed to submit inquiry. Please try again.",
      note: "* Our team will contact you sequentially after review.",
      namePlaceholder: "Enter your name",
      companyPlaceholder: "Enter company name",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "Enter your phone number",
      messagePlaceholder: "Enter your message",
    },

    // Footer
    footer: {
      description: "Empowering businesses through expert consulting services.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      technology: "Technology",
      legalAdvisory: "Legal Advisory",
      globalExpansion: "Global Expansion",
      aboutUs: "About Us",
      teamLabel: "Team",
      careers: "Careers",
    },
  },
};

export type TranslationKey = keyof typeof translations.ko;
export type Language = "ko" | "en";
