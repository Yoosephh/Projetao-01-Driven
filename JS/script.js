axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';
let dadosRecebidos;

// thiago- testando funçao get:
function respostaPromessaObterQuizes(res){
    alert('promessa de obeter quizes cumprida');
    console.log(res);
    dadosRecebidos = res.data;
    console.log(dadosRecebidos);
    console.log(dadosRecebidos[0]);


    const imagemQuizRecebido = document.querySelector('.quiz img');
    console.log(imagemQuizRecebido);
    imagemQuizRecebido.src = dadosRecebidos[0].image;

}

let promessaObterQuizes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
promessaObterQuizes.then(respostaPromessaObterQuizes)

//thiago- fim teste função get


//Tela inicial do usuario
    //Cria um quiz
        //perguntas com input (imagem, endereco, resposta errada, certa....)
        //armazenar o quiz do usuario -> post
    //entrar em um quiz


        //logica para captar a resposta errada, e a resposta correta
        //Calcular o indice de acerto do usuario
    //