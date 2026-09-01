// ======================================================
// CÓDIGO DAS CORDAS — GERADOR DE ESCALAS
// Núcleo musical completo
// ======================================================


// ======================================================
// NOTAS CROMÁTICAS
// ======================================================

const notasCromaticas = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
];


// ======================================================
// VALORES DAS NOTAS NATURAIS
// ======================================================

const valoresNaturais = {

    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11

};


// ======================================================
// LETRAS MUSICAIS
// ======================================================

const letras = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];


// ======================================================
// VALORES DAS NOTAS
// ======================================================

const valoresNotas = {

    C: 0,

    "C#": 1,
    Db: 1,

    D: 2,

    "D#": 3,
    Eb: 3,

    E: 4,

    F: 5,

    "F#": 6,
    Gb: 6,

    G: 7,

    "G#": 8,
    Ab: 8,

    A: 9,

    "A#": 10,
    Bb: 10,

    B: 11

};


// ======================================================
// DEFINIÇÃO DAS ESCALAS
//
// A FÓRMULA É A FONTE DE VERDADE.
//
// O programa calcula:
// fórmula → semitons → letras → notas
// ======================================================

const escalas = {

    // --------------------------------------------------
    // DIATÔNICAS
    // --------------------------------------------------

    maior: {
        nome: "Maior",
        formula: [
            "1", "2", "3", "4",
            "5", "6", "7"
        ]
    },

    menorNatural: {
        nome: "Menor natural",
        formula: [
            "1", "2", "♭3", "4",
            "5", "♭6", "♭7"
        ]
    },

    menorHarmonica: {
        nome: "Menor harmônica",
        formula: [
            "1", "2", "♭3", "4",
            "5", "♭6", "7"
        ]
    },

    menorMelodica: {
        nome: "Menor melódica",
        formula: [
            "1", "2", "♭3", "4",
            "5", "6", "7"
        ]
    },


    // --------------------------------------------------
    // MODOS GREGOS
    // --------------------------------------------------

    jonio: {
        nome: "Jônio",
        formula: [
            "1", "2", "3", "4",
            "5", "6", "7"
        ]
    },

    dorico: {
        nome: "Dórico",
        formula: [
            "1", "2", "♭3", "4",
            "5", "6", "♭7"
        ]
    },

    frigio: {
        nome: "Frígio",
        formula: [
            "1", "♭2", "♭3", "4",
            "5", "♭6", "♭7"
        ]
    },

    lidio: {
        nome: "Lídio",
        formula: [
            "1", "2", "3", "♯4",
            "5", "6", "7"
        ]
    },

    mixolidio: {
        nome: "Mixolídio",
        formula: [
            "1", "2", "3", "4",
            "5", "6", "♭7"
        ]
    },

    eolio: {
        nome: "Eólio",
        formula: [
            "1", "2", "♭3", "4",
            "5", "♭6", "♭7"
        ]
    },

    locrio: {
        nome: "Lócrio",
        formula: [
            "1", "♭2", "♭3", "4",
            "♭5", "♭6", "♭7"
        ]
    },


    // --------------------------------------------------
    // PENTATÔNICAS
    // --------------------------------------------------

    pentatonicaMaior: {
        nome: "Pentatônica maior",
        formula: [
            "1", "2", "3", "5", "6"
        ]
    },

    pentatonicaMenor: {
        nome: "Pentatônica menor",
        formula: [
            "1", "♭3", "4", "5", "♭7"
        ]
    },


    // --------------------------------------------------
    // BLUES
    // --------------------------------------------------

    bluesMaior: {
        nome: "Blues maior",
        formula: [
            "1", "2", "♭3", "3",
            "5", "6"
        ]
    },

    bluesMenor: {
        nome: "Blues menor",
        formula: [
            "1", "♭3", "4", "♭5",
            "5", "♭7"
        ]
    },


    // --------------------------------------------------
    // CROMÁTICA
    // --------------------------------------------------

    cromatica: {
        nome: "Cromática",
        formula: [
            "1", "♭2", "2", "♭3",
            "3", "4", "♯4", "5",
            "♭6", "6", "♭7", "7"
        ]
    },


    // --------------------------------------------------
    // TONS INTEIROS
    // --------------------------------------------------

    tonsInteiros: {
        nome: "Tons inteiros (Hexafônica)",
        formula: [
            "1", "2", "3",
            "♯4", "♯5", "♭7"
        ]
    },


    // --------------------------------------------------
    // DIMINUTA TOM–SEMITOM
    // --------------------------------------------------

    diminutaTomSemitom: {
        nome: "Diminuta Tom–Semitom",
        formula: [
            "1", "2", "♭3", "4",
            "♭5", "♭6", "6", "7"
        ]
    },


    // --------------------------------------------------
    // DIMINUTA SEMITOM–TOM
    // --------------------------------------------------

    diminutaSemitomTom: {
        nome: "Diminuta Semitom–Tom",
        formula: [
            "1", "♭2", "♭3", "3",
            "♯4", "5", "6", "♭7"
        ]
    },


    // --------------------------------------------------
    // MEIO-DIMINUTA
    // --------------------------------------------------

    meioDiminuta: {
        nome: "Meio-diminuta",
        formula: [
            "1", "2", "♭3", "4",
            "♭5", "♭6", "♭7"
        ]
    }

};


// ======================================================
// CONVERTER TOKEN DA FÓRMULA
// PARA GRAU E QUANTIDADE DE ACIDENTES
// ======================================================

function analisarFormula(token) {

    const correspondencia =
        token.match(
            /^([♭b♯#]*)([1-7])$/
        );


    if (!correspondencia) {

        return null;

    }


    const acidentes =
        correspondencia[1] || "";


    const grau =
        Number(
            correspondencia[2]
        );


    let alteracao = 0;


    for (
        const acidente of acidentes
    ) {

        if (
            acidente === "♯" ||
            acidente === "#"
        ) {

            alteracao += 1;

        }

        else if (
            acidente === "♭" ||
            acidente === "b"
        ) {

            alteracao -= 1;

        }

    }


    return {

        grau: grau,

        indiceLetra: grau - 1,

        alteracao: alteracao

    };

}


// ======================================================
// CONVERTER FÓRMULA EM SEMITONS
// ======================================================

function formulaParaSemitons(token) {

    const dados =
        analisarFormula(token);


    if (!dados) {

        return undefined;

    }


    const semitonsDiatonicos = {

    1: 0,
    2: 2,
    3: 4,
    4: 5,
    5: 7,
    6: 9,
    7: 11

};


    const base =
    semitonsDiatonicos[
        dados.grau
    ];


    return (
        base +
        dados.alteracao +
        12
    ) % 12;

}


// ======================================================
// CONVERTER NOTA MUSICAL PARA ALTURA
// ======================================================

function obterValorNotaMusical(nota) {

    if (
        typeof nota !== "string" ||
        nota.length === 0
    ) {

        return undefined;

    }


    const correspondencia =
        nota.match(
            /^([A-G])([#b]*)$/
        );


    if (!correspondencia) {

        return undefined;

    }


    const letra =
        correspondencia[1];


    const acidentes =
        correspondencia[2] || "";


    let valor =
        valoresNaturais[letra];


    for (
        const acidente of acidentes
    ) {

        if (acidente === "#") {

            valor += 1;

        }

        else if (
            acidente === "b"
        ) {

            valor -= 1;

        }

    }


    return (
        (valor % 12) + 12
    ) % 12;

}


// ======================================================
// LETRA DA TÔNICA
// ======================================================

function obterLetraTonica(nota) {

    return nota.charAt(0);

}


// ======================================================
// GERAR UMA NOTA GRAFADA
// ======================================================

function gerarNotaGrafada(
    notaTonica,
    token
) {

    const dados =
        analisarFormula(token);


    if (!dados) {

        return "";

    }


    const letraTonica =
        obterLetraTonica(
            notaTonica
        );


    const indiceLetraTonica =
        letras.indexOf(
            letraTonica
        );


    const valorTonica =
        obterValorNotaMusical(
            notaTonica
        );


    if (
        indiceLetraTonica === -1 ||
        valorTonica === undefined
    ) {

        return "";

    }


    // --------------------------------------------------
    // Letra natural determinada pelo grau
    // --------------------------------------------------

    const indiceLetra =
        (
            indiceLetraTonica +
            dados.indiceLetra
        ) % 7;


    const letra =
        letras[indiceLetra];


    // --------------------------------------------------
    // Altura que a fórmula exige
    // --------------------------------------------------

    const valorEsperado =
        (
            valorTonica +
            formulaParaSemitons(token)
        ) % 12;


    const valorNatural =
        valoresNaturais[letra];


    // --------------------------------------------------
    // Descobrir quantos acidentes a letra precisa
    // --------------------------------------------------

    let diferenca =
        valorEsperado -
        valorNatural;


    // Escolher a representação equivalente mais curta.
    while (
        diferenca > 6
    ) {

        diferenca -= 12;

    }


    while (
        diferenca < -6
    ) {

        diferenca += 12;

    }


    if (
        diferenca === 0
    ) {

        return letra;

    }


    if (
        diferenca > 0
    ) {

        return (
            letra +
            "#".repeat(
                diferenca
            )
        );

    }


    return (
        letra +
        "b".repeat(
            Math.abs(
                diferenca
            )
        )
    );

}


// ======================================================
// GERAR ESCALA MUSICAL
// ======================================================

function gerarEscalaMusical(
    notaTonica,
    escalaSelecionada
) {

    if (
        !escalaSelecionada ||
        !Array.isArray(
            escalaSelecionada.formula
        )
    ) {

        return [];

    }


    return escalaSelecionada.formula.map(
        function (token) {

            return gerarNotaGrafada(
                notaTonica,
                token
            );

        }
    );

}


// ======================================================
// OBTER INTERVALOS DA ESCALA
// ======================================================

function obterIntervalosEscala(
    escalaSelecionada
) {

    if (
        !escalaSelecionada ||
        !Array.isArray(
            escalaSelecionada.formula
        )
    ) {

        return [];

    }


    return escalaSelecionada.formula.map(
        function (token) {

            return formulaParaSemitons(
                token
            );

        }
    );

}


// ======================================================
// NOMES DOS INTERVALOS
// ======================================================

function obterNomeIntervalo(
    semitons
) {

    const intervalos = {

        0: "Tônica",
        1: "2ª menor",
        2: "2ª maior",
        3: "3ª menor",
        4: "3ª maior",
        5: "4ª justa",
        6: "4ª aumentada / 5ª diminuta",
        7: "5ª justa",
        8: "6ª menor",
        9: "6ª maior",
        10: "7ª menor",
        11: "7ª maior"

    };


    return (
        intervalos[semitons] ||
        "Intervalo desconhecido"
    );

}


// ======================================================
// CALCULAR DISTÂNCIAS DA ESCALA
// ======================================================

function calcularDistancias(
    intervalos
) {

    if (
        !Array.isArray(intervalos) ||
        intervalos.length === 0
    ) {

        return [];

    }


    const distancias = [];


    for (
        let i = 1;
        i < intervalos.length;
        i++
    ) {

        let distancia =
            intervalos[i] -
            intervalos[i - 1];


        if (
            distancia < 0
        ) {

            distancia += 12;

        }


        distancias.push(
            distancia
        );

    }


    // --------------------------------------------------
    // Fechamento da oitava
    // --------------------------------------------------

    let fechamento =
        12 -
        intervalos[
            intervalos.length - 1
        ];


    if (
        fechamento === 12
    ) {

        fechamento = 0;

    }


    distancias.push(
        fechamento
    );


    return distancias;

}


// ======================================================
// NOME DA ESTRUTURA
// ======================================================

function obterNomeEstrutura(
    distancias
) {

    return distancias.map(
        function (distancia) {

            if (
                distancia === 1
            ) {

                return "ST";

            }

            if (
                distancia === 2
            ) {

                return "T";

            }

            if (
                distancia === 3
            ) {

                return "3ST";

            }

            if (
                distancia === 4
            ) {

                return "4ST";

            }

            if (
                distancia === 5
            ) {

                return "5ST";

            }


            return (
                distancia +
                "ST"
            );

        }
    );

}


// ======================================================
// IDENTIFICAR TRÍADE
// ======================================================

function identificarTriade(
    notasAcorde
) {

    if (
        !Array.isArray(notasAcorde) ||
        notasAcorde.length !== 3
    ) {

        return {

            simbolo: "?",
            qualidade: "Desconhecida"

        };

    }


    const valores =
        notasAcorde.map(
            obterValorNotaMusical
        );


    if (
        valores.some(
            function (valor) {
                return valor === undefined;
            }
        )
    ) {

        return {

            simbolo: "?",
            qualidade: "Desconhecida"

        };

    }


    const raiz =
        valores[0];


    const intervalos =
        valores.map(
            function (
                valor,
                indice
            ) {

                if (
                    indice === 0
                ) {

                    return 0;

                }


                return (
                    valor -
                    raiz +
                    12
                ) % 12;

            }
        );


    const chave =
        intervalos.join(",");


    const estruturas = {

        "0,4,7": {
            simbolo: "",
            qualidade: "Maior"
        },

        "0,3,7": {
            simbolo: "m",
            qualidade: "Menor"
        },

        "0,3,6": {
            simbolo: "dim",
            qualidade: "Diminuto"
        },

        "0,4,8": {
            simbolo: "+",
            qualidade: "Aumentado"
        }

    };


    return (
        estruturas[chave] || {

            simbolo: "?",
            qualidade:
                "Estrutura não catalogada"

        }
    );

}


// ======================================================
// IDENTIFICAR TÉTRADE
// ======================================================

function identificarTetrade(
    notasAcorde
) {

    if (
        !Array.isArray(notasAcorde) ||
        notasAcorde.length !== 4
    ) {

        return {

            simbolo: "?",
            qualidade: "Desconhecida"

        };

    }


    const valores =
        notasAcorde.map(
            obterValorNotaMusical
        );


    if (
        valores.some(
            function (valor) {
                return valor === undefined;
            }
        )
    ) {

        return {

            simbolo: "?",
            qualidade: "Desconhecida"

        };

    }


    const raiz =
        valores[0];


    const intervalos =
        valores.map(
            function (
                valor,
                indice
            ) {

                if (
                    indice === 0
                ) {

                    return 0;

                }


                return (
                    valor -
                    raiz +
                    12
                ) % 12;

            }
        );


    const chave =
        intervalos.join(",");


    const estruturas = {

        "0,4,7,11": {
            simbolo: "maj7",
            qualidade:
                "Maior com 7ª maior"
        },

        "0,3,7,10": {
            simbolo: "m7",
            qualidade:
                "Menor com 7ª menor"
        },

        "0,4,7,10": {
            simbolo: "7",
            qualidade:
                "Dominante"
        },

        "0,3,6,10": {
            simbolo: "m7b5",
            qualidade:
                "Meio-diminuto"
        },

        "0,3,6,9": {
            simbolo: "dim7",
            qualidade:
                "Diminuto"
        },

        "0,3,7,11": {
            simbolo: "mMaj7",
            qualidade:
                "Menor com 7ª maior"
        },

        "0,4,8,11": {
            simbolo: "maj7#5",
            qualidade:
                "Aumentado com 7ª maior"
        },

        "0,4,8,10": {
            simbolo: "7#5",
            qualidade:
                "Aumentado com 7ª menor"
        }

    };


    return (
        estruturas[chave] || {

            simbolo: "?",
            qualidade:
                "Estrutura não catalogada"

        }
    );

}


// ======================================================
// CAMPO HARMÔNICO
// ======================================================

function gerarCampoHarmonico(
    notasEscala
) {

    if (
        !Array.isArray(notasEscala) ||
        notasEscala.length !== 7
    ) {

        return null;

    }


    const grausCampo = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII"
    ];


    const triades =
        grausCampo.map(
            function (
                grau,
                indice
            ) {

                const notasAcorde = [

                    notasEscala[indice],

                    notasEscala[
                        (indice + 2) % 7
                    ],

                    notasEscala[
                        (indice + 4) % 7
                    ]

                ];


                const estrutura =
                    identificarTriade(
                        notasAcorde
                    );


                return {

                    grau: grau,

                    acorde:
                        notasAcorde[0] +
                        estrutura.simbolo,

                    notas:
                        notasAcorde,

                    qualidade:
                        estrutura.qualidade

                };

            }
        );


    const tetrades =
        grausCampo.map(
            function (
                grau,
                indice
            ) {

                const notasAcorde = [

                    notasEscala[indice],

                    notasEscala[
                        (indice + 2) % 7
                    ],

                    notasEscala[
                        (indice + 4) % 7
                    ],

                    notasEscala[
                        (indice + 6) % 7
                    ]

                ];


                const estrutura =
                    identificarTetrade(
                        notasAcorde
                    );


                return {

                    grau: grau,

                    acorde:
                        notasAcorde[0] +
                        estrutura.simbolo,

                    notas:
                        notasAcorde,

                    qualidade:
                        estrutura.qualidade

                };

            }
        );


    return {

        triades: triades,

        tetrades: tetrades

    };

}


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const botao =
    document.getElementById(
        "gerarEscala"
    );


const seletorNota =
    document.getElementById(
        "nota"
    );


const seletorEscala =
    document.getElementById(
        "tipoEscala"
    );


const resultado =
    document.getElementById(
        "resultado"
    );


const bracoViolao =
    document.getElementById(
        "bracoViolao"
    );


// ======================================================
// AFINAÇÃO DO VIOLÃO
// ======================================================

const afinacaoViolao = [
    "E",
    "A",
    "D",
    "G",
    "B",
    "E"
];


const notasPorCasa = 12;


// ======================================================
// OBTER NOTA FÍSICA DA CASA
// ======================================================

function obterNotaPorCasa(
    notaInicial,
    casa
) {

    const valorInicial =
        obterValorNotaMusical(
            notaInicial
        );


    if (
        valorInicial === undefined
    ) {

        return "";

    }


    const valor =
        (
            valorInicial +
            casa
        ) % 12;


    return notasCromaticas[
        valor
    ];

}


// ======================================================
// GERAR BRAÇO DO VIOLÃO
// ======================================================

function gerarBracoViolao(
    notasEscala
) {

    if (!bracoViolao) {

        return;

    }


    const numeroDeCasas =
        notasPorCasa;


    let html = `

        <h3>
            🎸 Braço do violão
        </h3>

        <div class="braco">

            <div class="numeracao-casas">
    `;


    // --------------------------------------------------
    // NUMERAÇÃO DAS CASAS
    // --------------------------------------------------

    for (
        let casa = 0;
        casa <= numeroDeCasas;
        casa++
    ) {

        html += `

            <div class="numero-casa">
                ${casa}
            </div>

        `;

    }


    html += `

            </div>
    `;


    // --------------------------------------------------
    // CORDAS
    // --------------------------------------------------

    afinacaoViolao.forEach(
        function (corda) {

            html += `

                <div class="linha-corda">
            `;


            for (
                let casa = 0;
                casa <= numeroDeCasas;
                casa++
            ) {

                const notaCasa =
                    obterNotaPorCasa(
                        corda,
                        casa
                    );


                const valorCasa =
                    obterValorNotaMusical(
                        notaCasa
                    );


                const notaEscala =
                    notasEscala.find(
                        function (
                            nota
                        ) {

                            return (
                                obterValorNotaMusical(
                                    nota
                                ) ===
                                valorCasa
                            );

                        }
                    );


                const pertenceEscala =
                    notaEscala !== undefined;


                const isTonica =
                    pertenceEscala &&
                    obterValorNotaMusical(
                        notaEscala
                    ) ===
                    obterValorNotaMusical(
                        notasEscala[0]
                    );


                const notaExibida =
                    pertenceEscala
                        ? notaEscala
                        : notaCasa;


                html += `

                    <div
                        class="
                            casa
                            ${
                                pertenceEscala
                                    ? "nota-escala"
                                    : ""
                            }
                            ${
                                isTonica
                                    ? "tonica"
                                    : ""
                            }
                        "
                    >

                        <span class="nome-nota">
                            ${notaExibida}
                        </span>

                    </div>

                `;

            }


            html += `

                </div>

            `;

        }
    );


    html += `

        </div>

    `;


    bracoViolao.innerHTML =
        html;

}


// ======================================================
// VERIFICAÇÃO DOS ELEMENTOS
// ======================================================

if (
    !botao ||
    !seletorNota ||
    !seletorEscala ||
    !resultado
) {

    console.error(
        "Erro: um ou mais elementos do HTML não foram encontrados."
    );

}


// ======================================================
// EVENTO DO BOTÃO
// ======================================================

if (botao) {

    botao.addEventListener(
        "click",
        function () {

            const notaEscolhida =
                seletorNota.value;


            const tipoEscala =
                seletorEscala.value;


            const escalaSelecionada =
                escalas[tipoEscala];


            // ------------------------------------------
            // VALIDAR ESCALA
            // ------------------------------------------

            if (!escalaSelecionada) {

                resultado.textContent =
                    "Escala não encontrada.";

                return;

            }


            // ------------------------------------------
            // GERAR ESCALA
            // ------------------------------------------

            const escala =
                gerarEscalaMusical(
                    notaEscolhida,
                    escalaSelecionada
                );


            if (
                escala.length === 0
            ) {

                resultado.textContent =
                    "Não foi possível gerar a escala.";

                return;

            }


            // ------------------------------------------
            // BRAÇO
            // ------------------------------------------

            gerarBracoViolao(
                escala
            );


            // ------------------------------------------
            // INTERVALOS
            // ------------------------------------------

            const intervalos =
                obterIntervalosEscala(
                    escalaSelecionada
                );


            // ------------------------------------------
            // NOMES DOS INTERVALOS
            // ------------------------------------------

            const nomesDosIntervalos =
                intervalos.map(
                    function (
                        intervalo
                    ) {

                        return obterNomeIntervalo(
                            intervalo
                        );

                    }
                );

            // ======================================================


            // ------------------------------------------
            // ESTRUTURA
            // ------------------------------------------

            const distancias =
                calcularDistancias(
                    intervalos
                );


            const nomesEstrutura =
                obterNomeEstrutura(
                    distancias
                );


            // ------------------------------------------
            // FÓRMULA
            // ------------------------------------------

            const formula =
                escalaSelecionada.formula;


            // ------------------------------------------
            // CAMPO HARMÔNICO
            // ------------------------------------------

            const campoHarmonico =
                gerarCampoHarmonico(
                    escala
                );


            // ------------------------------------------
            // RESULTADO
            // ------------------------------------------

            resultado.innerHTML = `

                <h3>
                    🎵
                    ${notaEscolhida}
                    —
                    ${escalaSelecionada.nome}
                </h3>


                <div class="info-escala">

                    <div class="bloco-resultado">

                        <strong>
                            🎵 Notas
                        </strong>

                        <p>
                            ${
                                escala.join(
                                    " - "
                                )
                            }
                        </p>

                    </div>


                    <div class="bloco-resultado">

                        <strong>
                            📐 Estrutura
                        </strong>

                        <p>
                            ${
                                nomesEstrutura.join(
                                    " - "
                                )
                            }
                        </p>

                    </div>


                    <div class="bloco-resultado">

                        <strong>
                            🧮 Fórmula
                        </strong>

                        <p>
                            ${
                                formula.join(
                                    " - "
                                )
                            }
                        </p>

                    </div>

                </div>


                <div class="tabela-container">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    Grau
                                </th>

                                <th>
                                    Nota
                                </th>

                                <th>
                                    Fórmula
                                </th>

                                <th>
                                    Intervalo desde a tônica
                                </th>

                                <th>
                                    Semitons
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${
                                escala.map(
                                    function (
                                        nota,
                                        indice
                                    ) {

                                        return `

                                            <tr>

                                                <td>
                                                    ${
                                                        indice + 1
                                                    }
                                                </td>

                                                <td>
                                                    ${nota}
                                                </td>

                                                <td>
                                                    ${
                                                        formula[indice]
                                                    }
                                                </td>

                                                <td>
                                                    ${
                                                        nomesDosIntervalos[
                                                            indice
                                                        ]
                                                    }
                                                </td>

                                                <td>
                                                    ${
                                                        intervalos[
                                                            indice
                                                        ]
                                                    }
                                                </td>

                                            </tr>

                                        `;

                                    }
                                ).join("")
                            }

                        </tbody>

                    </table>

                </div>


                ${
                    campoHarmonico
                        ? `

                    <!-- ================================= -->
                    <!-- CAMPO HARMÔNICO — TRÍADES -->
                    <!-- ================================= -->

                    <div class="campo-harmonico">

                        <h3>
                            🎹 Campo Harmônico — Tríades
                        </h3>


                        <div class="tabela-container">

                            <table>

                                <thead>

                                    <tr>

                                        <th>
                                            Grau
                                        </th>

                                        <th>
                                            Acorde
                                        </th>

                                        <th>
                                            Notas
                                        </th>

                                        <th>
                                            Qualidade
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    ${
                                        campoHarmonico.triades.map(
                                            function (
                                                acorde
                                            ) {

                                                return `

                                                    <tr>

                                                        <td>
                                                            ${
                                                                acorde.grau
                                                            }
                                                        </td>

                                                        <td>
                                                            <strong>
                                                                ${
                                                                    acorde.acorde
                                                                }
                                                            </strong>
                                                        </td>

                                                        <td>
                                                            ${
                                                                acorde.notas.join(
                                                                    " - "
                                                                )
                                                            }
                                                        </td>

                                                        <td>
                                                            ${
                                                                acorde.qualidade
                                                            }
                                                        </td>

                                                    </tr>

                                                `;

                                            }
                                        ).join("")
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>


                    <!-- ================================= -->
                    <!-- CAMPO HARMÔNICO — TÉTRADES -->
                    <!-- ================================= -->

                    <div class="campo-harmonico">

                        <h3>
                            🎹 Campo Harmônico — Tétrades
                        </h3>


                        <div class="tabela-container">

                            <table>

                                <thead>

                                    <tr>

                                        <th>
                                            Grau
                                        </th>

                                        <th>
                                            Acorde
                                        </th>

                                        <th>
                                            Notas
                                        </th>

                                        <th>
                                            Qualidade
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    ${
                                        campoHarmonico.tetrades.map(
                                            function (
                                                acorde
                                            ) {

                                                return `

                                                    <tr>

                                                        <td>
                                                            ${
                                                                acorde.grau
                                                            }
                                                        </td>

                                                        <td>
                                                            <strong>
                                                                ${
                                                                    acorde.acorde
                                                                }
                                                            </strong>
                                                        </td>

                                                        <td>
                                                            ${
                                                                acorde.notas.join(
                                                                    " - "
                                                                )
                                                            }
                                                        </td>

                                                        <td>
                                                            ${
                                                                acorde.qualidade
                                                            }
                                                        </td>

                                                    </tr>

                                                `;

                                            }
                                        ).join("")
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                `
                        : ""
                }

            `;

        }
    );

}

// ======================================================
// TESTE DE GRAFIA MUSICAL
// ======================================================

function testarGrafiaMusical(
    tonalidade,
    escalaDefinicao,
    escala
) {

    const letraTonica =
        obterLetraTonica(
            tonalidade
        );


    const indiceTonica =
        letras.indexOf(
            letraTonica
        );


    if (
        indiceTonica === -1
    ) {

        throw new Error(
            "Letra da tônica inválida."
        );

    }


    escalaDefinicao.formula.forEach(
        function (
            token,
            indice
        ) {

            const dados =
                analisarFormula(
                    token
                );


            if (!dados) {

                throw new Error(
                    "Fórmula inválida: " +
                    token
                );

            }


            const indiceLetraEsperada =
                (
                    indiceTonica +
                    dados.indiceLetra
                ) % 7;


            const letraEsperada =
                letras[
                    indiceLetraEsperada
                ];


            const letraGerada =
                escala[indice].charAt(0);


            if (
                letraGerada !==
                letraEsperada
            ) {

                throw new Error(
                    "Grafia incorreta em " +
                    token +
                    ": esperado " +
                    letraEsperada +
                    ", encontrado " +
                    escala[indice]
                );

            }

        }
    );

}

// ======================================================
// TESTE SISTEMÁTICO DO GERADOR
// ======================================================

function executarTestesGerador() {

    console.clear();

    console.group(
        "🎸 CÓDIGO DAS CORDAS — TESTE SISTEMÁTICO"
    );

    const tonalidades = [
        "C",
        "C#",
        "Db",
        "D",
        "D#",
        "Eb",
        "E",
        "F",
        "F#",
        "Gb",
        "G",
        "G#",
        "Ab",
        "A",
        "A#",
        "Bb",
        "B"
    ];

    let totalTestes = 0;
    let totalAprovados = 0;
    let totalErros = 0;

    const erros = [];

    tonalidades.forEach(function (tonalidade) {

        Object.keys(escalas).forEach(function (nomeEscala) {

            totalTestes++;

            const escalaDefinicao =
                escalas[nomeEscala];

            try {

                // ==========================================
                // 1. DEFINIÇÃO
                // ==========================================

                if (
                    !escalaDefinicao ||
                    !Array.isArray(
                        escalaDefinicao.formula
                    )
                ) {
                    throw new Error(
                        "Definição da escala inválida."
                    );
                }


                // ==========================================
                // 2. GERAR ESCALA
                // ==========================================

                const escala =
                    gerarEscalaMusical(
                        tonalidade,
                        escalaDefinicao
                    );


                if (
                    !Array.isArray(escala) ||
                    escala.length === 0
                ) {
                    throw new Error(
                        "Escala vazia."
                    );
                }


                // ==========================================
                // 3. QUANTIDADE
                // ==========================================

                if (
                    escala.length !==
                    escalaDefinicao.formula.length
                ) {
                    throw new Error(
                        "Quantidade de notas diferente da fórmula."
                    );
                }


                // ==========================================
                // 4. NOTAS VÁLIDAS
                // ==========================================

                escala.forEach(function (nota) {

                    if (
                        typeof nota !== "string" ||
                        nota.length === 0
                    ) {
                        throw new Error(
                            "Existe uma nota vazia."
                        );
                    }


                    if (
                        obterValorNotaMusical(nota) ===
                        undefined
                    ) {
                        throw new Error(
                            "Nota inválida: " + nota
                        );
                    }

                });


                // ==========================================
                // 5. TÔNICA
                // ==========================================

                const valorTonica =
                    obterValorNotaMusical(
                        tonalidade
                    );

                const valorPrimeiraNota =
                    obterValorNotaMusical(
                        escala[0]
                    );


                if (
                    valorTonica !==
                    valorPrimeiraNota
                ) {
                    throw new Error(
                        "A primeira nota não é a tônica."
                    );
                }


                // ==========================================
                // 6. CONFERIR TODAS AS FÓRMULAS
                // ==========================================

                escalaDefinicao.formula.forEach(
                    function (
                        token,
                        indice
                    ) {

                        const intervalo =
                            formulaParaSemitons(
                                token
                            );


                        if (
                            intervalo === undefined
                        ) {
                            throw new Error(
                                "Fórmula inválida: " +
                                token
                            );
                        }


                        const valorNota =
                            obterValorNotaMusical(
                                escala[indice]
                            );


                        const alturaEsperada =
                            (
                                valorTonica +
                                intervalo
                            ) % 12;


                        if (
                            valorNota !==
                            alturaEsperada
                        ) {
                            throw new Error(
                                "Altura incorreta em " +
                                token +
                                ": " +
                                escala[indice]
                            );
                        }

                    }
                );


                // ==========================================
                // 7. INTERVALOS
                // ==========================================

                const intervalos =
                    obterIntervalosEscala(
                        escalaDefinicao
                    );


                if (
                    intervalos.length !==
                    escalaDefinicao.formula.length
                ) {
                    throw new Error(
                        "Quantidade de intervalos incorreta."
                    );
                }

                // ==========================================
// 7B. VERIFICAR GRAFIA MUSICAL
// ==========================================

testarGrafiaMusical(
    tonalidade,
    escalaDefinicao,
    escala
);


                // ==========================================
                // 8. ESTRUTURA
                // ==========================================

                const distancias =
                    calcularDistancias(
                        intervalos
                    );


                if (
                    distancias.length !==
                    escala.length
                ) {
                    throw new Error(
                        "Quantidade de distâncias incorreta."
                    );
                }


                // ==========================================
                // 9. FECHAMENTO DA OITAVA
                // ==========================================

                const soma =
                    distancias.reduce(
                        function (
                            total,
                            valor
                        ) {

                            return total + valor;

                        },
                        0
                    );


                if (
                    soma !== 12
                ) {
                    throw new Error(
                        "A estrutura não fecha 12 semitons. Soma = " +
                        soma
                    );
                }


                // ==========================================
                // 10. CAMPO HARMÔNICO
                // ==========================================

                if (
                    escala.length === 7
                ) {

                    const campo =
                        gerarCampoHarmonico(
                            escala
                        );


                    if (!campo) {
                        throw new Error(
                            "Campo harmônico não foi gerado."
                        );
                    }


                    if (
                        !Array.isArray(campo.triades) ||
                        campo.triades.length !== 7
                    ) {
                        throw new Error(
                            "Campo harmônico de tríades inválido."
                        );
                    }


                    if (
                        !Array.isArray(campo.tetrades) ||
                        campo.tetrades.length !== 7
                    ) {
                        throw new Error(
                            "Campo harmônico de tétrades inválido."
                        );
                    }


                    // --------------------------------------
                    // Verificar tríades
                    // --------------------------------------

                    campo.triades.forEach(
                        function (acorde) {

                            if (
                                !acorde.acorde ||
                                acorde.acorde.includes("?")
                            ) {
                                throw new Error(
                                    "Tríade não identificada no grau " +
                                    acorde.grau
                                );
                            }


                            if (
                                !acorde.qualidade ||
                                acorde.qualidade ===
                                "Estrutura não catalogada" ||
                                acorde.qualidade ===
                                "Desconhecida"
                            ) {
                                throw new Error(
                                    "Qualidade de tríade inválida no grau " +
                                    acorde.grau
                                );
                            }

                        }
                    );


                    // --------------------------------------
                    // Verificar tétrades
                    // --------------------------------------

                    campo.tetrades.forEach(
                        function (acorde) {

                            if (
                                !acorde.acorde ||
                                acorde.acorde.includes("?")
                            ) {
                                throw new Error(
                                    "Tétrade não identificada no grau " +
                                    acorde.grau
                                );
                            }


                            if (
                                !acorde.qualidade ||
                                acorde.qualidade ===
                                "Estrutura não catalogada" ||
                                acorde.qualidade ===
                                "Desconhecida"
                            ) {
                                throw new Error(
                                    "Qualidade de tétrade inválida no grau " +
                                    acorde.grau
                                );
                            }

                        }
                    );

                }


                // ==========================================
                // APROVADO
                // ==========================================

                totalAprovados++;

                console.log(
                    "✅",
                    tonalidade,
                    "—",
                    escalaDefinicao.nome
                );

            }

            catch (erro) {

                totalErros++;

                const registro = {

                    tonalidade:
                        tonalidade,

                    escala:
                        escalaDefinicao.nome,

                    erro:
                        erro.message

                };


                erros.push(
                    registro
                );


                console.error(
                    "❌",
                    tonalidade,
                    "—",
                    escalaDefinicao.nome,
                    "→",
                    erro.message
                );

            }

        });

    });


    // ==================================================
    // RESUMO
    // ==================================================

    console.log("");

    console.log(
        "=============================================="
    );

    console.log(
        "TESTE SISTEMÁTICO FINALIZADO"
    );

    console.log(
        "=============================================="
    );

    console.log(
        "Total de testes:",
        totalTestes
    );

    console.log(
        "Aprovados:",
        totalAprovados
    );

    console.log(
        "Erros:",
        totalErros
    );

    console.log(
        "=============================================="
    );


    if (
        totalErros === 0
    ) {

        console.log(
            "🎉 TODOS OS TESTES PASSARAM!"
        );

    }

    else {

        console.warn(
            "⚠️ FORAM ENCONTRADOS ERROS."
        );

        console.table(
            erros
        );

    }


    console.groupEnd();


    return {

        totalTestes:
            totalTestes,

        totalAprovados:
            totalAprovados,

        totalErros:
            totalErros,

        erros:
            erros

    };

}


// ======================================================
// EXECUTAR TESTE
// ======================================================

executarTestesGerador();

