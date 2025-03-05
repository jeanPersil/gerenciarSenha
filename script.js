let senhaNormal = 0;
let senhaPreferencial = 0;
let filaNormal = [];
let filaPreferencial = [];

document.getElementById("botaoSenhaNormal").onclick = () => {
  senhaNormal++;
  let novaSenha = `N - ${senhaNormal}`;
  filaNormal.push(novaSenha);
  atualizarDisplay();
};

document.getElementById("botaoSenhaPreferencial").onclick = () => {
  senhaPreferencial++;
  let novaSenha = `P - ${senhaPreferencial}`;
  filaPreferencial.push(novaSenha);
  atualizarDisplay();
};

document.getElementById("chamarProximaSenha").onclick = () => {
  if (filaPreferencial.length > 0) {
    filaPreferencial.shift();
    atualizarDisplay();
  } else if (filaNormal.length > 0) {
    filaNormal.shift();
    atualizarDisplay();
  } else {
    alert("Não ha senhas na fila");
    return;
  }
};

function atualizarDisplay() {
  let senha = document.querySelector(".senha");
  if (filaPreferencial.length > 0) {
    senha.style.color = "red";
    senha.textContent = filaPreferencial[0];
  } else if (filaNormal.length > 0) {
    senha.style.color = "blue";
    senha.textContent = filaNormal[0];
  } else {
    document.querySelector(".senha").textContent = "Nenhuma senha na fila";
    senha.style.color = "black";
  }
  atualizarLista();
}

function atualizarLista() {
  let listaSenhas = document.getElementById("listaSenhas");

  listaSenhas.innerHTML = "";

  let todasSenhas = [...filaPreferencial, ...filaNormal];

  todasSenhas.forEach((senha) => {
    let li = document.createElement("li");
    li.textContent = senha;
    if (li.textContent.startsWith("P")) {
      li.style.backgroundColor = "red";
      li.style.color = "white";
    } else {
      li.style.backgroundColor = "blue";
      li.style.color = "white";
    }
    listaSenhas.appendChild(li);
  });
}
