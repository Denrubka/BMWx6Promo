const modal = document.querySelector('.modal');
const moreLinks = document.querySelectorAll('.more');

moreLinks.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    })
});
modal.addEventListener('click', (event) => {
    target = event.target;
    if(target.classList.contains('modal__close') || target.classList.contains('overlay') && !target.classList.contains('modal-wrapper')) { 
        closeModal();
    };
});
document.addEventListener('keyup', event => {
    if (event.code === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
};