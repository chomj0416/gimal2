document.addEventListener('DOMContentLoaded', function () {
  const starImg = document.getElementById('star-img')
  const header = document.querySelector('.header')
  const typingText = document.getElementById('typing-text')

  // 색변경
  if (starImg && header) {
    starImg.addEventListener('click', function () {
      document.body.classList.toggle('theme-dark')
      header.classList.toggle('theme-dark')
      starImg.classList.toggle('theme-dark')
    })
  }

  // 타이핑 애니메이션
  if (typingText) {
    const text = '조민정의 포트폴리오'
    let index = 0

    function type() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index)
        index++
        setTimeout(type, 150)
      }
    }

    type()
  }
})

// 프로젝트 이미지 확대
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
// 어바웃미 별 확대
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

//  팝업
document.addEventListener('DOMContentLoaded', function () {
  const helloLink = document.getElementById('hello-link')
  if (helloLink) {
    helloLink.addEventListener('click', function (event) {
      event.preventDefault()
      const confirmed = confirm('팀페이지로 이동하겠습니까?')
      if (confirmed) {
        window.location.href = 'https://fianl-team.vercel.app/'
      }
    })
  }
})
