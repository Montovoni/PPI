var entrada = document.querySelector('#entrada');
var botao = document.querySelector('#botao');
var lista = document.getElementsByTagName('ul')[0];
var tarefas = [];

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
    console.log(tarefas);
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
    localStorage.setItem('tarefas2',JSON.stringify(tarefas))
}