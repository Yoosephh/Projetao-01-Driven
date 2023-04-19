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
    ]},
    {
    title: "Quiz sobre Harry Potter",
    image: "https://s2.glbimg.com/kO4g-unF_GRhnipjcZhG4eipReQ=/0x0:924x511/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/S/A/ZCeyhwSgG6TcfiWgAcKQ/harry-potter-historias.jpg",
    questions: [ {
        title : "1) Qual o verdadeiro nome do Lorde das Trevas, Valdemort?",
        answers: [
            {
            text:"Gellert Grindelwald",
            image: "https://recreio.uol.com.br/media/_versions/legacy/2020/11/26/gellert-grindelwald-1225522_widexl.jpg",
            isCorrectAnswer: false
            },{
            text:"Tom Marvolo Riddle",
            image: "https://i.pinimg.com/originals/9f/98/c7/9f98c742174c22301ef75543a4fe158e.jpg",
            isCorrectAnswer: true
            },{
            text:"Lucius Malfoy",
            image: "https://static.wikia.nocookie.net/villains/images/a/ad/Lucius_Malfoy.jpg/revision/latest?cb=20110710180141",
            isCorrectAnswer: false
            },{
            text:"Severus Snape",
            image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg",
            isCorrectAnswer: false
            }
        ]
    }, {
        title : "2) Qual casa de Hogwarts foi fundada por Salazar Slytherin?",
        answers: [
            {
            text:"Grifinoria",
            image: "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest?cb=20201020015812&path-prefix=pt-br",
            isCorrectAnswer: false
            },{
            text:"Corvinal",
            image: "https://static.wikia.nocookie.net/harrypotter/images/0/07/Ravenclaw_%28S%C3%ADmbolo_Corvinal%29.png/revision/latest?cb=20170324224938&path-prefix=pt-br",
            isCorrectAnswer: false
            },{
            text:"Lufa-Lufa",
            image: "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20200612012838&path-prefix=pt-br",
            isCorrectAnswer: false
            },{
            text:"Sonserina",
            image: "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest?cb=20200605032916&path-prefix=pt-br",
            isCorrectAnswer: true
            }
        ]
    }, {
        title : "3) Qual o feitico usado para desarmar um oponente?",
        answers: [
            {
            text:"Expelliarmus",
            image: "https://i.pinimg.com/736x/20/fe/78/20fe7832d01c03515ca04ce6ee96a24c.jpg",
            isCorrectAnswer: false
            },{
            text:"Wingardium Leviosa",
            image: "https://static.vecteezy.com/ti/vetor-gratis/p3/10835581-silhueta-preta-de-penas-com-letras-wingardium-leviosa-ilustracaoial-vetor.jpg",
            isCorrectAnswer: true
            },{
            text:"Accio",
            image: "https://www.thegoldenstar.net/wp-content/uploads/2019/05/16624850_web1_harry-potter-web.jpg",
            isCorrectAnswer: false
            },{
            text:"Crucio",
            image: "https://cdn.shopify.com/s/files/1/0507/9688/8239/articles/unnamed_c493bd0d-17c5-4a98-9df7-ae664df12aa1.jpg?v=1676448145",
            isCorrectAnswer: false
            }
        ]
    }, {
        title : "4) De qual familia da classe alta de bruxos Draco fazia parte?",
        answers: [
            {
            text:"Familia Black",
            image: "https://pm1.narvii.com/6287/2c3f7b49fae4ee4e052062bcb428b394cbf06ce0_hq.jpg",
            isCorrectAnswer: false
            },{
            text:"Familia Weasley",
            image: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/11/fred-george-ginny-ron-hp-5-the-weasley-family-28758545-2500-1850-e1481969701848.jpg",
            isCorrectAnswer: false
            },{
            text:"Familia Potter",
            image: "https://criticalhits.com.br/wp-content/uploads/2021/01/74c95373cef8cf52d0aeb93c542a0ff2.jpg",
            isCorrectAnswer: false
            },{
            text:"Familia Malfoy",
            image: "https://epipoca.com.br/wp-content/uploads/2021/04/Helen-McCrory-em-Harry-Potter-1200x900.jpg",
            isCorrectAnswer: true
            },
        ]}
    ]
},
]
// vai ser chamado quando o usuario clicar para iniciar um quiz

// mostra as perguntas com 4 possiveis respostas. Precisa identificar o clique do usuario 
//sinalizar se o clique foi numa resposta correta

//ao final do quiz, identificar o desempenho do usuario e uma resposta qualquer para o desempenho