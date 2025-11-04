// assets/js/theme.js
// Lógica para o Modo Escuro e Acessibilidade

export function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // 1. Verifica se já existe um tema salvo no localStorage
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        // Marca o checkbox se o tema salvo for 'dark-mode'
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }

    // 2. Adiciona o evento de clique no toggle
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Se o toggle está marcado, ativa o dark mode
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // Se não, desativa
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
}