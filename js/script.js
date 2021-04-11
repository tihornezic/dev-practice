const searchButton = document.getElementById('search')
const searchButtonSmall = document.getElementById('search-small')
const searchWrapper = document.getElementById('search-wrapper')
const closeButton = document.getElementById('close-button')
const inputText = document.getElementById('input-text')
const loaderWrapper = document.getElementById('loader-wrapper').style
const hamburgerMenuButton = document.getElementById('hamburger-menu-button')
const ul = document.getElementById('ul')
const headerLi = document.getElementById('header-li')
const windowWidth = window.innerWidth

// page loader
// jquery only because of the fadeOut
setTimeout(function () {
    $('.loader-wrapper').fadeOut();
}, 1000)


// open search
searchButton.addEventListener('click', (e) => {
    e.preventDefault()

    // turn the searchWrapper on
    searchWrapper.style.display = 'block'
    // set the caret to blink
    document.getElementById('input-text').focus()


    // when it is on, if 27 keyCode is pressed (Escape), then turn the
    // searchWrapper off
    if (searchWrapper.style.display = 'block') {
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
                searchWrapper.style.display = 'none'
            }
        });
    }
})

searchButtonSmall.addEventListener('click', (e) => {
    e.preventDefault()

    searchWrapper.style.display = 'block'

    if (searchWrapper.style.display = 'block') {
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
                searchWrapper.style.display = 'none'
            }
        });
    }

})

// close search
closeButton.addEventListener('click', (e) => {
    e.preventDefault()

    searchWrapper.style.display = 'none'
})

// toggle hamburger menu
hamburgerMenuButton.addEventListener('click', (e) => {
    e.preventDefault()

    ul.classList.toggle('hamburger')
    headerLi.classList.toggle('hamburger')
})


// fix the header when scroll down, so it sticks on the top
$(window).scroll(function () {
    // if scroll is from up
    if ($(window).scrollTop() > 50) {
        $('nav').addClass('fixed-nav')
    } else {
        $('nav').removeClass('fixed-nav')
    }
})


