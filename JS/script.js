axios.defaults.headers.common['Authorization'] = 'aTbqbZrZrkTYLYdrTktudg1i';
let dadosRecebidos;

// thiago- testando funçao get:
function gerarQuizesRecebidos(){
    const containerQuizes = document.querySelector('.containerQuizes');
    containerQuizes.innerHTML = '';
    for( let i = 0; i < dadosRecebidos.length; i++ ){
        containerQuizes.innerHTML +=    `<div class="quiz">
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



//thiago- fim teste função get


//Tela inicial do usuario
    //Cria um quiz
        //perguntas com input (imagem, endereco, resposta errada, certa....)
        //armazenar o quiz do usuario -> post
    //entrar em um quiz


        //logica para captar a resposta errada, e a resposta correta
        //Calcular o indice de acerto do usuario
    //