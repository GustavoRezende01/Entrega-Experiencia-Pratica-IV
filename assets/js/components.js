
import { projectsDB } from './database.js';

export function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

export function initModal() {
    document.body.addEventListener('click', function(event) {
        
        // Se clicar no botão de abrir
        if (event.target && event.target.classList.contains('btn-open-modal')) {
            const projectId = event.target.dataset.projectId;
            showVolunteerModal(projectId);
        }
        
        // Se clicar no botão de fechar (dentro do modal)
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