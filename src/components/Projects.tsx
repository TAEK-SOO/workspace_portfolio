import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

/**
 * Projects 섹션 컴포넌트
 * - 프로젝트 포트폴리오 갤러리
 * - 그리드 카드 레이아웃
 * - 오버레이 호버 효과
 * - 필터링 및 카테고리 분류
 * - 반응형 디자인
 */
export const Projects: React.FC = () => {
  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js로 구축한 풀스택 이커머스 플랫폼입니다. 결제 시스템, 관리자 대시보드, 실시간 알림 등 다양한 기능을 포함합니다.',
      image: '/project1.jpg',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Trello와 유사한 태스크 관리 애플리케이션입니다. 드래그앤드롭, 실시간 협업, 데이터 시각화 기능을 포함합니다.',
      image: '/project2.jpg',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Redux', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '날씨 API를 활용한 반응형 대시보드입니다. 위치 기반 날씨 정보, 5일 예보, 차트 시각화 기능을 제공합니다.',
      image: '/project3.jpg',
      category: 'Frontend',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'Next.js와 Markdown을 활용한 정적 블로그 시스템입니다. SEO 최적화, 다크모드, 검색 기능을 포함합니다.',
      image: '/project4.jpg',
      category: 'Full Stack',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'React Native로 개발한 모바일 뱅킹 앱입니다. 생체인증, 계좌이체, 투자 현황 등의 기능을 포함합니다.',
      image: '/project5.jpg',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Expo'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 6,
      title: 'Data Analytics Platform',
      description: 'Python과 React로 구축한 데이터 분석 플랫폼입니다. 실시간 데이터 처리, 차트 생성, 보고서 자동화 기능을 제공합니다.',
      image: '/project6.jpg',
      category: 'Full Stack',
      technologies: ['Python', 'React', 'D3.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
  ]

  // 카테고리 필터 상태
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile']

  // 필터링된 프로젝트 목록
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container-max-width section-padding">
        {/* 섹션 헤더 */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            주요 프로젝트
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            다양한 기술과 창의적인 아이디어로 완성한 프로젝트들을 소개합니다
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 프로젝트 이미지 */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                {/* 임시 이미지 플레이스홀더 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary-300 dark:text-primary-700">
                    💻
                  </div>
                </div>
                
                {/* Featured 배지 */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}

                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                    aria-label="라이브 데모 보기"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                    aria-label="GitHub 코드 보기"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6 space-y-4">
                {/* 카테고리 */}
                <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {project.category}
                </div>

                {/* 제목 */}
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h4>

                {/* 설명 */}
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 링크 버튼들 */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-center text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 text-center text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더 많은 프로젝트 보기 버튼 */}
        <div className="text-center mt-16 animate-fade-in">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            더 많은 프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  )
}
