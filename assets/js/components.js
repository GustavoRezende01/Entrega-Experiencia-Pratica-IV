// assets/js/components.js
// ATUALIZADO: Controlando o <button> do menu e 'aria-expanded'

import { projectsDB } from './database.js';

// Lógica do Menu Hambúrguer (ATUALIZADA)
export function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navLinks.classList.toggle('active');
            
            // ATUALIZAÇÃO WCAG: Informa ao leitor de tela se o menu está aberto ou fechado
            const isExpanded = navLinks.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// Lógica do Modal (O seletor '.close-button' já funciona com o <button>)
export function initModal() {
    document.body.addEventListener('click', function(event) {
        
        // Se clicar no botão de abrir
        if (event.target && event.target.classList.contains('btn-open-modal')) {
            const projectId = event.target.dataset.projectId;
            showVolunteerModal(projectId);
        }
        
        // Se clicar no botão de fechar (agora é um <button> real)
        if (event.target && event.target.classList.contains('close-button')) {
            closeVolunteerModal();
        }

        // Se clicar no link "Ir para o Cadastro"
        if (event.target && event.target.getAttribute('href') === '#cadastro') {
            closeVolunteerModal();
        }
    });
}

function showVolunteerModal(projectId) {
    const modal = document.getElementById('volunteer-modal');
    const projectTitleEl = document.getElementById('modal-project-title');
    
    const project = projectsDB.find(p => p.id === Number(projectId));
    
    if (project) {
        projectTitleEl.textContent = project.title;
        modal.style.display = 'flex';
    }
}

function closeVolunteerModal() {
    const modal = document.getElementById('volunteer-modal');
    modal.style.display = 'none';
}