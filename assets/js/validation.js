// assets/js/validation.js
// Verificação de consistência de dados e Armazenamento Local

const errorMessages = {
    valueMissing: "Este campo é obrigatório.",
    typeMismatch: "Por favor, insira um formato válido.",
    patternMismatch: "O formato está incorreto.",
    tooShort: "O valor é muito curto."
};

export function initFormValidation() {
    const form = document.getElementById('cadastro-form');
    if (!form) return;

    const inputs = form.querySelectorAll('.form-control[required]');

    // Carrega dados do Local Storage
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    form.addEventListener('submit', (e) => {
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            e.preventDefault(); 
            alert("Por favor, corrija os erros no formulário.");
        } else {
            alert("Cadastro enviado com sucesso! (simulação)");
            inputs.forEach(input => {
                localStorage.removeItem(input.id);
            });
        }
    });

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            input.classList.add('touched'); 
            validateInput(input);
        });
        
        input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.value);
            if (input.classList.contains('touched')) {
                validateInput(input);
            }
        });
    });
}

function validateInput(input) {
    const errorContainer = input.nextElementSibling; 
    if (input.validity.valid) {
        errorContainer.textContent = '';
        errorContainer.style.display = 'none';
        return true;
    } else {
        let message = '';
        if (input.validity.valueMissing) message = errorMessages.valueMissing;
        else if (input.validity.typeMismatch) message = errorMessages.typeMismatch;
        else if (input.validity.patternMismatch) message = errorMessages.patternMismatch;
        else if (input.validity.tooShort) message = `Deve ter no mínimo ${input.minLength} caracteres.`;
        
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
        return false;
    }
}