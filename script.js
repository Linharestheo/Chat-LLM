const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('input-usuario');
const chat = document.getElementById('conversa');
const campoApiKey = document.getElementById('api-key');

let chave = "";

const historico = [];

const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-20b";

btnKey.addEventListener("click", function(){
    chat.innerHTML = '';
    const chaveApi = campoApiKey.value.trim();
    if(chaveApi === ""){
        AddMensagem("Adicione uma chave de API valida!", "assistente");
        return;
    }
    chave = chaveApi;
    campoApiKey.value = "";
    AddMensagem("Chave adicionada com sucesso!", "aprova-api");
})

btnNovoChat.addEventListener("click", function(){
    historico.length = 0;
    chat.innerHTML = '';
    const novaMensagem = document.createElement(`div`);
    novaMensagem.textContent = "Olá, Como posso ajudar?";
    novaMensagem.classList.add("msg-bemvindo");
    chat.appendChild(novaMensagem);
})

function AddMensagem(texto, classe) {
    const novaMensagem = document.createElement(`div`);
    novaMensagem.textContent = texto;
    novaMensagem.classList.add(classe);
    chat.appendChild(novaMensagem);
    chat.scrollTop = chat.scrollHeight;
    return novaMensagem;
}

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    chat.innerHTML = '';

    if (mensagem.value.trim() === "") {
        return;
    }

    // adicionando no historico
    const texto = mensagem.value.trim();
    historico.push({ role: "user", content: texto });

    AddMensagem(mensagem.value.trim(), "usuario");
    mensagem.value = "";

    if(chave === ""){
        AddMensagem("ERRO: Adicione uma chave API!", "erro-api");
        return;
    }

    const digitando = AddMensagem("Digitando...", "assistente");
    const resposta = await(enviarMensagem());
    digitando.remove();

    if(resposta === null){
        AddMensagem("Não foi possível obter uma resposta. Verifique a chave Api!", "assistente");
        historico.pop();
        return;
    }

    historico.push({ role: "assistant", content: resposta });
    AddMensagem(resposta, "assistente");
});


async function enviarMensagem() { 
    try {
        const resposta = await fetch(API_URL, { method: "POST", headers:
            {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${chave}`
            },

            body: JSON.stringify({ model: MODEL, messages: historico })
        });

        if (!resposta.ok) {
            console.log(resposta.status, await resposta.text());
            throw new Error("Erro na comunicação com a API");
        }

        const dados = await resposta.json();
        return dados.choices[0].message.content;

    } catch (erro) {
        console.error("Erro:", erro);
        return null;
    }
}




