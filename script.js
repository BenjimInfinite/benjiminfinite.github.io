document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        } else {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    });
});
