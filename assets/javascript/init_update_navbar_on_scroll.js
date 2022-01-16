const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar')
  const triggerElement = document.querySelector('.navbar-trigger')
  if (navbar) {
    const navbarCta = navbar.querySelector('#navbar-cta')
    const brandText = navbar.querySelector('.brand-text')
    if (triggerElement) {
      window.addEventListener('scroll', () => {
        const triggerElementRectangle = triggerElement.getBoundingClientRect()
        if (triggerElementRectangle.bottom <= navbar.offsetHeight) {
          brandText.classList.add('d-none')
          navbarCta.classList.remove('d-none')
        } else {
          brandText.classList.remove('d-none')
          navbarCta.classList.add('d-none')
        }
      })
    } else {
      console.log("hello")
      brandText.classList.add('d-none')
      navbarCta.classList.remove('d-none')
    }
  }
}

initUpdateNavbarOnScroll()
