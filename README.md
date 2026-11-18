## API utilizada

- **API:** Groq 
- **Modelo:** openai/gpt-oss-20b
- **Documentação:** https://console.groq.com/docs
- **Autenticação:** chave de API (API Key) informada pelo usuário na própria interface

## Tecnologias

- HTML5
- CSS3 (Bootstrap 5.3.8 + style.css)
- JavaScript puro (fetch e async/await), sem backend

## Funcionalidades

- Envio da própria chave API para ter acesso ao chat
- Envio de mensagens e resposta da IA
- Histórico da conversa enviado à API a cada requisição
- Indicador de carregamento ("Digitando...")
- Tratamento de erros da API
- Botão de nova conversa

## Como executar

1. Clone ou baixe o repositório:
   git clone [URL do repositório]
2. Gere uma chave de API em https://console.groq.com
3. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).
4. Cole a chave no campo de API Key da barra lateral e clique em adicionar.
5. Digite a mensagem e envie (botão ou Enter).

## Estrutura de arquivos

- index.html
- style.css
- script.js
- README.md

## Observações

- A chave de API não fica salva no código nem no repositório; ela é digitada a cada uso.
