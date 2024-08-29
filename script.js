document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');

    // Define the detail data
    const details = {
        career: 'Details about your career prospective...',
        education: 'Details about your educational prospective...',
        thesis: 'Details about your B.Sc. Thesis...',
        projects: 'Details about your projects...',
        experience: 'Details about your work experience...'
    };

    // Attach click event listeners to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const detailKey = card.getAttribute('data-detail');
            // Check if detailKey exists in details
            if (details[detailKey]) {
                detailSection.innerHTML = `<p>${details[detailKey]}</p>`;
            } else {
                detailSection.innerHTML = `<p>No details available.</p>`;
            }
            // Scroll to the detail section
            detailSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
