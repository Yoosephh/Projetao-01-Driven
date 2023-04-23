axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';
let dadosRecebidos;
let promessaObterQuizes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
promessaObterQuizes.then(respostaPromessaObterQuizes)
let quantosAcertos;

function gerarQuizesRecebidos(){
    const containerQuizes = document.querySelector('.containerQuizes');
    containerQuizes.innerHTML = '';
    for( let i = 0; i < dadosRecebidos.length; i++ ){
        containerQuizes.innerHTML +=    `<div class="quiz" onclick="esconderMostrar(this)">
                                            <spam class="dadoOculto">${i}</spam>
                                            <img src= "${dadosRecebidos[i].image}" alt="">
                                            <span>
                                                <h3>${dadosRecebidos[i].title}</h3>
                                            </span>
                                        </div>`;
    }
}


function respostaPromessaObterQuizes(res){
    dadosRecebidos = res.data;
    console.log(dadosRecebidos);
    console.log('O que foi mandado acima são os dados recebidos');
    gerarQuizesRecebidos();
}



function esconderMostrar(tagClicada){
    const container2 = document.querySelector('.container2');
    container2.classList.toggle('hidden');
    const container = document.querySelector('.container');
    container.classList.toggle('hidden');
    distribuirOsDadosClicado(tagClicada);

}



function distribuirOsDadosClicado(tagClicada){
    const numeroDoQuizTag = tagClicada.querySelector('.dadoOculto');
    let numeroDoQuiz = numeroDoQuizTag.innerHTML;
    numeroDoQuiz = Number(numeroDoQuiz);
    quizClicado = dadosRecebidos[numeroDoQuiz];
    console.log('O PROXIMO DADO É O QUIZ CLICADO');
    console.log(quizClicado);
    const varQuizrenderizado = document.querySelector('.container2');
    varQuizrenderizado.innerHTML = 
        `
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="banner"><h4>${quizClicado.title}</h4></div>
            <div class="feedPerguntas">
            </div>
        `;

        let feedPerguntas = document.querySelector('.feedPerguntas');
        feedPerguntas.innerHTML = "";
        //console.log(quizClicado.questions.length);
        for(let i = 0 ; i < quizClicado.questions.length; i ++){
            feedPerguntas.innerHTML += 
                    `<div class="pergunta">
                        <div class="titlePergunta">${quizClicado.questions[i].title}</div>
                        <div class="respostasPergunta"></div>
                    </div>`;
        }

        let htmlRespostas = document.querySelectorAll('.respostasPergunta');
        for(let i = 0 ; i < htmlRespostas.length ; i++){
            for(let j = 0 ; j < quizClicado.questions[i].answers.length ; j++){
                let abrev = quizClicado.questions[i].answers[j]
                htmlRespostas[i].innerHTML += 
                `<div class="resposta" onclick="revelaResposta(this)" data-answer="${abrev.isCorrectAnswer}">
                    <div class='limitadorAltura'><img src="${abrev.image}" /></div>
                    <h5>${abrev.text}</h5>
                </div>`;
            }
        }
        varQuizrenderizado.innerHTML += `<button class="mainMenuBtn" onclick='retornaMenu()'> Voltar ao menu </button>`}

        function revelaResposta(par) {
            let qualResp = par.dataset.answer;

            let resps = par.parentElement.querySelectorAll('.resposta');

            for(let i = 0; i < resps.length; i++) {
                if(resps[i].dataset.answer === "false") {
                    resps[i].querySelector('h5').classList.add('respErrada')
                } else if (resps[i].dataset.answer === "true") {
                    resps[i].querySelector('h5').classList.add('respCerta')
                }
                if(resps[i] !== par) resps[i].style.opacity="0.3"
            }
          }