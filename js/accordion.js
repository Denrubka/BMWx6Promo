document.addEventListener("DOMContentLoaded", () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');
    const featureList = document.querySelector('.feature-list');
    const featureItems = document.querySelectorAll('.feature-item');

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('feature__link_active')) {
                accordionClose(btn);
            } else {
                accordionOpen(btn, index);
            }
        });
    });
    
    const accordionOpen = (btn, index) => {
        featureSubElems.forEach((featureSubElem, index) => {
            featureSubElem.classList.add('hidden');
            featureLinkElems[index].classList.remove('feature__link_active');
        })
        btn.classList.add('feature__link_active');
        featureSubElems[index].classList.remove('hidden');
    }
    const accordionClose = (btn) => {
        featureSubElems.forEach((featureSubElem) => {
            featureSubElem.classList.add('hidden');
            btn.classList.remove('feature__link_active');
        })
    }
});