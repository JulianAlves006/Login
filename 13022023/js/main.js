const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Selecionando os inputs do html
    const inputNome = e.target.querySelector('#nome');
    const inputIdade = e.target.querySelector('#idade');
    const div = document.querySelector('#result');
    
    //Pegando os valores deles
    const nome = String(inputNome.value);
    const idade = Number(inputIdade.value);

    if(idade <= 0){
        const msg = 'Digite uma idade valida!!';
        div.innerHTML = msg;
    }
    else{
        const msg = `Olá ${nome}, Legal!! você tem ${idade} anos!!`;
        div.innerHTML = msg;
    }
});

const limpar = document.querySelector('#limpar');

limpar.addEventListener("click", function(event) {
    event.preventDefault();

    form.reset();
    data = {};
  });