axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';
let dadosRecebidos;
let promessaObterQuizes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
promessaObterQuizes.then(gerarQuizesRecebidos)
let qntsAcertos = 0;
let  perguntasRespondidas = 0;
let desempenho;
let feedPerguntas;
let varQuizrenderizado;
let divScore;

function gerarQuizesRecebidos(res){
    dadosRecebidos = res.data;

    const containerQuizes = document.querySelector('.containerQuizes');
    containerQuizes.innerHTML = '';
    for( let i = 0; i < dadosRecebidos.length; i++ ){
        containerQuizes.innerHTML +=    
        `<div class="quiz" onclick="distribuirOsDadosClicado(this)">
            <spam class="dadoOculto">${i}</spam>
            <img src= "${dadosRecebidos[i].image}" alt=""> 
            <span>
                <h3>${dadosRecebidos[i].title}</h3>
            </span>
        </div>`;
    }
}
function recarregar(){
    window.location.reload();
}


function trocarTela(){
    document.querySelector('.container2').style.display= "flex";
    document.querySelector('.main').style.display="none";
}

function retornaMenu() {
    document.querySelector('.container2').style.display="none";
    document.querySelector('.main').style.display="block";
    qntsAcertos = 0;
    perguntasRespondidas = 0;
}

function distribuirOsDadosClicado(tagClicada){
    trocarTela();
    const numeroDoQuizTag = tagClicada.querySelector('.dadoOculto');
    let numeroDoQuiz = numeroDoQuizTag.innerHTML;

    quizClicado = dadosRecebidos[numeroDoQuiz];

    varQuizrenderizado = document.querySelector('.container2');
    varQuizrenderizado.innerHTML = 
        `
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="banner"><h4>${quizClicado.title}</h4></div>
            <div class="feedPerguntas">
            </div>
        `;

    feedPerguntas = document.querySelector('.feedPerguntas');
    
    for(let i = 0 ; i < quizClicado.questions.length; i ++){
        feedPerguntas.innerHTML += 
                `<div class="pergunta">
                    <div class="titlePergunta">${quizClicado.questions[i].title}</div>
                    <div class="respostasPergunta"></div>
                </div>
                `;
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
    
    varQuizrenderizado.innerHTML += `
        <div class="jogoAcabou">
        <button class="playAgain"> Jogar novamente</button>
        <button class="mainMenuBtn" onclick='retornaMenu()'> Voltar ao menu </button> </div>`

    divScore = document.querySelector(".score");
}



function revelaResposta(par) {
    
    let qualResp = par.dataset.answer;

    let resps = par.parentElement.querySelectorAll('.resposta');

    for(let i = 0; i < resps.length; i++) {
        resps[i].removeAttribute('onclick')
        if(resps[i].dataset.answer === "false") {
            resps[i].querySelector('h5').classList.add('respErrada')
        } else if (resps[i].dataset.answer === "true") {
            resps[i].querySelector('h5').classList.add('respCerta')
        }
        if(resps[i] !== par) resps[i].classList.add('selecionada')
    }

    if(qualResp == "true") {
        perguntasRespondidas++;
        qntsAcertos++;
        jaAcabou();
    } else if (qualResp == "false") {
        perguntasRespondidas++
        jaAcabou();
    }}

function jaAcabou() {
    console.log(feedPerguntas)
    if (perguntasRespondidas == quizClicado.questions.length) {
        document.querySelector('.jogoAcabou').style.display="flex"
    
        desempenho = Math.round(((qntsAcertos/perguntasRespondidas)*100))

        const divFinal = document.createElement("div");
        divFinal.classList.add("pergunta");
       
        const divTitleFinal = document.createElement('div');
        divFinal.appendChild(divTitleFinal)
        divTitleFinal.classList.add('headFinal');
    
        const divContentFinal = document.createElement('div');
        divFinal.appendChild(divContentFinal);
    
        const divImgFinal = document.createElement('div');
        divContentFinal.appendChild(divImgFinal);
        divImgFinal.classList.add('imgLevel');
    
        const divTextFinal = document.createElement('div');
        divContentFinal.appendChild(divTextFinal)
        divTextFinal.classList.add('textLevel');
        
        feedPerguntas = document.querySelector('.feedPerguntas');
        
        feedPerguntas.append(divFinal);   
        
        for(let i = quizClicado.levels.length - 1; i >= 0 ; i--) {
            if(desempenho >= quizClicado.levels[i].minValue){
                divTitleFinal.innerHTML= `${desempenho}% de acerto: ${quizClicado.levels[i].title}`;
                console.log(quizClicado.levels[i].title)
    
                divImgFinal.innerHTML= `<img src="${quizClicado.levels[i].image}" alt="">`;
    
                divTextFinal.innerHTML = `${quizClicado.levels[i].text}`;
                console.log(quizClicado.levels[i].text)
                console.log(`Seu desempenho foi de ${desempenho}%, que é maior que ${quizClicado.levels[i].minValue}`)
                return
            }
        }
    }
}
