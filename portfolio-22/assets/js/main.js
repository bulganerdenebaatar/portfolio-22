/* Menu Show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll selections active link */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* Scroll Reveal Animation */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll Home */
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/* Scroll About */
sr.reveal('.about__img', {origin:'right', delay: 500})
sr.reveal('.about__subtitle', {origin:'left', delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {origin:'left', delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/* Scroll Skills */
sr.reveal('.skills__subtitle', {origin:'left'})
sr.reveal('.skills__name', {distance: '20px', delay: 30, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/* Scroll Portfolio */
sr.reveal('.portfolio__img', {origin:'bottom',interval: 100})

/* Scroll Contact */
sr.reveal('.contact__item',{origin:'right', delay: 300, interval: 100})
sr.reveal('.contact__text',{delay: 400})

/* Scroll Education */
sr.reveal('.about__profession-span', {origin:'left', delay: 500, interval: 200})