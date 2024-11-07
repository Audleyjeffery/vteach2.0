const testimonials = document.querySelector('#test')
const indicators =[...document.querySelectorAll('.indicators button')]
let currenttestimonial = 0 

indicators.forEach((item, i) =>{
    item.addEventListener('click', () =>{
        indicators[currenttestimonial].classList.remove('active')
        testimonials.style.marginleft = '-$ {100 * 1}%'
        item.classList.add('active')
        currenttestimonial = i;
    })
})