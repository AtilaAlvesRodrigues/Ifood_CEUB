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
