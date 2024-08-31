document.addEventListener('DOMContentLoaded', () => {
    const detailSection = document.getElementById('detail-section');
    const cards = document.querySelectorAll('.card');
    const loadingBarContainer = document.getElementById('loading-bar-container');
    const loadingBar = document.getElementById('loading-bar');
    const hoverText = 'Click for Details';
    const displayDuration = 500;

    // Function to show the loading bar
    const showLoadingBar = () => {
        loadingBarContainer.style.display = 'block';
        loadingBar.style.width = '0%';
        setTimeout(() => {
            loadingBar.style.width = '50%';
        }, 50); // Start the animation almost immediately
    };

    // Function to hide the loading bar
    const hideLoadingBar = () => {
        loadingBar.style.width = '100%';
        setTimeout(() => {
            loadingBarContainer.style.display = 'none';
        }, 400); // Hide the loading bar after the animation completes
    };

    // Function to load HTML content into the detail section
    const loadDetailContent = (url) => {
        showLoadingBar(); // Show loading bar when starting to load

        fetch(url)
            .then(response => response.text())
            .then(data => {
                detailSection.innerHTML = data;
                hideLoadingBar(); // Hide loading bar once content is loaded
                detailSection.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(error => {
                detailSection.innerHTML = `<p>Error loading content. Please try again later.</p>`;
                hideLoadingBar(); // Hide loading bar if there's an error
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
            const detailFile = `${detailKey}.html`;

            loadDetailContent(detailFile);
        });
    });
});
