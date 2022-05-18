function verMais(){
    let pontos = document.getElementById('pontos');
    let maisTexto = document.getElementById('mais');
    let btnLeiaMais = document.getElementById('btn-ver-mais');

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Ver mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Ver menos";
    }
}

var btn = document.querySelector(".discurssao-btn-create");

btn.addEventListener("click", function(){

    var discInput = document.querySelector(".main-discurssao-input");
    var discurssao = document.querySelector(".main-discurssao");

    if(discInput.style.display === "none");
    discInput.style.display = "flex";
    discurssao.style.display = "none";
    
});

var btnEnviar = document.querySelector(".btn-submit");

btnEnviar.addEventListener("click", function(){

    var discSubmit = document.querySelector(".discurssao-check");
    var discInput = document.querySelector(".main-discurssao-input");
    var valorTopicInput = document.querySelector(".input-topic").value;
    var valorContentInput = document.querySelector(".input-content").value;
    var main = document.querySelector(".card-perguntas-respostas")
    if((valorContentInput, valorTopicInput !=="") && (valorContentInput, valorTopicInput !== null) && (valorContentInput, valorTopicInput !== undefined)){
        
        var novoItem = `<div class="topicos-perguntas-respostas">
        <h5 class="card-title">${valorTopicInput}</h5>
        <p class="card-user">Nome usuario</p>
        <p class="card-pergunta">${valorContentInput}</p>
        <div class="card-icons">
            <button class="card-btn-mais"><i class="fa-solid fa-colon"></i></button>
            <button class="card-btn-fav"><i class="fa-solid fa-heart"></i></button>
            <button class="card-btn-like">4 likes</button>
            <button class="card-btn-respostas">2 respostas</button>
        </div>
      </div>`;

      main.innerHTML += novoItem;

       (discInput.style.display === "flex");
        discSubmit.style.display = "flex";
        discInput.style.display = "none";

    }else{
    alert("preencha todos os campos");
         }
    
});

var btnNewDisc = document.querySelector(".btn-create-again");

btnNewDisc.addEventListener("click", function(){

    var discSubmit = document.querySelector(".discurssao-check");
    var discInput = document.querySelector(".main-discurssao-input");

    if(discSubmit.style.display === "flex");
    discInput.style.display = "flex";
    discSubmit.style.display = "none";

});


