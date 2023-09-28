/*menu on scroll*/
function onScroll () {

    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }

}

/*button close and open menu*/
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: '700'
}).reveal(
    `.style1 img,
    .style2 .text,
    #time span`
)

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '700'
}).reveal(
    `.style2 img,
    .style1 .text,
    #time p`
)

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '700'
}).reveal(
    `header h2,
    header h1`
)