import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * 다크모드 테마 관리를 위한 Context Provider
 * - localStorage에 테마 설정을 저장
 * - 시스템 테마 설정을 자동으로 감지
 * - HTML class를 통해 TailwindCSS 다크모드 적용
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // localStorage에서 저장된 테마 설정 확인
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // 저장된 설정이 없으면 시스템 설정 확인
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  /**
   * 테마 토글 함수
   * - 현재 테마를 반전시키고 localStorage에 저장
   * - HTML root element에 'dark' 클래스 추가/제거
   */
  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  useEffect(() => {
    // 테마 변경 시 HTML 클래스 업데이트 및 저장
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * 테마 컨텍스트를 사용하기 위한 커스텀 훅
 * - 컴포넌트에서 테마 상태와 토글 함수에 접근
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
