const cep = document.getElementById('cep');
const endereco = document.getElementById('endereco');
const compl = document.getElementById('compl');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const ddd = document.getElementById('ddd');

function limp_form(){
    //limpa os campos do formulário de cadastro
    cep.value='';
    endereco.value='';
    compl.value='';
    bairro.value='';
    cidade.value='';
    uf.value='';
    ddd.value='';
}

function insere_dados(dados){
    cep.value = dados.cep;
    endereco.value = dados.endereco;
    compl.value = dados.compl;
    bairro.value = dados.bairro;
    cidade.value = dados.cidade;
    uf.value = dados.uf;
    ddd.value = dados.ddd;
}

function busca_cep(){
    var vcep = cep.value.replace(/\D/g,'');
    if(vcep.lenght == 8){
        fetch('https://viacep.com.br/ws/' + vcep + '/json')
        .then(resp => resp.json())
        .then(dados => insere_dados(dados))
    }
}

cep.addEventListener('keyup', function(ev){
    if(ev.keyCode == 13)
        busca_cep();
    
})