<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\CustomAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Rota para exibir a página de login/registro customizada
Route::get('/entrar', [CustomAuthController::class, 'showAuthForm'])->name('login');

// Rotas para processar login e registro via AJAX
Route::post('/entrar/login', [CustomAuthController::class, 'login'])->name('custom.login');
Route::post('/entrar/register', [CustomAuthController::class, 'register'])->name('custom.register');

// Rota de logout
Route::post('/logout', [CustomAuthController::class, 'logout'])->name('logout');

// Redirecionamento das rotas padrão para sua página customizada
Route::get('/login', function () {
    return redirect()->route('login');
});

Route::get('/register', function () {
    return redirect()->route('login');
});

// Suas outras rotas protegidas
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
    
    // Adicione suas outras rotas aqui
});

// Rota home/raiz
Route::get('/', function () {
    return view('welcome');
});