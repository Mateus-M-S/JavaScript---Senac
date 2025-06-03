console.log('Eventos')
// Selecionar os Elementos
const nomeInput = document.getElementById("nome")
const telefoneInput = document.getElementById("telefone")
const adicionatButton = document.getElementById("adicionar")
const tabelaBody = document.getElementById("tabela-contatos")

// Variaveis da Tabela
const linhas = []


function mostrarMensagem(mensagem) {
    console.log(mensagem);
}

nomeInput.addEventListener("input", () => {
    mostrarMensagem(nomeInput.value)
})
nomeInput.addEventListener("focus", () => {
    mostrarMensagem("Ciquei no campo")
})
nomeInput.addEventListener("blur", () => {
    mostrarMensagem("Sai do campo")
})
nomeInput.addEventListener("change", () => {
    mostrarMensagem("Quando eu mudo o valor do campo")
})
nomeInput.addEventListener("keyup", (e) => {
    mostrarMensagem(`Apertei a tecla: ${e.key}`)
});
// Eventos de Mouse
nomeInput.addEventListener("mouseenter", () => {
    mostrarMensagem('O mouse está dentro do campo')
});
nomeInput.addEventListener("mouseleave", () => {
    mostrarMensagem('O mouse está fora do campo')
});
nomeInput.addEventListener("mousedown", () => {
    mostrarMensagem('Cliquei com o mouse')
});
nomeInput.addEventListener("mouseup", () => {
    mostrarMensagem('Soltei o botão do mouse')
});
nomeInput.addEventListener("click", () => {
    mostrarMensagem('Clicou no campo')
});

// Botão Adicionar
adicionatButton.addEventListener("click", () => {
    mostrarMensagem("Cliquei");
    const nome = nomeInput.value.trim()
    const telefone = telefoneInput.value.trim()

    if (!nome | !telefone) {
        alert("Preencha os campos!")
        return
    }
    console.log(`Dados:\nNome: ${nome} \nTelefone:: ${telefone}`)

    // "nome" : "Mateus"
    linhas.push({ nome, telefone })
    console.log(linhas)
    // Limpar formulário
    nomeInput.value = ""
    telefoneInput.value = ""
    nomeInput.focus()
})
