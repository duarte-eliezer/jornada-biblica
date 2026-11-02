
// ============================================
// JESUS EM TODA A BÍBLIA
// Uma jornada pelas Escrituras
// ============================================

// BANCO DAS 7 PERGUNTAS

const perguntas = [
    {
        etapa: "PENTATEUCO",
        texto: "Em Gênesis 3:15, depois da queda do homem, Deus faz uma promessa. O que essa promessa anuncia?",
        alternativas: [
            "A construção de um novo templo.",
            "A vitória do descendente da mulher sobre a serpente.",
            "A libertação de Israel do Egito."
        ],
        correta: 1,
        explicacao: "Essa passagem é conhecida como o primeiro anúncio do Evangelho. Ela aponta para Jesus, que venceria Satanás, o pecado e a morte.",
        referencia: "Gênesis 3:15",
        pontos: 100
    },
    {
        etapa: "LIVROS HISTÓRICOS",
        texto: "No livro de Rute, qual personagem atua como resgatador da família de Noemi e Rute, apontando para a obra redentora de Jesus?",
        alternativas: [
            "Boaz.",
            "Samuel.",
            "Elias."
        ],
        correta: 0,
        explicacao: "Boaz atua como resgatador da família de Rute. Sua atitude oferece uma figura da redenção que encontramos plenamente em Jesus.",
        referencia: "Rute 4:9-10; Efésios 1:7",
        pontos: 200
    },
    {
        etapa: "SALMOS",
        texto: "Qual Salmo apresenta detalhes de sofrimento que encontram correspondência na crucificação de Jesus?",
        alternativas: [
            "Salmo 1.",
            "Salmo 23.",
            "Salmo 22."
        ],
        correta: 2,
        explicacao: "O Salmo 22 descreve sofrimento, mãos e pés feridos e pessoas dividindo as vestes por sorteio, acontecimentos relacionados à crucificação de Jesus.",
        referencia: "Salmo 22:16-18; João 19:23-24",
        pontos: 300
    },
    {
        etapa: "PROVÉRBIOS",
        texto: "Em qual capítulo de Provérbios encontramos a sabedoria personificada junto à obra da criação, fazendo uma conexão com Jesus como a sabedoria de Deus?",
        alternativas: [
            "Provérbios 8.",
            "Provérbios 15.",
            "Provérbios 31."
        ],
        correta: 0,
        explicacao: "Provérbios 8 apresenta a sabedoria personificada junto à criação. No Novo Testamento, Cristo é apresentado como a sabedoria de Deus. É uma conexão teológica, não uma identificação explícita da personagem do capítulo com Jesus.",
        referencia: "Provérbios 8:22-31; 1 Coríntios 1:24",
        pontos: 400
    },
    {
        etapa: "PROFETAS",
        texto: "Qual profeta anunciou que um menino nasceria e seria chamado de Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade e Príncipe da Paz?",
        alternativas: [
            "Jeremias.",
            "Isaías.",
            "Ezequiel."
        ],
        correta: 1,
        explicacao: "Isaías anunciou a vinda desse menino, uma profecia tradicionalmente relacionada à identidade e ao nascimento de Jesus.",
        referencia: "Isaías 9:6",
        pontos: 500
    },
    {
        etapa: "NOVO TESTAMENTO – EVANGELHOS",
        texto: "No início do Evangelho de João, Jesus é apresentado como o Verbo. O que João revela sobre Ele?",
        alternativas: [
            "Que foi criado depois de todas as coisas.",
            "Que era apenas um profeta.",
            "Que no princípio já existia, estava com Deus e era Deus."
        ],
        correta: 2,
        explicacao: "João revela a eternidade e a divindade de Jesus. O Verbo se fez carne e habitou entre nós.",
        referencia: "João 1:1-14",
        pontos: 600
    },
    {
        etapa: "APOCALIPSE – CONEXÃO COM GÊNESIS",
        texto: "Em Gênesis, a humanidade perde o acesso à árvore da vida após o pecado. Em Apocalipse, ela aparece novamente. O que essa conexão revela?",
        alternativas: [
            "Que Deus decidiu abandonar a humanidade depois do pecado.",
            "Que Jesus é o Cordeiro que venceu e que, por meio dele, a humanidade redimida terá novamente acesso à árvore da vida.",
            "Que a humanidade precisará reconstruir o jardim do Éden para ser salva."
        ],
        correta: 1,
        explicacao: "Em Gênesis, o acesso à árvore da vida é perdido depois da queda. Em Apocalipse, ela aparece novamente na nova criação. Jesus, o Cordeiro, é o centro dessa redenção. A Bíblia começa com a criação e termina com a restauração de todas as coisas.",
        referencia: "Gênesis 2:9; 3:22-24; Apocalipse 21:1-5; 22:1-5",
        pontos: 1000
    }
];

// ============================================
// VARIÁVEIS DO JOGO
// ============================================

let indiceAtual = 0;
let pontuacao = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

// ============================================
// ELEMENTOS HTML
// ============================================

const telaInicial = document.getElementById("tela-inicial");
const telaPerguntas = document.getElementById("tela-perguntas");
const telaFinal = document.getElementById("tela-final");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const progresso = document.getElementById("progresso");
const pontuacaoTela = document.getElementById("pontuacao");
const perguntaTela = document.getElementById("pergunta");
const alternativasTela = document.getElementById("alternativas");
const referenciaTela = document.getElementById("referencia");
const pontosFinais = document.getElementById("pontos-finais");

// ============================================
// TROCAR ENTRE AS TRÊS TELAS
// ============================================

function mostrarTela(tela) {
    [telaInicial, telaPerguntas, telaFinal].forEach(item => {
        item.classList.remove("ativa");
    });

    tela.classList.add("ativa");

    window.scrollTo(0, 0);
}

// ============================================
// INICIAR JOGO
// ============================================

function iniciarJogo() {
    indiceAtual = 0;
    pontuacao = 0;
    acertos = 0;
    erros = 0;

    mostrarTela(telaPerguntas);
    carregarPergunta();
}

// ============================================
// CARREGAR PERGUNTA
// ============================================

function carregarPergunta() {
    respondeu = false;

    const pergunta = perguntas[indiceAtual];

    progresso.textContent =
        `Pergunta ${indiceAtual + 1} de ${perguntas.length} — ${pergunta.etapa}`;

    pontuacaoTela.textContent =
        `Pontos: ${pontuacao}`;

    perguntaTela.textContent = pergunta.texto;

    referenciaTela.textContent = "";

    alternativasTela.innerHTML = "";

    btnProxima.disabled = true;

    btnProxima.textContent =
        indiceAtual === perguntas.length - 1
        ? "CONCLUIR JORNADA"
        : "PRÓXIMA PERGUNTA";

    pergunta.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");

        botao.className = "alternativa";

        const letra = ["A", "B", "C"][indice];

        botao.textContent = `${letra}) ${texto}`;

        botao.addEventListener("click", () => {
            verificarResposta(indice);
        });

        alternativasTela.appendChild(botao);
    });
}

// ============================================
// VERIFICAR RESPOSTA
// ============================================

function verificarResposta(escolha) {
    if (respondeu) return;

    respondeu = true;

    const pergunta = perguntas[indiceAtual];

    const botoes = alternativasTela.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    // Destacar resposta correta
    botoes[pergunta.correta].classList.add("correta");

    let mensagem = "";

    if (escolha === pergunta.correta) {
        acertos++;
        pontuacao += pergunta.pontos;

        mensagem = `
            <div class="explicacao acertou">
                <h3>✨ RESPOSTA CERTA!</h3>
                <p>Você ganhou ${pergunta.pontos} pontos!</p>
            </div>
        `;
    } else {
        erros++;

        botoes[escolha].classList.add("errada");

        const letraCorreta = ["A", "B", "C"][pergunta.correta];

        mensagem = `
            <div class="explicacao errou">
                <h3>🌤 NÃO FOI DESSA VEZ!</h3>
                <p>Resposta correta: ${letraCorreta}) ${pergunta.alternativas[pergunta.correta]}</p>
            </div>
        `;
    }

    // Exibir explicação bíblica
    referenciaTela.innerHTML = `
        ${mensagem}
        <p>${pergunta.explicacao}</p>
        <strong>Referência bíblica: ${pergunta.referencia}</strong>
    `;

    pontuacaoTela.textContent = `Pontos: ${pontuacao}`;

    btnProxima.disabled = false;
}

// ============================================
// PRÓXIMA PERGUNTA OU RESULTADO
// ============================================

function proximaPergunta() {
    if (!respondeu) return;

    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        concluirJogo();
    }
}

// ============================================
// CONCLUIR JORNADA
// ============================================

function concluirJogo() {
    mostrarTela(telaFinal);

    pontosFinais.textContent = pontuacao;

    const resumo = document.getElementById("resumo-final");

    if (resumo) {
        resumo.innerHTML = `
            <p><strong>Respostas corretas:</strong> ${acertos}</p>
            <p><strong>Respostas erradas:</strong> ${erros}</p>
            <p><strong>Total de perguntas:</strong> 7</p>
        `;
    }
}

// ============================================
// REINICIAR
// ============================================

function reiniciarJogo() {
    indiceAtual = 0;
    pontuacao = 0;
    acertos = 0;
    erros = 0;
    respondeu = false;

    mostrarTela(telaInicial);
}

// ============================================
// CONECTAR OS BOTÕES
// ============================================

btnComecar.addEventListener("click", iniciarJogo);
btnProxima.addEventListener("click", proximaPergunta);
btnReiniciar.addEventListener("click", reiniciarJogo);

// ============================================
// JOGO PRONTO
// ============================================

console.log("Jesus em Toda a Bíblia carregado!");
