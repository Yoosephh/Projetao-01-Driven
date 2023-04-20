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
                `
                    <div class="pergunta">
                        <div class="titlePergunta">${quizClicado.questions[i].title}</div>
                        <div class="respostasPergunta"></div>
                    </div>
                `;
        }

        let htmlRespostas = document.querySelectorAll('.respostasPergunta');
        console.log(quizClicado.questions[0].answers.length);
        for(let i = 0 ; i < htmlRespostas.length ; i++){
            for(let j = 0 ; j < quizClicado.questions[i].answers.length ; j++){
                htmlRespostas[i].innerHTML += `<div class="resposta">
                                                    <div class='limitadorAltura'><img src="${quizClicado.questions[i].answers[j].image}"/></div>
                                                    <h5>${quizClicado.questions[i].answers[j].text}</h5>
                                                </div>`;
            }
        }
}