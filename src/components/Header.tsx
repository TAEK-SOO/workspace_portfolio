import React, { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

/**
 * 헤더 컴포넌트
 * - 상단 고정(sticky) 네비게이션
 * - 스크롤 시 배경 투명도 변경
 * - 반응형 모바일 메뉴
 * - 다크모드 토글 버튼
 * - 스무스 스크롤 네비게이션
 */
export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 네비게이션 메뉴 항목들
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  /**
   * 스크롤 감지 이벤트 핸들러
   * - 스크롤 시 헤더 배경 스타일 변경을 위해 사용
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * 스무스 스크롤 네비게이션 함수
   * - 해당 섹션으로 부드럽게 스크롤 이동
   * - 모바일 메뉴 닫기
   */
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* 로고/이름 */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gradient">
              Portfolio
            </h1>
          </div>

          {/* 데스크톱 네비게이션 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-readable-muted hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200 touch-target"
              >
                {item.name}
              </button>
              ))}
            </div>
          </div>

          {/* 다크모드 토글 및 모바일 메뉴 버튼 */}
          <div className="flex items-center space-x-4">
            {/* 다크모드 토글 버튼 */}
            <button
              onClick={toggleTheme}
              className="touch-target p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
              aria-label="테마 토글"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="touch-target p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                aria-label="메뉴 토글"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-lg mt-2 border border-neutral-200 dark:border-neutral-700">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="btn-mobile block w-full text-left px-4 py-3 text-base font-medium text-readable-muted hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
