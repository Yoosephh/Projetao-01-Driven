axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';
let dadosRecebidos;

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

let promessaObterQuizes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
promessaObterQuizes.then(respostaPromessaObterQuizes)

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
    console.log(typeof(numeroDoQuiz));
    console.log(numeroDoQuiz);
    const varQuizrenderizado = document.querySelector('.container2');
    varQuizrenderizado.innerHTML = 
        `
            <div class="header">
            <h1>BuzzQuizz</h1>
            </div>
            <div class="banner"><h4>${dadosRecebidos[numeroDoQuiz].title}</h4></div>
            <div class="feedPerguntas">
            <div class="pergunta">
                <div class="titlePergunta">${dadosRecebidos[numeroDoQuiz].questions[0].title}</div>
                <div class="respostasPergunta">
                    <div class="resposta"><img src="${dadosRecebidos[numeroDoQuiz].questions[0].answers[0].image}"/></div>
                    <div class="resposta">${dadosRecebidos[numeroDoQuiz].questions[0].answers[1].image}</div>
                    <div class="resposta">${dadosRecebidos[numeroDoQuiz].questions[0].answers[2].image}</div>
                    <div class="resposta">${dadosRecebidos[numeroDoQuiz].questions[0].answers[3].image}</div>
                </div>
            </div>
            <div class="pergunta">
                <div class="titlePergunta"></div>
                <div class="respostasPergunta">
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                </div>
            </div>
            <div class="pergunta">
                <div class="titlePergunta"></div>
                <div class="respostasPergunta">
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                    <div class="resposta"></div>
                </div>
            </div>

            </div>

        `;
}