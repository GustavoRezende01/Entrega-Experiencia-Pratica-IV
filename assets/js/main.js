// assets/js/main.js
// Ponto de entrada principal da aplicação

import { projectsDB } from './database.js';
import { initRouter } from './router.js';
import { initHamburgerMenu, initModal } from './components.js';
import { renderProjects, createLoadingSpinner } from './templates.js';
import { initFormValidation } from './validation.js';
import { initTheme } from './theme.js'; // <-- 1. IMPORTA O NOVO MÓDULO

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os componentes de UI
    initHamburgerMenu();
    initModal();
    initTheme(); // <-- 2. INICIALIZA A LÓGICA DO TEMA
    
    // Inicializa o roteador da SPA
    initRouter();
    
    // Inicializa a validação dos formulários
    initFormValidation();

    // --- LÓGICA DE CARREGAMENTO ATUALIZADA ---
    
    const previewContainer = document.getElementById('projects-preview-container');
    const projectsContainer = document.getElementById('projects-container');

    // 1. Mostra o Spinner imediatamente
    if (previewContainer) previewContainer.innerHTML = createLoadingSpinner();
    if (projectsContainer) projectsContainer.innerHTML = createLoadingSpinner();

    // 2. Simula uma busca de dados (1 segundo de delay)
    setTimeout(() => {
        // 3. Renderiza os projetos após o delay
        renderProjects(projectsDB.slice(0, 3), 'projects-preview-container');
        renderProjects(projectsDB, 'projects-container');
    }, 1000); // 1000ms = 1 segundo
});