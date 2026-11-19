<div align="center">

# 💬 Chat com LLM

**Converse com um modelo de linguagem direto no navegador, usando a sua própria chave de API da Groq.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Groq](https://img.shields.io/badge/API-Groq-F55036?style=for-the-badge)

[Sobre](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Como executar](#-como-executar) •
[Estrutura](#-estrutura-de-arquivos)

</div>

---

## 📖 Sobre o projeto

O **Chat com LLM** é uma aplicação web simples e leve que permite ao usuário conversar com uma inteligência artificial. Tudo roda no navegador, sem backend: o usuário informa a própria chave de API, envia mensagens e recebe as respostas do modelo, com o histórico da conversa mantido a cada requisição.

<!-- Para adicionar uma captura de tela, salve a imagem em docs/screenshot.png e descomente a linha abaixo:
<p align="center"><img src="docs/screenshot.png" alt="Tela do Chat com LLM" width="700"></p>
-->

> 🔗 **Demonstração:** [linharestheo.github.io/Chat-LLM](https://linharestheo.github.io/Chat-LLM/)

---

## ✨ Funcionalidades

- 🔑 **Chave de API na interface:** o usuário informa a própria chave para liberar o chat
- 💬 **Conversa em tempo real:** envio de mensagens (botão ou `Enter`) e resposta da IA
- 🧠 **Memória da conversa:** o histórico completo é enviado à API a cada requisição
- ⏳ **Indicador de carregamento:** mostra "Digitando..." enquanto a resposta não chega
- 🚨 **Tratamento de erros:** falhas da API aparecem na tela sem quebrar a conversa
- 🔄 **Nova conversa:** um clique limpa o histórico e a tela

---

## 🔌 API utilizada

| Item | Detalhe |
| :--- | :--- |
| **API** | Groq |
| **Modelo** | `openai/gpt-oss-20b` |
| **Autenticação** | Chave de API (API Key) informada pelo usuário na própria interface |
| **Documentação** | [console.groq.com/docs](https://console.groq.com/docs) |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
| :--- | :--- |
| **HTML5** | Estrutura da página |
| **CSS3** | Estilos com Bootstrap 5.3.8 + `style.css` |
| **JavaScript puro** | `fetch` e `async/await`, sem backend e sem frameworks |

---

## 🚀 Como executar

**1. Clone o repositório**

```bash
git clone https://github.com/Linharestheo/<nome-do-repositorio>.git
cd <nome-do-repositorio>
```

**2. Gere uma chave de API**

Crie uma conta e gere sua chave em [console.groq.com](https://console.groq.com).

**3. Abra o projeto**

Abra o arquivo `index.html` no navegador ou, se preferir, use a extensão **Live Server** do VS Code.

**4. Adicione a chave**

Cole a chave no campo **API Key** da barra lateral e clique em **Adicionar**.

**5. Converse!**

Digite a mensagem e envie pelo botão ou pela tecla `Enter`.

---

## 📁 Estrutura de arquivos

```text
📦 projeto
 ┣ 📄 index.html   # Estrutura da página
 ┣ 🎨 style.css    # Estilos próprios
 ┣ ⚙️ script.js    # Lógica do chat e chamadas à API
 ┗ 📝 README.md    # Documentação
```

---

## 🔒 Observações

> [!NOTE]
> A chave de API **não fica salva** no código nem no repositório. Ela é digitada a cada uso e só existe na memória da página.

---

## 👥 Integrantes

- **Theo Linhares Mariano** — [@Linharestheo](https://github.com/Linharestheo)
