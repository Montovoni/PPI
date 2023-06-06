//Código alterado para inserção do botão de excluir "x" da lista:
var entrada = document.querySelector('#entrada');
var botao = document.querySelector('#botao');
var lista = document.getElementsByTagName('ul')[0];

botao.onclick = function(){
    let msg = entrada.value;
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = msg;

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right';
    deleteButton.textContent = 'x';
    
    deleteButton.onclick = function() {
        listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    lista.appendChild(listItem);
    
    entrada.value = '';
};

entrada.addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode == 13){
      botao.click();
    }    
});


/*CÓDIGO CRIADO EM AULA:
var entrada = document.querySelector('#entrada');
//console.log(entrada);
var botao = document.querySelector('#botao');
var lista = document.getElementsByTagName('ul')[0];

/*botao.onclick = function(){
    var msg = entrada.value;
    console.log(`botao clicado: ${msg}`);


botao.onclick = function(){
    let msg = entrada.value;
    let no = `<li class="list-group-item">${msg}</li>`
    lista.innerHTML += no;
    console.log(`botao clicado: ${msg}`);
}

entrada.addEventListener('keyup', function(event){
    /*let aux = event.target.value;
    console.log(aux);
    console.log('key:'+ event.key );
    console.log('keyCode:' + event.keyCode);
    event.preventDefault();
    if(event.keyCode == 13){
      //console.log(`Tarefa: ${event.target.value}`);  
      botao.click();
    }    
    
});*/