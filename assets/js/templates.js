// assets/js/templates.js
// Sistema de Templates JavaScript

// Template para um único card de projeto
function createProjectCard(project) {
    let tagsHTML = '';
    project.tags.forEach(tag => {
        tagsHTML += `<span class="badge">${tag}</span>`;
    });

    const percentage = Math.floor((project.raised / project.goal) * 100);

    return `
        <div class="col-md-6 col-lg-4">
            <article class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-card-image">
                <div class="project-card-body">
                    <div class="tag-container">${tagsHTML}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-card-footer">
                        <div class="fundraising">
                            <h4>Arrecadação:</h4>
                            <div class="progress-bar-container">
                                <div class="progress-bar" style="width: ${percentage}%;"></div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-open-modal" data-project-id="${project.id}" style="width: 100%; margin-top: 1rem;">Quero Ajudar!</button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

// Função para o template do spinner
export function createLoadingSpinner() {
    return '<div class="loading-spinner"></div>';
}

// Função principal que renderiza os projetos em um container
export function renderProjects(projectList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 

    container.innerHTML = ''; 
    projectList.forEach(project => {
        container.innerHTML += createProjectCard(project);
    });
}