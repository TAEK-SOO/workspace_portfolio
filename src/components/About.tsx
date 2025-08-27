import React from 'react'
import { Code, Coffee, Heart, Award } from 'lucide-react'

/**
 * About Me 섹션 컴포넌트
 * - 자기소개 및 프로필 정보
 * - 경력 및 학력 하이라이트
 * - 개인적 특징 카드들
 * - 반응형 레이아웃
 */
export const About: React.FC = () => {
  // 개인 특징 및 가치관 데이터
  const highlights = [
    {
      icon: Code,
      title: '깔끔한 코드',
      description: '가독성과 유지보수성을 중시하며, 클린 코드 원칙을 지킵니다.',
    },
    {
      icon: Coffee,
      title: '지속적 학습',
      description: '새로운 기술과 트렌드를 꾸준히 학습하며 성장하고 있습니다.',
    },
    {
      icon: Heart,
      title: '사용자 중심',
      description: '사용자 경험을 최우선으로 생각하며 직관적인 인터페이스를 만듭니다.',
    },
    {
      icon: Award,
      title: '품질 지향',
      description: '완성도 높은 결과물을 위해 디테일에 집중합니다.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container-max-width section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 좌측: 프로필 이미지 및 소개 */}
          <div className="space-y-8 animate-slide-up">
            {/* 섹션 타이틀 */}
            <div className="space-y-4">
              <h2 className="text-caption font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                About Me
              </h2>
              <h3 className="heading-lg text-readable">
                안녕하세요! 👋
                <br />
                <span className="text-gradient">개발자 홍길동</span>입니다
              </h3>
            </div>

            {/* 자기소개 텍스트 */}
            <div className="space-y-4 sm:space-y-6 text-body text-readable-muted">
              <p>
                5년 차 프론트엔드 개발자로, 사용자 중심의 직관적인 
                웹 애플리케이션을 만드는 것에 열정을 가지고 있습니다.
              </p>
              
              <p>
                React, TypeScript, Next.js를 주로 사용하며, 
                백엔드 개발 경험도 있어 풀스택 프로젝트도 가능합니다.
                성능 최적화와 사용자 경험 개선에 특히 관심이 많습니다.
              </p>
              
              <p>
                팀워크를 중시하며, 동료들과의 지식 공유와 코드 리뷰를 
                통해 함께 성장하는 것을 좋아합니다.
              </p>
            </div>

            {/* 간단한 통계 */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-caption text-readable-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                <div className="text-caption text-readable-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-caption text-readable-light">Technologies</div>
              </div>
            </div>
          </div>

          {/* 우측: 개인 특징 카드들 */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="group p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 p-2 sm:p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="heading-sm text-readable mb-2">
                        {item.title}
                      </h4>
                      <p className="text-body text-readable-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 경력 및 학력 요약 */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* 경력 */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white">
              주요 경력
            </h4>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-neutral-900 dark:text-white">
                    시니어 프론트엔드 개발자
                  </h5>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    2022 - 현재
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 mb-2">테크 스타트업</p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  React 기반 SaaS 플랫폼 개발 및 팀 리딩
                </p>
              </div>

              <div className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-neutral-900 dark:text-white">
                    프론트엔드 개발자
                  </h5>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    2020 - 2022
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">웹 에이전시</p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  다양한 클라이언트 프로젝트 개발
                </p>
              </div>
            </div>
          </div>

          {/* 학력 */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white">
              학력
            </h4>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-neutral-900 dark:text-white">
                    컴퓨터공학과 학사
                  </h5>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    2016 - 2020
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 mb-2">한국대학교</p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  졸업작품: React Native 기반 모바일 앱 개발
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
