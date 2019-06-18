// Your code goes here


const logoHeading = document.querySelector('.main-navigation .logo-heading');

logoHeading.addEventListener('mouseover', function (event) {
    event.target.style.color = 'red';
    console.log(event);
})


const navScale = document.querySelector('.main-navigation')

document.addEventListener('wheel', e => {
    navScale.style.height = '50px';

})


const busImage = document.querySelector('.intro img');

busImage.addEventListener('load', function (event) {
    busImage.style.opacity = '0.5';
})

const pageBody = document.querySelector('body')


const image = document.querySelectorAll('img')

image.forEach(function (element) {
    element.addEventListener('dblclick', function () {
        alert('Dude, these images wont get bigger when you double click on them!')
    })
})


