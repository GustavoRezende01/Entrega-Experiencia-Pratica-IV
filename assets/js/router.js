// assets/js/router.js

export function initRouter() {
    // Escuta por cliques nos links (ex: #projetos)
    window.addEventListener('hashchange', handleRouteChange);
    
    // Executa a função IMEDIATAMENTE no carregamento
    // para garantir que a página correta seja exibida.
    handleRouteChange(); 
}

function handleRouteChange() {
    const hash = window.location.hash || '#home';
    const pageId = 'page-' + hash.substring(1);

    // 1. Esconde TODAS as seções de página
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // Garante que esteja escondido
    });

    // 2. Mostra a seção de página correta
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block'; // Garante que ela apareça
        
        // Força um pequeno atraso para a animação de fade-in funcionar
        setTimeout(() => {
            activePage.classList.add('active');
        }, 10); // 10ms é o suficiente

    } else {
        // Fallback (Se o hash for inválido, mostra a home)
        const homePage = document.getElementById('page-home');
        homePage.style.display = 'block';
        homePage.classList.add('active');
    }

    // 3. Atualiza o link ativo na navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}