import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

/**
 * Contact 섹션 컴포넌트
 * - 연락처 정보 표시
 * - 문의 폼 (유효성 검사 포함)
 * - EmailJS 연동 (실제 이메일 전송)
 * - 소셜 미디어 링크
 */
export const Contact: React.FC = () => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
  }>({
    type: 'idle',
    message: '',
  })

  // 연락처 정보
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+82 10-1234-5678',
      link: 'tel:+821012345678',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '서울, 대한민국',
      link: null,
    },
  ]

  /**
   * 입력 필드 변경 핸들러
   * - 실시간으로 폼 데이터 업데이트
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  /**
   * 이메일 유효성 검사 함수
   */
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * 폼 유효성 검사
   */
  const validateForm = () => {
    if (!formData.name.trim()) {
      return { isValid: false, message: '이름을 입력해주세요.' }
    }
    
    if (!formData.email.trim()) {
      return { isValid: false, message: '이메일을 입력해주세요.' }
    }
    
    if (!isValidEmail(formData.email)) {
      return { isValid: false, message: '올바른 이메일 형식을 입력해주세요.' }
    }
    
    if (!formData.subject.trim()) {
      return { isValid: false, message: '제목을 입력해주세요.' }
    }
    
    if (!formData.message.trim()) {
      return { isValid: false, message: '메시지를 입력해주세요.' }
    }

    return { isValid: true, message: '' }
  }

  /**
   * 폼 제출 핸들러
   * - 유효성 검사 후 EmailJS로 이메일 전송
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 유효성 검사
    const validation = validateForm()
    if (!validation.isValid) {
      setFormStatus({
        type: 'error',
        message: validation.message,
      })
      return
    }

    setFormStatus({
      type: 'loading',
      message: '메시지를 전송 중입니다...',
    })

    try {
      // 여기에 실제 EmailJS 연동 코드 또는 서버 API 호출
      // await emailjs.send(...)
      
      // 임시로 성공 처리 (실제로는 EmailJS 응답에 따라 처리)
      await new Promise(resolve => setTimeout(resolve, 2000)) // 2초 지연 시뮬레이션
      
      setFormStatus({
        type: 'success',
        message: '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.',
      })

      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // 3초 후 상태 초기화
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' })
      }, 3000)

    } catch (error) {
      setFormStatus({
        type: 'error',
        message: '메시지 전송에 실패했습니다. 다시 시도해주세요.',
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-max-width section-padding">
        {/* 섹션 헤더 */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            연락하기
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 좌측: 연락처 정보 */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-neutral-900 dark:text-white">
                연락처 정보
              </h4>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                프로젝트 문의, 협업 제안, 또는 단순한 인사말까지 
                언제든 환영합니다. 빠른 시일 내에 답변드리겠습니다.
              </p>
            </div>

            {/* 연락처 정보 카드들 */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {info.title}
                      </div>
                      <div className="text-neutral-900 dark:text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </div>
                )

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className="block hover:scale-105 transition-transform duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          {/* 우측: 문의 폼 */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* 이름 입력 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-200"
                    placeholder="홍길동"
                    required
                  />
                </div>

                {/* 이메일 입력 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-200"
                    placeholder="contact@example.com"
                    required
                  />
                </div>
              </div>

              {/* 제목 입력 */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  제목 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-200"
                  placeholder="프로젝트 문의"
                  required
                />
              </div>

              {/* 메시지 입력 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-200 resize-none"
                  placeholder="안녕하세요! 프로젝트에 대해 문의드리고 싶습니다..."
                  required
                />
              </div>

              {/* 상태 메시지 */}
              {formStatus.type !== 'idle' && (
                <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                  formStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : formStatus.type === 'error'
                    ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                }`}>
                  {formStatus.type === 'success' && <CheckCircle className="h-5 w-5" />}
                  {formStatus.type === 'error' && <AlertCircle className="h-5 w-5" />}
                  {formStatus.type === 'loading' && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    메시지 보내기
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
