import React from 'react'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

/**
 * Footer 컴포넌트
 * - 저작권 정보
 * - 소셜 미디어 링크
 * - 맨 위로 스크롤 버튼
 * - 간단한 사이트맵
 */
export const Footer: React.FC = () => {
  /**
   * 맨 위로 스크롤 함수
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /**
   * 섹션 네비게이션 함수
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // 소셜 링크 데이터
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      hoverColor: 'hover:text-gray-600 dark:hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@example.com',
      hoverColor: 'hover:text-primary-600 dark:hover:text-primary-400',
    },
  ]

  // 네비게이션 링크 데이터
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white relative">
      {/* 맨 위로 스크롤 버튼 */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="맨 위로 스크롤"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container-max-width section-padding pt-16 pb-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* 왼쪽: 로고 및 소개 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Portfolio
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              창의적이고 혁신적인 웹 솔루션을 만드는 
              프론트엔드 개발자입니다.
            </p>
            
            {/* 소셜 링크 */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-neutral-800 dark:bg-neutral-900 rounded-lg text-neutral-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* 가운데: 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              빠른 링크
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* 오른쪽: 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              연락처
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p>📧 contact@example.com</p>
              <p>📱 +82 10-1234-5678</p>
              <p>📍 서울, 대한민국</p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-neutral-400">
                프로젝트 문의나 협업 제안은 
                언제든 환영합니다!
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-neutral-700 dark:border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 저작권 */}
            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>© 2024 Portfolio.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Developer</span>
            </div>

            {/* 기술 스택 */}
            <div className="flex items-center space-x-4 text-neutral-400 text-sm">
              <span>Built with:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-neutral-800 dark:bg-neutral-900 rounded text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-neutral-800 dark:bg-neutral-900 rounded text-xs">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-neutral-800 dark:bg-neutral-900 rounded text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="text-center pt-6">
          <p className="text-xs text-neutral-500">
            이 웹사이트는 모던 웹 기술과 성능 최적화를 고려하여 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
