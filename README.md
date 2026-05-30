# Perfil Dev Jr

## Descrição

Aplicativo mobile desenvolvido em React Native com Expo como parte de um teste técnico para uma vaga fictícia de Desenvolvedor Mobile Júnior. O objetivo do projeto é apresentar um perfil profissional por meio de uma interface simples, organizada e intuitiva, utilizando navegação por abas inferiores.

O aplicativo permite visualizar informações pessoais, habilidades técnicas e projetos desenvolvidos, simulando um portfólio mobile.

---

## Tecnologias Utilizadas

* React Native
* Expo
* JavaScript
* React Navigation
* Expo Vector Icons
* Git
* GitHub

---

## Funcionalidades Implementadas

* Navegação entre telas utilizando Bottom Tabs
* Exibição de perfil profissional
* Exibição de foto de perfil
* Apresentação de habilidades técnicas
* Exibição de projetos desenvolvidos
* Interface estilizada utilizando StyleSheet
* Organização do código em componentes e telas separadas

---

## Telas do Aplicativo

### Perfil

A tela de perfil apresenta informações básicas sobre a desenvolvedora, incluindo:

* Nome
* Foto de perfil
* Cargo pretendido
* Breve descrição profissional

O objetivo desta tela é fornecer uma apresentação inicial do perfil profissional.

### Habilidades

A tela de habilidades exibe uma lista de conhecimentos técnicos relacionados à área de desenvolvimento de software.

Habilidades apresentadas:

* React Native
* JavaScript
* Node.js
* APIs REST
* Git e GitHub

### Projetos

A tela de projetos apresenta alguns exemplos de projetos desenvolvidos durante os estudos.

Cada projeto possui:

* Nome do projeto
* Breve descrição
* Tecnologias utilizadas ou finalidade do sistema

Essa tela funciona como uma pequena vitrine de trabalhos realizados.

---

## Organização do Projeto

Estrutura utilizada:

```text
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
│
├── assets/
│   └── imagem-perfil.png
│
└── README.md
```

### Responsabilidade de cada arquivo

* **App.js:** configuração da navegação por abas inferiores.
* **PerfilScreen.js:** tela de apresentação profissional.
* **HabilidadesScreen.js:** tela de exibição das habilidades técnicas.
* **ProjetosScreen.js:** tela de apresentação dos projetos.
* **assets/**: armazenamento da imagem utilizada no perfil.

---

## Decisões de Desenvolvimento

Durante o desenvolvimento, foi adotada uma estrutura simples e organizada para facilitar a manutenção do código.

As telas foram separadas em arquivos individuais para melhorar a legibilidade e seguir boas práticas de organização.

A estilização foi realizada exclusivamente com StyleSheet, sem utilização de bibliotecas visuais externas, conforme solicitado no desafio.

A navegação foi implementada utilizando React Navigation com Bottom Tabs para proporcionar uma experiência semelhante à de aplicativos reais.

---

## Diferenciais

* Interface limpa e intuitiva
* Organização modular do código
* Navegação por ícones e abas
* Utilização de componentes nativos do React Native
* Estrutura preparada para expansão futura

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto

```bash
cd perfil-dev-jr
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npx expo start
```

Após iniciar o Expo, basta escanear o QR Code com o aplicativo Expo Go ou executar em um emulador.

---

## Autor

Gabriela Emi Yamamoto

Estudante de Desenvolvimento de Sistemas e entusiasta da área de tecnologia, com interesse em desenvolvimento de software, desenvolvimento web e desenvolvimento mobile.
