// JavaScript para mostrar las secciones al hacer clic en el enlace del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            if (section !== targetSection) {
                section.classList.add('hidden');
            }
        });

        targetSection.classList.remove('hidden');
    });
});
