const banktrans=document.querySelector('.bank_trans')
const trans=document.querySelector('#transfer')
const form=document.querySelector('form')
const visacard=document.querySelector('#visa-card')
const transfer=document.querySelector('.transfer')
const confirm=document.querySelector('#confirm')
const message=document.querySelector('.message')
 
//bank transfer//
trans.addEventListener('click',() =>{
    form.style.display='none'
    banktrans.style.display='block'
    transfer.classList.add('show')
    visacard.classList.remove('show')
    
})

//cofirm payment//
confirm.addEventListener('click',() =>{
    message.style.display='block'
    
})

//card payment//
visacard.addEventListener('click',() =>{
    form.style.display='block'
    banktrans.style.display='none'
    message.style.display='none'
    transfer.classList.remove('show')
    visacard.classList.add('show')
    
})


