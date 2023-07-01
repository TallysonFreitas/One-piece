document.addEventListener('DOMContentLoaded',function () {  
    const capHeader = document.querySelectorAll('[data-capHeader]')

    for(let i = 0; i < capHeader.length; i++){
        capHeader[i].addEventListener('click',function () {  
            capHeader[i].parentNode.classList.toggle('is-open')
        })
    }
})