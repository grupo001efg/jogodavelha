
let selecionar
 let jogador = "X";

let posicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

//init igual inicializar
function init(){
function init() {
    selecionar = [];

    jogadorVez.innerHTML = `Jogador da Vez: ${jogador}`;
    document.querySelectorAll(".jogo button").forEach((item)=> {
        item.innerHTML = "";
        item.addEventListener("click", novoMovimento);
    });
    jogadorVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

  document.querySelectorAll(".jogo button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", novoMovimento);
  });
}

//carregamento da função Init, deixando pronta para usar
init();

function novoMovimento(e){
    const index = e.target.getAttibute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", novoMovimento);
    selecionar[index] = jogador;
function novoMovimento(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", novoMovimento);
  selecionar[index] = jogador;

    setTimeout(() => {
        validar();
    }, [100]);
  setTimeout(() => {
    check();
  }, [100]);

    jogador = jogador === "X" ? "O" : "X";
    jogadorVez.innerHTML = `Jogador da Vez: ${jogador}`;
  jogador = jogador === "X" ? "O" : "X";
  jogadorVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function validar(){
    let ultimaJogada = jogador === "X" ? "O" : "X";
function check() {
  let ultimaJogada = jogador === "X" ? "O" : "X";

    const itens = selecionar.map((item, i) => [item, i])
  const items = selecionar
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimaJogada)
    .map((item) => item[1]);

    for (pos of posicoes) {
        if (pos.every((item) => items.includes(item))) {
          alert("O JOGADOR '" + ultimaJogada + "' GANHOU!");
          init();
          return;
        }
  for (pos of posicoes) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + ultimaJogada + "' GANHOU!");
      init();
      return;
    }
  }

    if (selected.filter((item) => item).length === 9) {
        alert("DEU VELHA!");
        init();
        return;
      }
  if (selecionar.filter((item) => item).length === 9) {
    alert("DEU VELHA!");
    init();
    return;
  }
}
