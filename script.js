document.querySelectorAll('.art-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('clicked');
    });
});
