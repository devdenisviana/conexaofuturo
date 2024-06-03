function adicionarTarefa() {
    const novaTarefa = document.getElementById("novaTarefa").value;
    if (novaTarefa) {
        const novoItem = document.createElement("li");
        novoItem.textContent = novaTarefa;
        document.getElementById("listaTarefas").appendChild(novoItem);
        document.getElementById("novaTarefa").value = "";
    }
}