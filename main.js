document.addEventListener('DOMContentLoaded', function () {
  const starImg = document.getElementById('star-img')
  const header = document.querySelector('.header')
  const typingText = document.getElementById('typing-text') // 타이핑할 위치

  // ⭐ 테마 변경 기능
  if (starImg && header) {
    starImg.addEventListener('click', function () {
      document.body.classList.toggle('theme-dark')
      header.classList.toggle('theme-dark')
      starImg.classList.toggle('theme-dark')
    })
  }

  // ⭐ 타이핑 애니메이션
  if (typingText) {
    const text = '조민정의 포트폴리오'
    let index = 0

    function type() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index)
        index++
        setTimeout(type, 150) // 타이핑 속도 조절
      }
    }

    type() // 타이핑 시작
  }
})

// ⭐ 프로젝트 이미지 확대 효과 (hover)
document.addEventListener('DOMContentLoaded', function () {
  const projectImages = document.querySelectorAll('.project img')

  projectImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
      img.classList.add('hover-zoom')
    })

    img.addEventListener('mouseout', () => {
      img.classList.remove('hover-zoom')
    })
  })
})
// ⭐ aboutme.html 이미지 네온 확대 효과
document.addEventListener('DOMContentLoaded', function () {
  const aboutImage = document.querySelector('.about-image img')

  if (aboutImage) {
    aboutImage.addEventListener('mouseover', () => {
      aboutImage.classList.add('hover-glow')
    })

    aboutImage.addEventListener('mouseout', () => {
      aboutImage.classList.remove('hover-glow')
    })
  }
})

// ⭐ Hello world! 클릭 시 팝업 띄우고 이동 여부 확인
document.addEventListener('DOMContentLoaded', function () {
  const helloLink = document.getElementById('hello-link')
  if (helloLink) {
    helloLink.addEventListener('click', function (event) {
      event.preventDefault() // 기본 링크 이동 막기
      const confirmed = confirm('팀페이지로 이동하겠습니까?')
      if (confirmed) {
        window.location.href = 'https://github.com/chomj0416'
      }
    })
  }
})
