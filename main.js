const form = document.getElementById('form-contatos')
const imgSalvo = '<img src="/images/Certo.png" alt="Salvo" />'
const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
});

function adicionaLinha() {
    const inputNameContato = document.getElementById('name-contato')
    const inputNumberContato = document.getElementById('number-contato')

    if (nomes.includes(inputNameContato.value)) {
        alert(`O Nome: ${inputNameContato.value} já foi adicionado`)
    }
    else {
        let linha = '<tr>'
        linha += `<td>${inputNameContato.value}</td>`
        linha += `<td>${inputNumberContato.value}</td>;`
        linha += `<td>${inputNumberContato.value = imgSalvo}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    inputNameContato.value = ''
    inputNumberContato.value= ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}