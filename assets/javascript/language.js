let languageData = {};
let currentLang = 'pl';

document.addEventListener("DOMContentLoaded", () => {
    const alertBox = document.querySelector(".alert");
    const websiteContent = document.querySelector(".website");

    if (alertBox) alertBox.style.display = "none";
    if (websiteContent) websiteContent.style.display = "block";

    fetch('./assets/texts.json')
        .then(response => {
            if (!response.ok) throw new Error("Nie można załadować JSON");
            return response.json();
        })
        .then(data => {
            languageData = data;
            updateLanguage('pl');
        })
        .catch(error => {
            console.error("Błąd:", error);
        });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

function updateLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (languageData[key] && languageData[key][lang]) {
            element.textContent = languageData[key][lang];
        }
    });

    renderOpinions(lang);
}

function renderOpinions(lang) {
    const grid = document.getElementById('opinions-grid');
    if (!grid) return;

    const opinions = languageData['$opinions_data'];
    if (!opinions || !opinions[lang]) return;

    grid.innerHTML = '';

    opinions[lang].forEach((opinion, index) => {
        const card = document.createElement('div');
        card.className = 'opinion-card fade-in';

        // Stars
        let starsHTML = '<div class="opinion-stars">';
        for (let i = 0; i < 5; i++) {
            starsHTML += i < opinion.stars
                ? '<i class="fa-solid fa-star"></i>'
                : '<i class="fa-regular fa-star"></i>';
        }
        starsHTML += '</div>';

        // Initials
        const initials = opinion.name.split(' ').map(n => n[0]).join('');

        card.innerHTML = `
            ${starsHTML}
            <p class="opinion-text">${opinion.text}</p>
            <div class="opinion-author">
                <div class="opinion-avatar">${initials}</div>
                <div class="opinion-author-info">
                    <h4>${opinion.name}</h4>
                    <span>${opinion.role}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);

        // Trigger animation with delay
        setTimeout(() => card.classList.add('visible'), 100 * (index + 1));
    });
}

function setLanguage(lang) {
    updateLanguage(lang);
}
