document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');

    const details = {
        <h3>Career Prospective</h3>
        <p>Details about your career prospective...</p>
        education: 'Details about your educational prospective...',
        thesis: 'Details about your B.Sc. Thesis...',
        projects: 'Details about your projects...',
        experience: 'Details about your work experience...'
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const detailKey = card.getAttribute('data-detail');
            detailSection.innerHTML = `<p>${details[detailKey]}</p>`;
            
            // Smooth scroll to the detail section
            detailSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
