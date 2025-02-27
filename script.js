let senhaNormal = 0;
let filasSenhas = [];

document.getElementById("botaoSenhaNormal").onclick = () => {
  senhaNormal++;
  novaSenha = `N - ${senhaNormal}`;
  filasSenhas.push(novaSenha);
  document.querySelector(".senha").textContent = novaSenha;
  console.log(filasSenhas.length);
};
