import React from 'react'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'

/**
 * 히어로 섹션 컴포넌트
 * - 메인 소개 및 첫 인상을 결정하는 섹션
 * - 세련된 타이포그래피와 그라디언트 배경
 * - CTA 버튼과 소셜 링크
 * - 스크롤 다운 애니메이션
 */
export const Hero: React.FC = () => {
  /**
   * 스크롤 다운 함수
   * - About 섹션으로 부드럽게 스크롤 이동
   */
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  /**
   * 이력서 다운로드 함수
   * - 실제 구현 시 이력서 파일 경로로 수정 필요
   */
  const downloadResume = () => {
    // 실제 이력서 파일 다운로드 로직
    const link = document.createElement('a')
    link.href = '/resume.pdf' // public 폴더에 이력서 파일 배치
    link.download = 'resume.pdf'
    link.click()
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 배경 그라디언트 및 패턴 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950" />
      
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-300/40 to-purple-300/40 dark:from-pink-800/30 dark:to-purple-800/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 dark:from-yellow-800/20 dark:to-orange-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container-max-width section-padding relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* 인사말 */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium">
              안녕하세요! 👋
            </p>
            
            {/* 메인 타이틀 */}
            <h1 className="heading-xl">
              <span className="text-readable">앞서가는 </span>
              <span className="text-gradient">개발자</span>
              <br />
              <span className="text-readable">입니다</span>
            </h1>
            
            {/* 서브 타이틀 */}
            <p className="text-body text-readable-muted max-w-3xl mx-auto px-4 sm:px-0">
              사용자 경험을 중시하며, 깔끔하고 효율적인 코드로 
              <br className="hidden sm:block" />
              의미 있는 디지털 제품을 만들어갑니다.
            </p>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 px-4 sm:px-0">
            <button
              onClick={scrollToAbout}
              className="group w-full sm:w-auto btn-mobile px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              프로젝트 보기
              <ArrowDown className="inline-block ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={downloadResume}
              className="group w-full sm:w-auto btn-mobile px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              <Download className="inline-block mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              이력서 다운로드
            </button>
          </div>

          {/* 소셜 링크들 */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-12 sm:mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target p-2 sm:p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target p-2 sm:p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            
            <a
              href="mailto:contact@example.com"
              className="touch-target p-2 sm:p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/10 dark:bg-neutral-800/10 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          aria-label="아래로 스크롤"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
