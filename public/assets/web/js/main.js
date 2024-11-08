/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== sub main header active link ===============*/

// let navItems = document.querySelectorAll('.navigation li');

// navItems.forEach(navItem => {
//     navItem.addEventListener('click', e => {
//         document.querySelector('.navigation li.active').classList.remove('active');
//         //console.log(e.target);
//         e.target.parentElement.parentElement.classList.add('active');

//     });
// });

/*=============== main header active-link===============*/

let navItem = document.querySelectorAll('.nav__list  a');

navItem.forEach(navItemmain => {
    navItemmain.addEventListener('click', e => {
        document.querySelector('.nav__list  a.active-link').classList.remove('active-link');
        navItemmain.classList.add('active-link');
    });
});

