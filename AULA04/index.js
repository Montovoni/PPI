//Código corrigido e comentado
// index.js

// Seleciona o elemento de entrada de texto
var entrada = document.querySelector('#entrada');

// Seleciona o botão de inserir item
var botao = document.querySelector('#botao');

// Seleciona a lista de tarefas
var lista = document.getElementById('lista');

// Array que armazenará as tarefas
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Define a função a ser executada quando o botão for clicado
botao.onclick = function() {
    // Obtém o valor digitado pelo usuário
    let msg = entrada.value.trim();
    
    // Verifica se a mensagem não está vazia
    if (msg !== '') {
        // Cria um elemento de lista e define seu conteúdo
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = msg;

        // Cria um botão de exclusão e define seu conteúdo
        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-right btn-sm';
        deleteButton.textContent = 'Remover item';

        // Define a função a ser executada quando o botão de exclusão for clicado
        deleteButton.onclick = function() {
            // Remove o item da lista
            listItem.remove();
            // Remove a tarefa do array de tarefas
            tarefas = tarefas.filter(item => item !== msg);
            // Salva as tarefas atualizadas no armazenamento local
            salvarTarefas();
        };

        // Adiciona o botão de exclusão ao elemento de lista
        listItem.appendChild(deleteButton);

        // Adiciona o elemento de lista à lista de tarefas
        lista.appendChild(listItem);

        // Limpa o valor do campo de entrada
        entrada.value = '';

        // Adiciona a tarefa ao array de tarefas
        tarefas.push(msg);

        // Salva as tarefas no armazenamento local
        salvarTarefas();
    } else {
        // Exibe um alerta se a tarefa estiver vazia
        alert('A tarefa não pode estar vazia. Digite algo!');
    }
};

// Define o evento para a tecla Enter no campo de entrada
entrada.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        botao.click();
    }
});

// Função de exemplo para exibir um alerta
function funcao1() {
    alert("Um alerta:\nSe está vendo essa mensagem, você me deve R$10!");
}

// Função para salvar as tarefas no armazenamento local
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para renderizar as tarefas salvas na página
function render() {
    for (item of tarefas) {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = item;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-right btn-sm';
        deleteButton.textContent = 'Remover item';

        deleteButton.onclick = function() {
            listItem.remove();
            tarefas = tarefas.filter(i => i !== item);
            salvarTarefas();
        };

        listItem.appendChild(deleteButton);
        lista.appendChild(listItem);
    }
}

// Renderiza as tarefas salvas na inicialização da página
render();



/*código em sala
var entrada = document.querySelector('#entrada');
var botao = document.querySelector('#botao');
var lista = document.getElementsByTagName('ul')[0];
var tarefas = [];
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

botao.onclick = function(){
    let msg = entrada.value.trim(); 
    if (msg !== '') { 
        
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = msg;     

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-right btn-sm';
        deleteButton.textContent = 'Remover item';

            deleteButton.onclick = function() {
            listItem.remove();           
        };
        
        
       /* botao.onclick = function(){
            let msg = entrada.value;
            contador +=1;
            if(msg.length > 0){
                let no = `<li id= "tar${contador}" class="list-group-item">${msg}
                <button onclick="removeTarefa(tar${contador})" type= "button"
                class="close" data-dismiss= "alert" arial-label="Close">
                <span> aria-hidden="true">&times </span> </button> </li>`
            }
        }*/

        listItem.appendChild(deleteButton);
        lista.appendChild(listItem);

        entrada.value = '';
        
        
    } else {
        alert('A tarefa não pode estar vazia. Digite algo!');
       
    } 
    
    tarefas.push(msg);
    salvarTarefas();
};

entrada.addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        botao.click();
    }    
    
});

function funcao1() {
    alert("Um alerta: \n Se está vendo essa mensagem, você me deve R$10 !");
}

function salvarTarefas(){
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
    
}

function removeTarefas(obj){
    lista.removeChild(obj.parentNode);

}

function render(){
    
    for(item of tarefas){
        console.log("item: " + item);
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = item;     

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-right btn-sm';
        deleteButton.textContent = 'Remover item';

            deleteButton.onclick = function() {
            listItem.remove();           
        };
          

        listItem.appendChild(deleteButton);
        lista.appendChild(listItem);
     
    }
}
render();*/
