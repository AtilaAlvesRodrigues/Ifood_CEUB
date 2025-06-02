<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Uni-Xepa - Login</title>
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
</head>

<body>
    <div class="container">
        <!-- Lado do formulário -->
        <div class="form-side">
            <div class="forms-container" id="formsContainer">
                <!-- Formulário de Login -->
                <div class="login-form">
                    <div class="logo">
                        <img src="{{ asset('images/Uni-Xepa Logo.png') }}" alt="Uni-Xepa Logo">
                    </div>
                    <h1 class="form-title">Entre na sua conta</h1>

                    <!-- Área para mensagens de erro/sucesso -->
                    <div id="loginMessage" class="message-area" style="display: none;"></div>

                    <form id="loginForm">
                        @csrf
                        <div class="input-group">
                            <input type="email" name="email" placeholder="E-mail" required>
                            <i class="fas fa-user"></i>
                        </div>

                        <div class="input-group">
                            <input type="password" name="password" placeholder="Senha" required>
                            <i class="fas fa-lock"></i>
                        </div>

                        <div class="forgot-password">
                            <a href="#" onclick="alert('Funcionalidade em desenvolvimento')">Esqueci minha senha</a>
                            <span class="tooltip">
                                <i class="fas fa-circle-info"></i>
                                <span class="tooltip-text">Enviaremos um link para o seu e-mail para redefinir sua senha.</span>
                            </span>
                        </div>

                        <button type="submit" class="btn-primary" id="loginBtn">
                            <span class="btn-text">Entrar</span>
                            <i class="fas fa-spinner fa-spin" style="display: none;"></i>
                        </button>
                    </form>

                    <div class="separator">ou continue com</div>

                    <div class="social-login">
                        <button class="social-btn" type="button" onclick="alert('Login social em desenvolvimento')">
                            <i class="fab fa-google"></i>
                        </button>
                        <button class="social-btn" type="button" onclick="alert('Login social em desenvolvimento')">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                        <button class="social-btn" type="button" onclick="alert('Login social em desenvolvimento')">
                            <i class="fab fa-apple"></i>
                        </button>
                    </div>

                    <div class="form-link">
                        Ainda não tem uma conta? <a href="#" onclick="showRegister()">Cadastre-se</a>
                    </div>
                </div>

                <!-- Formulário de Registro -->
                <div class="register-form">
                    <div class="logo">
                        <img src="{{ asset('images/Uni-Xepa Logo.png') }}" alt="Uni-Xepa Logo">
                    </div>
                    <h1 class="form-title">Crie sua conta</h1>

                    <!-- Área para mensagens de erro/sucesso -->
                    <div id="registerMessage" class="message-area" style="display: none;"></div>

                    <form id="registerForm">
                        @csrf
                        <div class="input-row">
                            <div class="input-group">
                                <input type="text" name="name" placeholder="Nome" required>
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="input-group">
                                <input type="text" name="lastname" placeholder="Sobrenome" required>
                                <i class="fas fa-user"></i>
                            </div>
                        </div>

                        <div class="input-group">
                            <input type="email" name="email" placeholder="E-mail" required>
                            <i class="fas fa-envelope"></i>
                        </div>

                        <div class="input-group">
                            <input type="password" name="password" placeholder="Senha" required>
                            <i class="fas fa-lock"></i>
                        </div>

                        <div class="input-group">
                            <input type="password" name="password_confirmation" placeholder="Confirmar senha" required>
                            <i class="fas fa-lock"></i>
                        </div>

                        <button type="submit" class="btn-primary" id="registerBtn">
                            <span class="btn-text">Cadastrar</span>
                            <i class="fas fa-spinner fa-spin" style="display: none;"></i>
                        </button>
                    </form>

                    <div class="terms">
                        Ao se cadastrar, você concorda com nossos
                        <a href="#" onclick="alert('Termos em desenvolvimento')">Termos de Uso</a> e 
                        <a href="#" onclick="alert('Política em desenvolvimento')">Política de Privacidade</a>
                    </div>

                    <div class="form-link">
                        Já tem uma conta? <a href="#" onclick="showLogin()">Entrar</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lado da imagem -->
        <div class="image-side" id="imageSide">
            <div class="image-content" id="imageContent">
                <div class="food-image">
                    <img src="{{ asset('images/food-placeholder.jpg') }}" alt="Comida deliciosa">
                </div>
                <h2 id="imageTitle">Peça sua xepa favorita!</h2>
                <p id="imageText">Bateu a fome na aula? Já se adiante e peça sua Xepa!</p>
                <button class="btn-secondary" id="imageCTA" onclick="showRegister()">Cadastre-se agora</button>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/login.js') }}" defer></script>
</body>

</html>