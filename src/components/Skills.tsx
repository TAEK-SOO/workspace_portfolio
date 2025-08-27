import React from 'react'

/**
 * Skills 섹션 컴포넌트
 * - 기술 스택을 카테고리별로 정리
 * - 호버 효과와 애니메이션
 * - 반응형 그리드 레이아웃
 * - 숙련도 레벨 표시
 */
export const Skills: React.FC = () => {
  // 기술 스택 데이터
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Next.js', level: 80, color: 'bg-gray-800' },
        { name: 'TailwindCSS', level: 85, color: 'bg-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Vue.js', level: 70, color: 'bg-green-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75, color: 'bg-green-600' },
        { name: 'Python', level: 70, color: 'bg-blue-500' },
        { name: 'Express', level: 75, color: 'bg-gray-600' },
        { name: 'PostgreSQL', level: 65, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 70, color: 'bg-green-700' },
        { name: 'Redis', level: 60, color: 'bg-red-500' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, color: 'bg-orange-500' },
        { name: 'Docker', level: 70, color: 'bg-blue-600' },
        { name: 'AWS', level: 65, color: 'bg-orange-400' },
        { name: 'Figma', level: 80, color: 'bg-purple-500' },
        { name: 'Jest', level: 75, color: 'bg-red-600' },
        { name: 'Webpack', level: 70, color: 'bg-blue-400' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-max-width section-padding">
        {/* 섹션 헤더 */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            기술 스택 & 도구
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            다양한 기술과 도구를 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다
          </p>
        </div>

        {/* 스킬 카테고리 그리드 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* 카테고리 제목 */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {category.title}
                </h4>
                <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
              </div>

              {/* 스킬 리스트 */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group bg-white dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md"
                  >
                    {/* 스킬 이름과 레벨 */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* 진행률 바 */}
                    <div className="relative">
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 인증/자격증 섹션 */}
        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            인증 & 자격증
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md">
              <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                AWS Certified
              </div>
              <div className="text-neutral-700 dark:text-neutral-300">
                Solutions Architect Associate
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                2023
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md">
              <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                정보처리기사
              </div>
              <div className="text-neutral-700 dark:text-neutral-300">
                한국산업인력공단
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                2021
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md">
              <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                SQLD
              </div>
              <div className="text-neutral-700 dark:text-neutral-300">
                한국데이터산업진흥원
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
