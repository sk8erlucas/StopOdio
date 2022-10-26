const burger = document.querySelector('#burger')

const tl = gsap.timeline()

tl.to('.menu-link', {
  translateY: '100%',
  duration: 0.5,
})

tl.to('.menu-overlay', {
  width: '0'
})


burger.addEventListener('click', () => {
  tl.reversed(!tl.reversed());
})