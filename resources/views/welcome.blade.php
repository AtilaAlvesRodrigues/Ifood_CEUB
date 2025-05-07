@extends('layouts.app')

@section('content')

<header>
    <div class="container">
        <div class="logo">UniXepa</div>
        <div class="search-container">
            <input type="text" id="search-input" placeholder="Buscar restaurantes ou itens...">
            <button id="search-button">Buscar</button>
        </div>
        <nav class="user-nav">
            <a href="#" id="login-btn">Entrar</a>
            <a href="#" class="button" id="register-btn">Cadastrar</a>
        </nav>
    </div>
</header>

<section class="categories">
    <div class="container">
        <h2>Categorias</h2>
        <div class="category-list" id="category-list">
            <button class="category-item active" data-category="all">Todos</button>
            <button class="category-item" data-category="Pizza">Pizza</button>
            <button class="category-item" data-category="Hambúrguer">Hambúrguer</button>
            <button class="category-item" data-category="Japonesa">Japonesa</button>
            <button class="category-item" data-category="Brasileira">Brasileira</button>
            <button class="category-item" data-category="Sobremesas">Sobremesas</button>
            <button class="category-item" data-category="Bebidas">Bebidas</button>
            <button class="category-item" data-category="Mercado">Mercado</button>
            <button class="category-item" data-category="Variada">Variada</button>
            <button class="category-item" data-category="Lanches">Lanches</button>
            <button class="category-item" data-category="Italiana">Italiana</button>
        </div>
    </div>
</section>

<main class="restaurants">
    <div class="container">
        <h2>Restaurantes Populares</h2>
        <div class="restaurant-grid" id="popular-restaurants-grid">
            <!-- Restaurant cards will be dynamically inserted here -->
        </div>
    </div>
</main>

<section class="special-offers">
    <div class="container">
        <h2>Ofertas Especiais</h2>
        <div class="restaurant-grid" id="special-offers-grid">
            <!-- Offer cards will be dynamically inserted here -->
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; 2024 UniXepa. Todos os direitos reservados.</p>
    </div>
</footer>

<!-- Template for Restaurant Card -->
<template id="restaurant-card-template">
    <div class="restaurant-card" data-id="">
        <div class="card-image placeholder">
            <!-- Future: <img src="" alt=""> -->
            Imagem
        </div>
        <h3 class="card-name">Nome do Restaurante</h3>
        <p class="card-info"><span class="card-type">Tipo</span> - <span class="card-price">$$</span></p>
        <p class="card-rating">⭐ <span class="rating-value">0.0</span> (<span class="review-count">0</span>+)</p>
        <p class="card-time">00-00 min</p>
        <div class="offer-tags">
            <!-- Offer tags will be added dynamically here -->
        </div>
    </div>
</template>

<!-- Login Modal -->
<div id="login-modal" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="login-modal">&times;</span>
        <h2>Entrar</h2>
        <form id="login-form">
            <label for="login-email">Email:</label>
            <input type="email" id="login-email" name="email" required>
            <label for="login-password">Senha:</label>
            <input type="password" id="login-password" name="password" required>
            <button type="submit">Entrar</button>
        </form>
    </div>
</div>

<!-- Register Modal -->
<div id="register-modal" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="register-modal">&times;</span>
        <h2>Cadastrar</h2>
        <form id="register-form">
            <label for="register-name">Nome:</label>
            <input type="text" id="register-name" name="name" required>
            <label for="register-email">Email:</label>
            <input type="email" id="register-email" name="email" required>
            <label for="register-password">Senha:</label>
            <input type="password" id="register-password" name="password" required>
            <label for="register-confirm-password">Confirmar Senha:</label>
            <input type="password" id="register-confirm-password" name="confirm_password" required>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</div>


@endsection