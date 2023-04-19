axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';

// thiago- testando funçao get:
function respostaPromessaObterQuizes(res){
    alert('promessa de obeter quizes cumprida');
    console.log(res);
}

let promessaObterQuizes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
promessaObterQuizes.then(respostaPromessaObterQuizes)
// fim teste função get


//Tela inicial do usuario
    //Cria um quiz
        //perguntas com input (imagem, endereco, resposta errada, certa....)
        //armazenar o quiz do usuario -> post
    //entrar em um quiz
        //logica para captar a resposta errada, e a resposta correta
        //Calcular o indice de acerto do usuario
    //