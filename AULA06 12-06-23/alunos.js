function metodo_get(){
	//Método AJAX
     fetch('http://localhost:3000/Produtos')
     .then(resp => resp.json())
     .then(dados => console.log(dados))
}

function metodo_get2(id){
	//Método AJAX
     fetch('http://localhost:3000/Produtos'+id)
     .then(resp => resp.json())
     .then(dados => console.log(dados))
}

function metodo_get();
function metodo_get2(12345);