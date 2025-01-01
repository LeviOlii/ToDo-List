const taskInput = document.getElementById("tarefa");
const taskLista = document.getElementById("lista");

function adicionaTarefa() {
    let entrada = taskInput.value;
    if(entrada === ""){
        alert("Por favor, insira uma tarefa válida!");
    }

    else{
        //Criando a tarefa a ser adicionada
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = entrada;
        novaTarefa.className = "list-group-item border rounded mb-2 bg-light-subtle d-flex flex-row justify-content-between"

        //Adicionando o botão do ícone da caixinha de lixo ao lado das tarefas
        let trashButton = document.createElement("button");
        trashButton.className = "btn btn-outline-danger btn-sm trash-button";
        novaTarefa.appendChild(trashButton);

        //Adicionando o ícone propriamente dentro do botão
        trashIcon = document.createElement("i");
        trashIcon.className = "bi bi-trash";
        trashButton.appendChild(trashIcon);

        //Adicionando tarefa
        taskLista.appendChild(novaTarefa);


        //Limpando a barra de digitação, após adição de tarefa
        taskInput.value = "";

    }
}

//Remove a tarefa
taskLista.addEventListener("click", function(event) {
    if(event.target.classList.contains("trash-button") || event.target.classList.contains("bi-trash")) {
        event.target.closest("li").remove();
    }
})