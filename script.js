let a1 = document.querySelector('.silka')
let a2 = document.querySelector('.img')
a2.alt = 'cat'
a1.href = 'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*'

let a3 = document.querySelector('.img-2')
a3.src = 'https://www.proplan.ru/sites/default/files/styles/image_1920x767/public/2022-12/porody-sluzhebnyh-sobak_1920.jpg?itok=byLXm-7i'

let a4 = document.querySelector('.Bara')
a4.textContent = 'Violet'

let a5 = document.getElementById('fa-button')
let a6 = document.getElementById('fa-input')
a5.addEventListener('click', function(){
    a5.textContent = a6.value
})