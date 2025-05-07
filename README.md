<<<<<<< HEAD
# Ifood_CEUB
- **Pré-requisitos**
    
    **PHP:** Certifique-se de ter o PHP instalado no seu sistema. Recomenda-se uma versão compatível com o Laravel 8 (PHP 8.2).
    
    **Composer:** O Composer é um gerenciador de dependências para PHP. Você precisa tê-lo instalado. Você pode baixá-lo em [https://getcomposer.org/](https://www.google.com/url?sa=E&source=gmail&q=https://getcomposer.org/).
    
    **Git (opcional, mas altamente recomendado):** O Git é um sistema de controle de versões. É útil para gerenciar as alterações no seu projeto. Você pode baixá-lo em [https://git-scm.com/](https://www.google.com/url?sa=E&source=gmail&q=https://git-scm.com/).
    

---

### **1 - Abrir o terminal:**

- **Windows:** Clique com o botão direito na área de trabalho ou na pasta onde você deseja criar o projeto e selecione "Git Bash Here" (se você tiver o Git instalado) ou "Abrir no Terminal" (em versões mais recentes do Windows). Você também pode usar o PowerShell ou o Prompt de Comando, mas os comandos podem variar ligeiramente.


---

### **2 - Instalar o instalador do Laravel globalmente (se ainda não tiver instalado):**Bash

```php
composer global require laravel/installer
```

> Este passo só precisa ser feito uma vez no seu sistema. Ele instala o executável `laravel` globalmente, permitindo que você crie novos projetos com um comando mais simples.
> 

---

### **3 - Criar o novo projeto Laravel:**

**a) Usando o instalador do Laravel (recomendado):**

Após instalar o instalador globalmente, você pode criar um novo projeto com o seguinte comando:

```php
laravel new nome-do-projeto
```

> Substitua `nome-do-projeto` pelo nome que você deseja dar ao seu projeto (ex: `meu-novo-site`, `blog`, etc.).
> 

---

**b) Usando o Composer diretamente(se a versão do Laravel for muito velha):**

Se você não instalou o instalador do Laravel globalmente, pode usar o Composer diretamente:

```php
composer create-project --prefer-dist laravel/laravel nome-do-projeto "8.*"
```

> O comando `composer create-project --prefer-dist laravel/laravel Laravel "8.*"` é usado para criar um novo projeto Laravel usando o Composer
> 
- Mais informações
    - `composer create-project`: Comando do Composer para criar um novo projeto.
    - `-prefer-dist`: Prioriza o download de distribuições compactadas (mais rápido).
    - `laravel/laravel`: O pacote do Laravel.
    - `nome-do-projeto`: O nome da pasta do seu projeto.
    - `"8.*"`: Especifica a versão 8 do Laravel (qualquer versão 8.x.x). Se você quiser a versão mais recente do Laravel, pode omitir a restrição de versão ou usar `"^9.0"` (ou a versão mais recente).

---

### **4 - Acessar o diretório do projeto**

Após a criação do projeto, navegue até o diretório do projeto usando o comando `cd`:

```php
cd nome-do-projeto/
```

> O comando `cd nome-do-projeto/` é um comando do sistema operacional (usado em sistemas Unix/Linux/macOS e também disponível no prompt de comando do Windows) que significa "change directory" (mudar de diretório). Ele é usado para navegar entre os diretórios no seu sistema de arquivos.
> 
- Mais informações
    - **`cd`**: Este é o comando em si, que significa "change directory" (mudar de diretório).
    - `nome-do-projeto**/**`: Este é o argumento passado para o comando `cd`. Ele especifica o caminho para o diretório para o qual você deseja navegar. O nome `nome-do-projeto` corresponde ao nome que você especificou durante a criação do projeto com o Composer. A barra `/` no final indica que `nome-do-projeto` é um diretório.
    
    ---
    
    **O que acontece quando você executa `cd Laravel/`:**
    
    1. O sistema operacional procura por um diretório chamado `nome-do-projeto` no diretório atual (o diretório em que você está no terminal/prompt de comando).
    2. Se o diretório `nome-do-projeto` for encontrado, o sistema operacional muda o diretório de trabalho atual para `nome-do-projeto`. Isso significa que todos os comandos subsequentes que você executar serão executados dentro do diretório `nome-do-projeto`.
    3. Se o diretório `nome-do-projeto` não for encontrado no diretório atual, o sistema operacional exibirá uma mensagem de erro, como "No such file or directory" (Arquivo ou diretório inexistente).

---

### 5 - Abrindo o Vscode por terminal

Quando estiver no diretório do projeto laravel, use o camando:

```bash
code .
```

> O comando `code .` é usado para abrir o Visual Studio Code (VS Code) a partir da linha de comando (terminal, prompt de comando ou PowerShell). O ponto (`.`) como argumento significa "o diretório atual". Portanto, `code .` abre o VS Code com o diretório atual como o diretório raiz do espaço de trabalho.
>


### ✅ 1. Instalar o Node.js + npm

Node.js já vem com o **npm**, que é o gerenciador de pacotes JavaScript.

🔗 Baixe aqui a versão recomendada (LTS):

👉 https://nodejs.org/

- Escolha a opção **“LTS (Recommended for most users)”**
- Faça a instalação normal (seguindo o instalador)

🛠️ Após instalar, **feche e reabra o terminal**, então teste com:

```bash
node -v
npm -v
```

Se aparecer as versões, está tudo certo!

---

### ✅ 2. Acesse seu projeto Laravel

No terminal, vá até a pasta do seu projeto Laravel:

```bash
cd caminho/do/seu/projeto
```

---

### ✅ 3. Instalar o Laravel UI via Composer

Se ainda não instalou o pacote do Laravel UI:

```bash
composer require laravel/ui
```

---

### ✅ 4. Gerar os arquivos do front-end

Escolha uma das opções abaixo conforme o que você quer usar:

### 👉 Bootstrap (com autenticação):

```bash
php artisan ui bootstrap --auth
```

### 👉 Vue:

```bash
php artisan ui vue --auth
```

### 👉 React:

```bash
php artisan ui react --auth
```

---

### ✅ 5. Instalar as dependências com npm

```bash
npm install
```

---

### ✅ 6. Compilar os assets (CSS/JS)

```bash
npm run dev
```

> 💡 Use npm run watch se quiser que ele fique recompilando automaticamente ao salvar os arquivos.
> 

---

### 🧪 Testando

Acesse o projeto no navegador (geralmente `http://localhost:8000`) e veja se o login, o front-end e os estilos estão funcionando.
=======
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
>>>>>>> master
