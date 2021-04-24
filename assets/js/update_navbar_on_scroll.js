const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.remove('d-none')
      } else {
        navbar.classList.add('d-none')
      }
    })
  }
}

export default initUpdateNavbarOnScroll
