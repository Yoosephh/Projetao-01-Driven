const quizAleatorio =  [
    {
    title: "Quiz sobre ciencias",
    image: "https://img.freepik.com/vetores-gratis/fundo-de-educacao-cientifica-de-mao-desenhada_23-2148499325.jpg?w=900&t=st=1681913176~exp=1681913776~hmac=51266ab1374d683143339fa979cabed38d7cc36d087725af084b5fd1479fddf9",
    questions: [ 
        {
            title : "1) Qual a unidade basica da vida?",
            color : "green",
            answers: [
                {
                    text:"Atomo",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.png/250px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.png",
                    isCorrectAnswer:true
                },{
                    text:"Celula",
                    image: "https://static.escolakids.uol.com.br/2021/06/celula-vegetal.jpg",
                    isCorrectAnswer: false
                },{
                    text:"Gene",
                    image: "https://i0.wp.com/jornal.usp.br/wp-content/uploads/2020/05/20200527_33241.jpg?w=800&ssl=1",
                    isCorrectAnswer: false
                },{
                    text:"Proteina",
                    image: "https://media.istockphoto.com/id/505592886/pt/foto/selec%C3%A7%C3%A3o-de-prote%C3%ADnas-de-origens-na-cozinha-de-fundo.jpg?s=1024x1024&w=is&k=20&c=VIvKD5A5hrIOsnhNJfwMPtr5qgNLd67eyoBnQPmd2x8=",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title : "2) Qual o nome da teoria que explica a evolucao das especies?",
            color : "blue",
            answers: [
                {
                    text:"Teoria da Gravidade",
                    image: "https://www2.unesp.br/Modulos/Noticias/34438/01quantumgravity.png",
                    isCorrectAnswer: false
                },{
                    text:"Teoria do Big Bang",
                    image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/97a951a7288206f4e2a416dde28bc0b2.jpg",
                    isCorrectAnswer: true
                },{
                    text:"Teoria da Selecao Natural",
                    image: "https://s3.static.brasilescola.uol.com.br/be/2020/10/tentilhoes.jpg",
                    isCorrectAnswer: false
                },{
                    text:"Teoria do Criacionismo",
                    image: "https://static.todamateria.com.br/upload/ev/ol/evolucionismoecriacionismo.jpg?auto_optimize=low",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title : "3) Qual a formula quimica da agua?",
            answers: [
                {
                    text:"CO2",
                    image: "https://tratamentodeagua.com.br/wp-content/uploads/2022/05/Japao-cria-o-sistema.jpg",
                    isCorrectAnswer: false
                },{
                    text:"H2SO4",
                    image: "https://as2.ftcdn.net/v2/jpg/00/66/88/77/1000_F_66887783_IZBcTe32mTQ4EhGqJSq01mXCMsacw7L4.jpg",
                    isCorrectAnswer: false
                },{
                    text:"NH3",
                    image: "https://s3.static.brasilescola.uol.com.br/be/2023/02/borrifador-ao-lado-de-formula-estrutural-da-amonia.jpg",
                    isCorrectAnswer: false
                },{
                    text:"H2O",
                    image: "https://static.vecteezy.com/ti/vetor-gratis/p1/377135-icone-de-de-h2o-gratis-vetor.jpg",
                    isCorrectAnswer: true
                }
            ]
        }
]
},
{
    title: "Quiz sobre historia",
    image: "https://img.freepik.com/vetores-gratis/fundo-de-educacao-cientifica-de-mao-desenhada_23-2148499325.jpg?w=900&t=st=1681913176~exp=1681913776~hmac=51266ab1374d683143339fa979cabed38d7cc36d087725af084b5fd1479fddf9",
    questions: [ {
        title : "1) Qual a unidade basica da vida?",
        color : "green",
        answers: [
            {
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            }
        ]
    }]
},
{
    title: "Quiz sobre ciencias",
    image: "https://img.freepik.com/vetores-gratis/fundo-de-educacao-cientifica-de-mao-desenhada_23-2148499325.jpg?w=900&t=st=1681913176~exp=1681913776~hmac=51266ab1374d683143339fa979cabed38d7cc36d087725af084b5fd1479fddf9",
    questions: [ {
        title : "1) Qual a unidade basica da vida?",
        color : "green",
        answers: [
            {
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            },{
                text:"",
                image: "",
                isCorrectAnswer:
            }
        ]
    }]
}

]
// vai ser chamado quando o usuario clicar para iniciar um quiz

// mostra as perguntas com 4 possiveis respostas. Precisa identificar o clique do usuario 
//sinalizar se o clique foi numa resposta correta

//ao final do quiz, identificar o desempenho do usuario e uma resposta qualquer para o desempenho