document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');
    const hoverText = 'Click for Details'; // The text to show on hover
    const displayDuration = 1000;  

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
        const h2 = card.querySelector('h2');
            const originalText = h2.textContent; // Store the original text

        card.addEventListener('mouseover', () => {
            h2.textContent = hoverText; // Change text on hover
            setTimeout(() => {
                if (h2.textContent === hoverText) {
                    h2.textContent = ''; 
                }
            }, displayDuration);
        });

        card.addEventListener('mouseout', () => {
            h2.textContent = originalText; 
            card.classList.add('animate-left'); // Add animation class

            // Remove the class after the animation is complete
            card.addEventListener('animationend', () => {
                card.classList.remove('animate-left');
            }, { once: true }); 
        });

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
