
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

/**
 * 메인 App 컴포넌트
 * - 전체 포트폴리오 웹사이트의 구조를 정의
 * - ThemeProvider로 다크모드 상태 관리
 * - 각 섹션 컴포넌트들을 순차적으로 렌더링
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
        {/* 헤더: 네비게이션 및 다크모드 토글 */}
        <Header />
        
        {/* 메인 콘텐츠 영역 */}
        <main>
          {/* 히어로 섹션: 메인 소개 및 CTA */}
          <Hero />
          
          {/* About Me 섹션: 자기소개 및 프로필 */}
          <About />
          
          {/* Skills 섹션: 기술 스택 및 능력 */}
          <Skills />
          
          {/* Projects 섹션: 프로젝트 포트폴리오 */}
          <Projects />
          
          {/* Contact 섹션: 연락처 및 문의 폼 */}
          <Contact />
        </main>
        
        {/* 푸터: 저작권 및 SNS 링크 */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
