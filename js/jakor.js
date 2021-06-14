const anchors = document.querySelectorAll('a[href*="#-"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(i){
        i.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector(''+ blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}