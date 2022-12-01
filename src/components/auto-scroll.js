function autoScroll() {
  let scrollBtn = document.querySelector('.scroll-to-top');

  let screenshots = document.querySelectorAll('.screenshots_nav');
  let screenshotsLink = document.querySelector('.slider');

  let about = document.querySelectorAll('.about_nav');
  let aboutLink = document.querySelector('.about');

  let testimonials = document.querySelectorAll('.testimonials_nav');
  let testimonialsLink = document.querySelector('.feedback');

  let exclusive = document.querySelectorAll('.exclusive_nav');
  let exclusiveLink = document.querySelector('.timer-wrapper');

  let networks = document.querySelectorAll('.networks_nav');
  let networksLink = document.querySelector('.footer');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > '1000') {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 1, behavior: 'smooth' });
  });

  screenshots.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      screenshotsLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  about.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click YES');
      aboutLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  testimonials.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click YES');
      testimonialsLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  exclusive.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click YES');
      exclusiveLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  networks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click YES');
      networksLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

module.exports = autoScroll;
