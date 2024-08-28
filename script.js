document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');

    const details = {
        career:'jhgfdddddddddddigndmcopm',
            // <h3>Career Prospective</h3>
            // <p>Details about your career prospective...</p>
            // <img src="https://fromdanielsdesk.com/wp-content/uploads/2020/06/tie-690084_1280-600x310.png" alt="Career Image" style="width:100%; height:auto;">
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
