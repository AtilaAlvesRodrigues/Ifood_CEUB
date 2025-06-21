# 🚀 UNIXEPA — Guia de Instalação

Este projeto utiliza Laravel 8 com PHP 8.2. Siga as etapas abaixo para configurar o ambiente e rodar a aplicação localmente.

---

## 🧩 Pré-requisitos

- **PHP** (versão 8.2 ou compatível com Laravel 8)  
- **Composer** (gerenciador de dependências PHP): https://getcomposer.org/  
- **Git** (opcional, mas recomendado): https://git-scm.com/  

---

## 1. Abrir o terminal

- **Windows:**  
  - Clique com o botão direito na pasta do projeto e selecione "Git Bash Here" ou "Abrir no Terminal"  
  - Você também pode usar PowerShell ou Prompt de Comando

---

## 2. Instalar o instalador global do Laravel (uma única vez)

```bash
composer global require laravel/installer
````

---

## 3. Criar um novo projeto Laravel

### ✅ Usando o instalador Laravel:

```bash
laravel new nome-do-projeto
```

### ⚠️ Usando o Composer (caso não tenha o instalador):

```bash
composer create-project --prefer-dist laravel/laravel nome-do-projeto "8.*"
```

---

## 4. Acessar o diretório do projeto

```bash
cd nome-do-projeto/
```

---

## 5. Abrir o VS Code na pasta do projeto

```bash
code .
```

---

## ✅ Instalar Node.js + npm

* Baixe a versão **LTS (Recommended for most users)** em: [https://nodejs.org/](https://nodejs.org/)
* Após instalar, **feche e reabra o terminal** e teste com:

```bash
node -v
npm -v
```

---

## ✅ Instalar Laravel UI

No terminal, dentro da pasta do seu projeto:

```bash
composer require laravel/ui
```

---

## ✅ Gerar os arquivos do front-end com autenticação

Escolha uma das opções abaixo:

### 👉 Bootstrap + Auth

```bash
php artisan ui bootstrap --auth
```

### 👉 Vue + Auth

```bash
php artisan ui vue --auth
```

### 👉 React + Auth

```bash
php artisan ui react --auth
```

---

## ✅ Instalar dependências front-end

```bash
npm install
```

---

## ✅ Compilar os assets (CSS/JS)

```bash
npm run dev
```

> 💡 Use `npm run watch` para recompilar automaticamente ao salvar os arquivos.

---

## 🧪 Testando

Acesse o projeto no navegador:

```
http://localhost:8000
```

Verifique se o front-end e a autenticação estão funcionando corretamente.

---

## 📄 Licença

O framework Laravel é open-source e está sob a [licença MIT](https://opensource.org/licenses/MIT).

```

