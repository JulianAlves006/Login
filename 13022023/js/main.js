const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Selecionando os inputs do html
    const inputLogin = e.target.querySelector('#inputLogin');
    const inputPassword = e.target.querySelector('#inputPassword');
    const div = document.querySelector('#result');
    
    //Pegando os valores deles
    const email = String(inputLogin.value);
    const senha = Number(inputPassword.value);

    const msg = `Olá seja bem vindo de volta!! <p class="mt-5 mb-3 text-muted">${email}</p>`;
    console.log(`Sua senha é ${senha} hihihi`);
    div.innerHTML = msg;

});

const limpar = document.querySelector('#limpar');

limpar.addEventListener("click", function(event) {
    event.preventDefault();

    form.reset();
    data = {};
  });