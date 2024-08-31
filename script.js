document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');
    const hoverText = 'Click for Details';
    const displayDuration = 500;

    // Function to load HTML content into the detail section
    const loadDetailContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                detailSection.innerHTML = data;
                detailSection.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(error => {
                detailSection.innerHTML = `<p>Error loading content. Please try again later.</p>`;
                console.error('Error loading detail:', error);
            });
    };

    cards.forEach(card => {
        const h2 = card.querySelector('h2');
        const originalText = h2.innerHTML;

        card.addEventListener('mouseover', () => {
            h2.innerHTML = hoverText;
            setTimeout(() => {
                if (h2.innerHTML === hoverText) {
                    h2.innerHTML = '';
                }
            }, displayDuration);
        });

        card.addEventListener('mouseout', () => {
            h2.innerHTML = originalText;
            card.classList.add('animate-left');

            card.addEventListener('animationend', () => {
                card.classList.remove('animate-left');
            }, { once: true });
        });

        card.addEventListener('click', () => {
            const detailKey = card.getAttribute('data-detail');
            const detailFile = `${detailKey}.html`; // e.g., career.html, education.html

            loadDetailContent(detailFile);
        });
    });
});
