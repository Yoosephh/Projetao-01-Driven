let contentQuizz = document.querySelector('.containerQuizes');
let title = '';
let url = '';
let questions = '';
let levels = '';
let questionsStored = [];
let levelsStored = [];

function createQuizz() {
    console.log("função create quizz");
    contentQuizz.innerHTML = '';

    contentQuizz.innerHTML +=
        `<div class = "tela3">
            <span> Comece pelo começo </span>

            <div class = "caixa-inicial">
                <input type = "text" placeholder = "Título do seu Quizz" data-test = "title-input"></input>
                <input type = "text" placeholder = "URL da imagem do seu quizz" data-test = "img-input"></input>
                <input type = "text" placeholder = "Quantidade de perguntas do quizz" data-test = "questions-amount-input"></input>
                <input type = "text" placeholder = "Quantidade de níveis do quizz" data-test = "levels-amount-input"></input>
            </div>
            <div class = "botãoProsseguir" onclick = "checkData()" data-test = "go-create-questions">
                <p>Prosseguir para criar perguntas</p>
            </div>
        </div>`
}

function checkData() {
    console.log("check data");

    title = document.querySelector(".caixa-inicial :nth-child(1)").value;
    url = document.querySelector(".caixa-inicial :nth-child(2)").value;
    questions = document.querySelector(".caixa-inicial :nth-child(3)").value;
    questions = Number(questions);
    levels = document.querySelector(".caixa-inicial :nth-child(4)").value;

    console.log(title);
    console.log(url);
    console.log(questions);
    console.log(typeof(questions));

    console.log(levels);

    if (checkBasicData(title, url, questions, levels)){
        console.log("Dados válidos");
        createQuestions();
    } else {
        alert("Dados de entrada inválidos");
    }    
}

function checkBasicData(title, url, questions, levels) {

    if(!(title.length >= 20 && title.length <= 65)){
        console.log("Título inválido");
        return false;
    }

    if(!(questions >= 3)){
        console.log("Pergunta inválida");
        return false;
    }
    
    if(!(levels >= 2)){
        console.log("Nível inválido");
        return false;
    }
            
    if(!(checkURL(url))) {
        return false;
    }

    return true;
}

function createQuestions() {

    contentQuizz.innerHTML = '';

    contentQuizz.innerHTML +=
        `<div class = "tela3">
            <span> Crie suas perguntas </span>
            <div class = "questionsContainer"></div>
            <div class = "botãoProsseguir" onclick = "checkQuestions(${questions})" data-test = "go-create-levels">
                <p>Prosseguir para criar níveis</p>
            </div>
        </div>`

    insertQuestions(questions);

    showQuestion(1);
}

function insertQuestions(questions) {

    let screen = document.querySelector(".tela3 .questionsContainer");

    for (let i = 1; i <= questions; i++) {

        screen.innerHTML += 
        `<div class="questionsBox" data-test = "question-ctn">
            <ul class="pergunta${i}">
                
                <div class = "questionHeader">
                <span>Pergunta ${i}</span>
                <ion-icon name="create-outline" onclick="showQuestion(${i})" data-test = "toggle"></ion-icon>
                </div>
                
                <li>
                    <input type="text" placeholder="Texto da pergunta" class="questionTitle" data-test = "question-input">
                    <input type="text" placeholder="Cor de fundo da pergunta" class="questionColor" data-test = "question-color-input">
                </li>
                
                <li>
                    <span>Resposta correta</span>
                    <input type="text" placeholder="Resposta correta" class="respostaCorreta"  data-test = "correct-answer-input">
                    <input type="text" placeholder="URL da imagem" class="urlCorreta" data-test = "correct-img-input">
                </li>
                
                <li>
                    <span>Respostas incorretas</span>
                    <div>
                        <input type="text" placeholder="Resposta incorreta 1" class="resposta1" data-test="wrong-answer-input">
                        <input type="text" placeholder="URL da imagem 1" class="URL1" data-test = "wrong-img-input">
                    </div>
                    
                    <div>
                        <input type="text" placeholder="Resposta incorreta 2" class="resposta2" data-test="wrong-answer-input">
                        <input type="text" placeholder="URL da imagem 2" class="URL2" data-test = "wrong-img-input">
                    </div>
                    
                    <div>
                        <input type="text" placeholder="Resposta incorreta 3" class="resposta3" data-test = "wrong-answer-input">
                        <input type="text" placeholder="URL da imagem 3" class="URL3" data-test = "wrong-img-input">
                    </div>
                
                    </li>
            </ul>
        </div>`;
    }
}

function showQuestion(numberQuestion) {

    console.log(numberQuestion);

    let selectQuestion = document.querySelector(`.pergunta${numberQuestion}`);
    let iconSelectQuestion = document.querySelector(`.pergunta${numberQuestion} ion-icon`);

    console.log(selectQuestion);
    console.log(iconSelectQuestion);

    let selectedQuestion = document.querySelector(".show");
    let selectedIcon = document.querySelector(".show ion-icon");

    if(selectedQuestion === selectQuestion) {
        console.log("Mesma selecionada");
        selectQuestion.classList.toggle("show");
        selectedIcon.classList.toggle("hidden");
        return;
    }

    if(selectedQuestion !== null) {
        console.log("Desmarcando classe selecionada");
        selectedQuestion.classList.remove("show");
        selectedIcon.classList.remove("hidden");
    }

    selectQuestion.classList.add("show");
    iconSelectQuestion.classList.add("hidden");
    console.log("Classe selecionada");
}

function checkQuestions(questions) {

    if(checkQuestionsData(questions)) {
        createLevels();
    } else {
        alert("Dados de entrada inválidos");
    }

}

function checkQuestionsData(questions) {

    for (let i = 1; i <= questions; i++) {

        let pergunta = document.querySelector(`.questionsContainer .questionsBox:nth-child(${i})`);

        let title = pergunta.querySelector(".questionTitle").value;
        let color = pergunta.querySelector(".questionColor").value;
        let correctAnswer = pergunta.querySelector(".respostaCorreta").value;
        let correctURL = pergunta.querySelector(".urlCorreta").value;
        let answer1 = pergunta.querySelector(".resposta1").value;
        let URL1 = pergunta.querySelector(".URL1").value;
        let answer2 = pergunta.querySelector(".resposta2").value;
        let URL2 = pergunta.querySelector(".URL2").value;
        let answer3 = pergunta.querySelector(".resposta3").value;
        let URL3 = pergunta.querySelector(".URL3").value;

        if (checkQuestionsInput(title, color, correctAnswer, answer1, answer2, answer3, correctURL, URL1, URL2, URL3)){

            let ans1 = {
                image: correctURL,
                text: correctAnswer,
                isCorrectAnswer: true
            }

            let ans2 = {
                image: URL1,
                text: answer1,
                isCorrectAnswer: false
            }

            let ans3 = {
                image: URL2,
                text: answer2,
                isCorrectAnswer: false
            }

            let ans4 = {
                image: URL3,
                text: answer3,
                isCorrectAnswer: false
            }

            let answers = [ans1];

            if (ans2.text !== '') {
                answers.push(ans2);
            }
            if (ans3.text !== '') {
                answers.push(ans3);
            }
            if (ans4.text !== '') {
                answers.push(ans4);
            }

            let questionsList = {
                answers: answers,
                color: color,
                title: title
            };

            questionsStored.push(questionsList);
        }
    }

    if(questionsStored.length === questions){
        return true;
    } else {
        return false;
    }

}

function checkQuestionsInput(questionTitle, questionColor, respostaCorreta, resposta1, resposta2, resposta3, URLCorreta, URL1, URL2, URL3) {
    
    if (!(questionTitle.length >= 20)) {
        return false;
    }

    let hex = /^#[0-9A-F]{6}$/i;

    if(!(hex.test(questionColor))) {
        return false;
    }
        
    if(!(respostaCorreta !== '' && (resposta1 !== '' || resposta2 !== '' || resposta3 !== ''))) {
        return false;
    }

    if(!(checkURL(URLCorreta))) {
        return false;
    }
    
    if(resposta1 !== ''){
        if(!(checkURL(URL1))){
            return false;
        }
    }

    if(resposta2 !== ''){
        if(!(checkURL(URL2))){
            return false;
        }
    }

    if(resposta3 !== ''){
        if(!(checkURL(URL3))){
            return false;
        }
    }

    return true;
}

function checkURL(url) {
    try {
        console.log(url);
        new URL(url);
        return true;
    } catch(err) {
        console.log(err);
        console.log("URL inválida");
        return false;   
    }
}

function createLevels() {

    contentQuizz.innerHTML = '';

    contentQuizz.innerHTML += 
    `<div class="tela3">
        <span>Agora, decida os níveis</span>
        <div class="levels"></div>
        <div class="botãoProsseguir" onclick="checkLevels(${levels})" data-test = "finish">
            <p>Finalizar Quizz</p>
        </div>
    </div>`;

    insertLevels(levels);
    showQuestion(1);
}

function insertLevels(levels) {
    let screen = document.querySelector(".tela3 .levels");

    for (let i = 1; i <= levels; i++) {
        screen.innerHTML += 
        `<div class="questionsBox" data-test = "level-ctn">
            <ul class="pergunta${i} nivel">
                <div class = "levelHeader">
                    <span>Nível ${i}</span>
                    <ion-icon name="create-outline" onclick="showQuestion(${i})" data-test="toggle"></ion-icon>
                </div>
                <div></div>
                <input type="text" placeholder="Título do nível" data-test="level-input">
                <input type="text" placeholder="% de acerto mínima" data-test="level-percent-input">
                <input type="text" placeholder="URL da imagem do nível" data-test="level-img-input">
                <input type="text" placeholder="Descrição do nível">
            </ul>
        </div>`;
    }
}

function checkLevels(levels) {

    let verifyMinLevel0 = false;

    for(let i = 1; i <= levels; i++){

        title = document.querySelector(`.pergunta${i} :nth-child(3)`).value;
        minHits = document.querySelector(`.pergunta${i} :nth-child(4)`).value;
        url = document.querySelector(`.pergunta${i} :nth-child(5)`).value;
        description = document.querySelector(`.pergunta${i} :nth-child(6)`).value;

        if (minHits === "0"){
           verifyMinLevel0 = true;
        }

        if (checkLevelsInput(title, minHits, url, description)) {

            nivel = {
                image: url,
                minValue: Number(minHits),
                text: description,
                title: title
            }

            levelsStored.push(nivel);
        }
    }

    if((verifyMinLevel0 === true) && (levelsStored.length === levels)){
        sendQuizz();
    } else {
        alert("Dados de entrada inválidosos ");
    }
}

function checkLevelsInput(title, minHits, url, description) {

    if(title.length < 10){
        return false;
    }

    if(minHits < 0 || minHits > 100 || minHits === '') {
        return false;
    }


    if(!(checkURL(url))) {
        return false;
    }

    if(description.length <= 30){
        return false;
    }    
    
    return true;
}

function sendQuizz() {
    let quizz = {};

    quizz.image = url;
    quizz.title = title;
    quizz.questions = questionsStored;
    quizz.levels = levelsStored;

    let promise = axios.post("https://mock-api.driven.com.br/api/vs/buzzquizz/quizzes", quizz);
    promise.catch(alert);
    promise.then(callbackSendQuizz);
}

function callbackSendQuizz(ret) {
    createResume(ret.data);
}

function createResume(quizzData) {
    contentQuizz.innerHTML = '';

    contentQuizz.innerHTML = 
        `<div class="tela3">
            <span>Seu quizz está pronto!</span>
            <div class="myQuizz" onclick = "getQuizz(${quizzData.id})"  data-test="success-banner">
                    <img src="${quizzData.image}">
                    <div class="degrade2"></div>
                    <span>${quizzData.title}</span>
            </div>
            <div class="botãoProsseguir" onclick = "getQuizz(${quizzData.id})" data-test="go-quiz">
                <p>Acessar quizz</p>
            </div>
            <br>
            <div class="backHome" onclick="home()" data-test="go-home">
                <p>Voltar para home</p>
            </div>
        </div>`
}