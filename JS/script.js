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
let quizSelecionado;

let divBody = document.querySelector('.divBody');
function fazerPage1(){
    divBody.innerHTML = `<div class="header">
                            <h1 onclick="recarregar()">BuzzQuizz</h1>
                            </div>
                            <div class="main">
                            <div class="divSeusQuizes">
                                <p> Você não criou nenhum quiz ainda :( </p>
                                <button onclick="createQuizz()" class="criar"> <p>Criar Quizz</p> </button>

                            </div>
                            <div class="divContainerTodosQuizes">
                                <div class="tituloSeusQuizes">
                                    <span class="alinhador"><h2>Todos os Quizzes</h2></span>
                                </div>
                                <div class="containerQuizes"></div>
                            </div>
                            </div>
                            <div class="container2">
                            </div>
                        `;

    console.log('OLHA O BODY EMBAIXO');
    console.log(divBody);
}
fazerPage1();

function funcSeusQuizes(){
    console.log('EM BAIXO É LISTAIDSNOME');
    console.log(listaIDsNome);
    let retornolistaIDs = JSON.parse(localStorage.getItem(listaIDsNome));
    if (retornolistaIDs !== null){
        listaIDs = JSON.parse(localStorage.getItem(listaIDsNome));
        divSeusQuizes.innerHTML = 
            `
            <div class="tituloComBotao">
                <span ><h2>Seus Quizzes</h2></span>
                <ion-icon class="vermelho" onclick="createQuizz()" name="add-circle"></ion-icon>
                
            </div>
            <div class="containerSeusQuizes"></div>

            `;
        let containerSeusQuizes = document.querySelector('.containerSeusQuizes');
        containerSeusQuizes = "";

        for( let i = 0 ; i < dadosRecebidos.length ; i++ ){


            for( let j = 0 ; j < listaIDs.length ; j++ ){

                if(dadosRecebidos[i].id == listaIDs[j]){

                    containerSeusQuizes.innerHTML +=     `<div class="quiz" onclick="distribuirOsDadosClicado(${i})">
                                                        <span class="dadoOculto">${i}</span>
                                                        <img src= "${dadosRecebidos[i].image}" alt=""> 
                                                        <h3>${dadosRecebidos[i].title}</h3>
                                                    </div>`;


                }
            }
        }
    }
}
funcSeusQuizes();
function gerarQuizesRecebidos(res){
    dadosRecebidos = res.data;

    const containerQuizes = document.querySelector('.containerQuizes');
    containerQuizes.innerHTML = '';
    for( let i = 0; i < dadosRecebidos.length; i++ ){
        containerQuizes.innerHTML +=    
        `<div class="quiz" onclick="distribuirOsDadosClicado(${i})">
            <span class="dadoOculto">${i}</span>
            <img src= "${dadosRecebidos[i].image}" alt=""> 
            <h3>${dadosRecebidos[i].title}</h3>
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
    feedPerguntas.innerHTML= "";
    scrollIntoElement();
}
function reiniciaJogo() {
    distribuirOsDadosClicado(quizSelecionado);
    qntsAcertos = 0;
    perguntasRespondidas = 0;
    scrollIntoElement();
}

function distribuirOsDadosClicado(tagClicada){
    trocarTela();
    
    quizClicado = dadosRecebidos[tagClicada];

    varQuizrenderizado = document.querySelector('.container2');
    varQuizrenderizado.innerHTML = 
        `
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="banner" style="background-image: url('${quizClicado.image}')"><h4>${quizClicado.title}</h4></div>
            <div class="feedPerguntas">
            </div>
        `;

    feedPerguntas = document.querySelector('.feedPerguntas');
    
    for(let i = 0 ; i < quizClicado.questions.length; i ++){
        
        const perguntaIndex = `pergunta-${i}`;
        const perguntaIndexNext = `pergunta-${i+1}`;

        feedPerguntas.innerHTML += 
                `<div class="pergunta ${perguntaIndex}">
                    <div class="titlePergunta" style='background-color: ${quizClicado.questions[i].color}'>${quizClicado.questions[i].title}</div>
                    <div class="respostasPergunta" data-index="${perguntaIndexNext}"></div>
                </div>
                `;
        
    }
    

    let htmlRespostas = document.querySelectorAll('.respostasPergunta');
    
    for(let i = 0 ; i < htmlRespostas.length ; i++){
        const perguntaIndexNext = htmlRespostas[i].dataset.index;
        const randomAnswers = quizClicado.questions[i].answers.sort(() => 0.5 - Math.random())
        for(let j = 0 ; j < randomAnswers.length ; j++){
            let abrev = randomAnswers[j]
            htmlRespostas[i].innerHTML += 
            `<div class="resposta" onclick="revelaResposta(this, '.${perguntaIndexNext}')" data-answer="${abrev.isCorrectAnswer}">
                <div class='limitadorAltura'><img src="${abrev.image}" /></div>
                <h5>${abrev.text}</h5>
            </div>`;
        }
    }
    
    varQuizrenderizado.innerHTML += `
        <div class="jogoAcabou">
        <button class="playAgain" onclick ="reiniciaJogo()"> Jogar novamente</button>
        <button class="mainMenuBtn" onclick='retornaMenu()'> Voltar ao menu </button> </div>`

    divScore = document.querySelector(".score");
    quizSelecionado = tagClicada;
}

function revelaResposta(par, perguntaIndexNext) {
    
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

    if(qualResp === "true") {
        qntsAcertos++;
    }

    perguntasRespondidas++
    jaAcabou();

    setTimeout(()=> {
        scrollIntoElement(perguntaIndexNext)
    }, 2000)
    ;
}

function jaAcabou() {
    if (perguntasRespondidas == quizClicado.questions.length) {
        document.querySelector('.jogoAcabou').style.display="flex"
        console.log(qntsAcertos)
        desempenho = Math.round(((qntsAcertos/perguntasRespondidas)*100))

        const divFinal = document.createElement("div");
        divFinal.classList.add("pergunta");
        divFinal.classList.add("pergunta-final")
       
        const divTitleFinal = document.createElement('div');
        divFinal.appendChild(divTitleFinal)
        divTitleFinal.classList.add('headFinal');
    
        const divContentFinal = document.createElement('div');
        divContentFinal.classList.add('divContent')
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
                scrollIntoElement(".pergunta-final")   
                return
            }
        }
    }
}

function scrollIntoElement(element = "html") {
    const block = element  === "html" ? "start" : "end"; 
    const selectedElement = document.querySelector(element);

    selectedElement.scrollIntoView({
        block,
        behavior: "smooth", 
    })
}