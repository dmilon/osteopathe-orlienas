const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    const navbarCta = navbar.querySelector('#navbar-cta')
    const brandText = navbar.querySelector('.brand-text')
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 460) {
        brandText.classList.add('d-none')
        navbarCta.classList.remove('d-none')
      } else {
        brandText.classList.remove('d-none')
        navbarCta.classList.add('d-none')
      }
    });
  }
}

initUpdateNavbarOnScroll()
