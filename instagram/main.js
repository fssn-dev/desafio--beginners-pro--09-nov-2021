const URL_FOTO = document.getElementById('url');
const NOME_USUARIO = document.getElementById('usuario');
const LEGENDA_FOTO = document.getElementById('legenda');
const FEED = document.getElementById("feed")
const publicacoes = [];

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const dadosForm = new Publicacao(url.value, usuario.value, legenda.value);

    salvaPublicacaoNoArray(dadosForm);
    postaPublicacao()
});

function Publicacao(url, usuario, legenda) {
    this.urlFoto = url;
    this.usuario = usuario;
    this.legenda = legenda
};

function template(publicacao) {
    return `
        <div>
            <h2>${publicacao.usuario}</h2>
            <img src="${publicacao.urlFoto}">
            <p>${publicacao.legenda}</p>
        </div>
    `;
};

function salvaPublicacaoNoArray(publicacao) {
    publicacoes.unshift(publicacao)
};

function postaPublicacao() {
    FEED.innerHTML = ''
    publicacoes.forEach(publicacao => {
        FEED.innerHTML += template(publicacao)
    });
}