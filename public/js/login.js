// Configuração do CSRF token para todas as requisições AJAX
const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

// Variáveis globais
const formsContainer = document.getElementById("formsContainer");
const imageTitle = document.getElementById("imageTitle");
const imageText = document.getElementById("imageText");
const imageCTA = document.getElementById("imageCTA");

let isRegisterMode = false;

// Função para exibir mensagens
function showMessage(elementId, message, type = "error") {
    const messageElement = document.getElementById(elementId);
    messageElement.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
    messageElement.style.display = "block";

    // Auto-hide após 5 segundos
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 5000);
}

// Função para mostrar/esconder loading nos botões
function toggleButtonLoading(buttonId, isLoading) {
    const button = document.getElementById(buttonId);
    const btnText = button.querySelector(".btn-text");
    const spinner = button.querySelector(".fa-spinner");

    if (isLoading) {
        button.disabled = true;
        btnText.style.display = "none";
        spinner.style.display = "inline-block";
    } else {
        button.disabled = false;
        btnText.style.display = "inline";
        spinner.style.display = "none";
    }
}

// Função para limpar mensagens
function clearMessages() {
    document.getElementById("loginMessage").style.display = "none";
    document.getElementById("registerMessage").style.display = "none";
}

// Função para mostrar formulário de registro
function showRegister() {
    if (!isRegisterMode) {
        clearMessages();
        formsContainer.classList.add("show-register");

        // Atualizar conteúdo da imagem com delay para suavidade
        setTimeout(() => {
            imageTitle.textContent = "Bem-vindo ao UniXepa!";
            imageText.textContent =
                "Junte-se à nossa comunidade universitária e descubra as melhores xepas!";
            imageCTA.textContent = "Já tem conta? Entre";
            imageCTA.onclick = showLogin;
        }, 300);

        isRegisterMode = true;
    }
}

// Função para mostrar formulário de login
function showLogin() {
    if (isRegisterMode) {
        clearMessages();
        formsContainer.classList.remove("show-register");

        // Atualizar conteúdo da imagem com delay para suavidade
        setTimeout(() => {
            imageTitle.textContent = "Peça sua xepa favorita!";
            imageText.textContent =
                "Bateu a fome na aula? Já se adiante e peça sua Xepa!";
            imageCTA.textContent = "Cadastre-se agora";
            imageCTA.onclick = showRegister;
        }, 300);

        isRegisterMode = false;
    }
}

// Função para processar login
async function handleLogin(event) {
    event.preventDefault();

    clearMessages();
    toggleButtonLoading("loginBtn", true);

    const formData = new FormData(event.target);

    try {
        const response = await fetch("/entrar/login", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
                Accept: "application/json",
            },
        });

        const data = await response.json();

        if (data.success) {
            showMessage("loginMessage", data.message, "success");
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 1000);
        } else {
            showMessage("loginMessage", data.message, "error");
        }
    } catch (error) {
        console.error("Erro:", error);
        showMessage(
            "loginMessage",
            "Erro de conexão. Tente novamente.",
            "error"
        );
    } finally {
        toggleButtonLoading("loginBtn", false);
    }
}

// Função para processar registro
async function handleRegister(event) {
    event.preventDefault();

    clearMessages();
    toggleButtonLoading("registerBtn", true);

    const formData = new FormData(event.target);

    try {
        const response = await fetch("/entrar/register", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
                Accept: "application/json",
            },
        });

        const data = await response.json();

        if (data.success) {
            showMessage("registerMessage", data.message, "success");
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 1000);
        } else {
            let errorMessage = data.message;

            // Se há erros específicos de validação, mostrá-los
            if (data.errors) {
                const errorList = Object.values(data.errors).flat();
                errorMessage = errorList.join("<br>");
            }

            showMessage("registerMessage", errorMessage, "error");
        }
    } catch (error) {
        console.error("Erro:", error);
        showMessage(
            "registerMessage",
            "Erro de conexão. Tente novamente.",
            "error"
        );
    } finally {
        toggleButtonLoading("registerBtn", false);
    }
}

// Inicialização quando o DOM carrega
document.addEventListener("DOMContentLoaded", function () {
    // Garantir estado inicial
    isRegisterMode = false;
    formsContainer.classList.remove("show-register");

    // Event listeners para os formulários
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }

    // Validação em tempo real para o formulário de registro
    const passwordInputs = document.querySelectorAll(
        '#registerForm input[type="password"]'
    );
    if (passwordInputs.length === 2) {
        passwordInputs[1].addEventListener("blur", function () {
            if (
                passwordInputs[0].value &&
                this.value &&
                passwordInputs[0].value !== this.value
            ) {
                this.setCustomValidity("As senhas não coincidem");
                this.reportValidity();
            } else {
                this.setCustomValidity("");
            }
        });
    }

    // Formatação do telefone
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length >= 10) {
                value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
            }
            e.target.value = value;
        });
    }
});

// Função auxiliar para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função auxiliar para validar telefone
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\(\)\-\+]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}
