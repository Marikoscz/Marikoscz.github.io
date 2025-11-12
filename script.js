// Smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active section in TOC
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('.toc-box a');

function updateActiveTOC() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    tocLinks.forEach(link => {
        link.style.fontWeight = 'normal';
        if (link.getAttribute('href') === '#' + currentSection) {
            link.style.fontWeight = 'bold';
        }
    });
}

window.addEventListener('scroll', updateActiveTOC);
updateActiveTOC();
