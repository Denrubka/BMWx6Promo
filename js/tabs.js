const designListIems = document.querySelectorAll('.design-list__item');
const designDescrElems = document.querySelectorAll('.design__descr');
const designBlockImgElems = document.querySelectorAll('.design-block__img');
const designImagesElems = document.querySelectorAll('.design-images');

designListIems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('design-list__item_active')) {
            designListIems.forEach((elem, i) => {
                elem.classList.remove('design-list__item_active');
                designDescrElems[i].classList.add('hidden');
                designBlockImgElems[i].classList.add('hidden');
                designImagesElems[i].classList.add('hidden');
            });
            item.classList.add('design-list__item_active');
            designDescrElems[index].classList.remove('hidden');
            designBlockImgElems[index].classList.remove('hidden');
            designImagesElems[index].classList.remove('hidden');
        }
    });
});