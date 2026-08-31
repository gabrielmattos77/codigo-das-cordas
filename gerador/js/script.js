// ======================================================
// NOTAS CROMÁTICAS
// ======================================================

const notasCromaticas = [
    "C", "C#", "D", "D#", "E", "F",
    "F#", "G", "G#", "A", "A#", "B"
];


// ======================================================
// VALORES DAS NOTAS
// ======================================================

const valoresNotas = {

    "C": 0,

    "C#": 1,
    "Db": 1,

    "D": 2,

    "D#": 3,
    "Eb": 3,

    "E": 4,

    "F": 5,

    "F#": 6,
    "Gb": 6,

    "G": 7,

    "G#": 8,
    "Ab": 8,

    "A": 9,

    "A#": 10,
    "Bb": 10,

    "B": 11
};


// ======================================================
// ESCALAS
// ======================================================

const escalas = {

    maior: {
        nome: "Maior",
        intervalos: [0, 2, 4, 5, 7, 9, 11],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    menorNatural: {
        nome: "Menor natural",
        intervalos: [0, 2, 3, 5, 7, 8, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    menorHarmonica: {
        nome: "Menor harmônica",
        intervalos: [0, 2, 3, 5, 7, 8, 11],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    menorMelodica: {
        nome: "Menor melódica",
        intervalos: [0, 2, 3, 5, 7, 9, 11],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    jonio: {
        nome: "Jônio",
        intervalos: [0, 2, 4, 5, 7, 9, 11],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    dorico: {
        nome: "Dórico",
        intervalos: [0, 2, 3, 5, 7, 9, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    frigio: {
        nome: "Frígio",
        intervalos: [0, 1, 3, 5, 7, 8, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    lidio: {
        nome: "Lídio",
        intervalos: [0, 2, 4, 6, 7, 9, 11],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    mixolidio: {
        nome: "Mixolídio",
        intervalos: [0, 2, 4, 5, 7, 9, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    eolio: {
        nome: "Eólio",
        intervalos: [0, 2, 3, 5, 7, 8, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    locrio: {
        nome: "Lócrio",
        intervalos: [0, 1, 3, 5, 6, 8, 10],
        graus: [0, 1, 2, 3, 4, 5, 6]
    },

    pentatonicaMaior: {
        nome: "Pentatônica maior",
        intervalos: [0, 2, 4, 7, 9],
        graus: [0, 1, 2, 4, 5]
    },

    pentatonicaMenor: {
        nome: "Pentatônica menor",
        intervalos: [0, 3, 5, 7, 10],
        graus: [0, 2, 3, 4, 6]
    },

    bluesMaior: {
        nome: "Blues maior",
        intervalos: [0, 2, 3, 4, 7, 9],
        graus: [0, 1, 2, 2, 4, 5]
    },

    bluesMenor: {
        nome: "Blues menor",
        intervalos: [0, 3, 5, 6, 7, 10],
        graus: [0, 2, 3, 3, 4, 6]
    },

    cromatica: {
        nome: "Cromática",
        intervalos: [
            0, 1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 11
        ]
    },

    tonsInteiros: {
        nome: "Tons inteiros (Hexafônica)",
        intervalos: [0, 2, 4, 6, 8, 10]
    },

    diminutaTomSemitom: {
        nome: "Diminuta Tom–Semitom",
        intervalos: [
            0, 2, 3, 5,
            6, 8, 9, 11
        ]
    },

    diminutaSemitomTom: {
        nome: "Diminuta Semitom–Tom",
        intervalos: [
            0, 1, 3, 4,
            6, 7, 9, 10
        ]
    },

    meioDiminuta: {
        nome: "Meio-diminuta",
        intervalos: [
            0, 2, 3, 5,
            6, 8, 10
        ],
        graus: [0, 1, 2, 3, 4, 5, 6]
    }

};


// ======================================================
// FÓRMULAS MUSICAIS
// ======================================================

const formulas = {

    maior: [
        "1", "2", "3", "4", "5", "6", "7"
    ],

    menorNatural: [
        "1", "2", "♭3", "4",
        "5", "♭6", "♭7"
    ],

    menorHarmonica: [
        "1", "2", "♭3", "4",
        "5", "♭6", "7"
    ],

    menorMelodica: [
        "1", "2", "♭3", "4",
        "5", "6", "7"
    ],

    jonio: [
        "1", "2", "3", "4",
        "5", "6", "7"
    ],

    dorico: [
        "1", "2", "♭3", "4",
        "5", "6", "♭7"
    ],

    frigio: [
        "1", "♭2", "♭3", "4",
        "5", "♭6", "♭7"
    ],

    lidio: [
        "1", "2", "3", "♯4",
        "5", "6", "7"
    ],

    mixolidio: [
        "1", "2", "3", "4",
        "5", "6", "♭7"
    ],

    eolio: [
        "1", "2", "♭3", "4",
        "5", "♭6", "♭7"
    ],

    locrio: [
        "1", "♭2", "♭3", "4",
        "♭5", "♭6", "♭7"
    ],

    pentatonicaMaior: [
        "1", "2", "3", "5", "6"
    ],

    pentatonicaMenor: [
        "1", "♭3", "4", "5", "♭7"
    ],

    bluesMaior: [
        "1", "2", "♭3", "3", "5", "6"
    ],

    bluesMenor: [
        "1", "♭3", "4", "♭5", "5", "♭7"
    ],

    cromatica: [
        "1", "♭2", "2", "♭3",
        "3", "4", "♯4", "5",
        "♭6", "6", "♭7", "7"
    ],

    tonsInteiros: [
        "1", "2", "3", "♯4",
        "♯5", "♭7"
    ],

    diminutaTomSemitom: [
        "1", "2", "♭3", "4",
        "♭5", "♯5", "6", "7"
    ],

    diminutaSemitomTom: [
        "1", "♭2", "♭3", "♭4",
        "♭5", "♭6", "6", "7"
    ],

    meioDiminuta: [
        "1", "2", "♭3", "4",
        "♭5", "♭6", "♭7"
    ]

};


// ======================================================
// LETRAS MUSICAIS
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
// OBTER LETRA DA TÔNICA
// ======================================================

function obterLetraTonica(nota) {

    return nota
        .replace("#", "")
        .replace("b", "");

}


// ======================================================
// GERAR NOTA GRAFADA
// ======================================================

function gerarNotaGrafada(
    notaTonica,
    intervalo,
    grau
) {

    const letraTonica =
        obterLetraTonica(notaTonica);

    const indiceLetraTonica =
        letras.indexOf(letraTonica);

    if (indiceLetraTonica === -1) {

        const valor =
            (
                valoresNotas[notaTonica] +
                intervalo
            ) % 12;

        return notasCromaticas[valor];

    }


    const indiceLetra =
        (
            indiceLetraTonica +
            grau
        ) % 7;


    const letra =
        letras[indiceLetra];


    const valorEsperado =
        (
            valoresNotas[notaTonica] +
            intervalo
        ) % 12;


    const valorNatural =
        valoresNaturais[letra];


    let diferenca =
        valorEsperado -
        valorNatural;


    if (diferenca > 6) {
        diferenca -= 12;
    }


    if (diferenca < -6) {
        diferenca += 12;
    }


    if (diferenca === 0) {
        return letra;
    }


    if (diferenca === 1) {
        return letra + "#";
    }


    if (diferenca === 2) {
        return letra + "##";
    }


    if (diferenca === -1) {
        return letra + "b";
    }


    if (diferenca === -2) {
        return letra + "bb";
    }


    return letra;

}


// ======================================================
// NOMES DOS INTERVALOS
// ======================================================

function obterNomeIntervalo(semitons) {

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


    return intervalos[semitons] ||
        "Intervalo desconhecido";

}


// ======================================================
// DISTÂNCIA ENTRE NOTAS
// ======================================================

function calcularDistancias(intervalos) {

    const distancias = [];


    for (
        let i = 1;
        i < intervalos.length;
        i++
    ) {

        const distancia =
            intervalos[i] -
            intervalos[i - 1];


        distancias.push(distancia);

    }


    return distancias;

}


// ======================================================
// NOME DA ESTRUTURA
// ======================================================

function obterNomeEstrutura(distancias) {

    return distancias.map(
        function (distancia) {

            if (distancia === 1) {
                return "ST";
            }

            if (distancia === 2) {
                return "T";
            }

            if (distancia === 3) {
                return "3ST";
            }

            if (distancia === 4) {
                return "4ST";
            }

            if (distancia === 5) {
                return "5ST";
            }

            return distancia + "ST";

        }
    );

}


// ======================================================
// CAMPO HARMÔNICO
// ======================================================

function gerarCampoHarmonico(
    notasEscala,
    tipoEscala
) {

    // Campo harmônico diatônico:
    // somente escalas de 7 notas.

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


    // ==================================================
    // QUALIDADES DAS TRÍADES
    // ==================================================

    const qualidadesTriades = {

        maior: [
            "Maior",
            "Menor",
            "Menor",
            "Maior",
            "Maior",
            "Menor",
            "Diminuto"
        ],

        jonio: [
            "Maior",
            "Menor",
            "Menor",
            "Maior",
            "Maior",
            "Menor",
            "Diminuto"
        ],

        dorico: [
            "Menor",
            "Menor",
            "Maior",
            "Maior",
            "Menor",
            "Diminuto",
            "Maior"
        ],

        frigio: [
            "Menor",
            "Maior",
            "Maior",
            "Menor",
            "Diminuto",
            "Maior",
            "Menor"
        ],

        lidio: [
            "Maior",
            "Maior",
            "Menor",
            "Diminuto",
            "Maior",
            "Menor",
            "Menor"
        ],

        mixolidio: [
            "Maior",
            "Menor",
            "Diminuto",
            "Maior",
            "Menor",
            "Menor",
            "Maior"
        ],

        eolio: [
            "Menor",
            "Diminuto",
            "Maior",
            "Menor",
            "Menor",
            "Maior",
            "Maior"
        ],

        menorNatural: [
            "Menor",
            "Diminuto",
            "Maior",
            "Menor",
            "Menor",
            "Maior",
            "Maior"
        ],

        locrio: [
            "Diminuto",
            "Maior",
            "Menor",
            "Menor",
            "Maior",
            "Maior",
            "Menor"
        ],

        menorHarmonica: [
            "Menor",
            "Diminuto",
            "Aumentado",
            "Menor",
            "Maior",
            "Maior",
            "Diminuto"
        ],

        menorMelodica: [
            "Menor",
            "Menor",
            "Aumentado",
            "Maior",
            "Maior",
            "Diminuto",
            "Diminuto"
        ]

    };


    // ==================================================
    // SÍMBOLOS DAS TRÍADES
    // ==================================================

    const simbolosTriades = {

        maior: [
            "",
            "m",
            "m",
            "",
            "",
            "m",
            "dim"
        ],

        jonio: [
            "",
            "m",
            "m",
            "",
            "",
            "m",
            "dim"
        ],

        dorico: [
            "m",
            "m",
            "",
            "",
            "m",
            "dim",
            ""
        ],

        frigio: [
            "m",
            "",
            "",
            "m",
            "dim",
            "",
            "m"
        ],

        lidio: [
            "",
            "",
            "m",
            "dim",
            "",
            "m",
            "m"
        ],

        mixolidio: [
            "",
            "m",
            "dim",
            "",
            "m",
            "m",
            ""
        ],

        eolio: [
            "m",
            "dim",
            "",
            "m",
            "m",
            "",
            ""
        ],

        menorNatural: [
            "m",
            "dim",
            "",
            "m",
            "m",
            "",
            ""
        ],

        locrio: [
            "dim",
            "",
            "m",
            "m",
            "",
            "",
            "m"
        ],

        menorHarmonica: [
            "m",
            "dim",
            "+",
            "m",
            "",
            "",
            "dim"
        ],

        menorMelodica: [
            "m",
            "m",
            "+",
            "",
            "",
            "dim",
            "dim"
        ]

    };


    // ==================================================
    // QUALIDADES DAS TÉTRADES
    // ==================================================

    const qualidadesTetrades = {

        maior: [
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto"
        ],

        jonio: [
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto"
        ],

        dorico: [
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior"
        ],

        frigio: [
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor"
        ],

        lidio: [
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor"
        ],

        mixolidio: [
            "Dominante",
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior"
        ],

        eolio: [
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante"
        ],

        menorNatural: [
            "Menor com 7ª menor",
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante"
        ],

        locrio: [
            "Meio-diminuto",
            "Maior com 7ª maior",
            "Menor com 7ª menor",
            "Menor com 7ª menor",
            "Maior com 7ª maior",
            "Dominante",
            "Menor com 7ª menor"
        ],

        menorHarmonica: [
            "Menor com 7ª maior",
            "Meio-diminuto",
            "Aumentado com 7ª maior",
            "Menor com 7ª menor",
            "Dominante",
            "Maior com 7ª maior",
            "Diminuto"
        ],

        menorMelodica: [
            "Menor com 7ª maior",
            "Menor com 7ª menor",
            "Aumentado com 7ª maior",
            "Dominante",
            "Dominante",
            "Meio-diminuto",
            "Meio-diminuto"
        ]

    };


    // ==================================================
    // SÍMBOLOS DAS TÉTRADES
    // ==================================================

    const simbolosTetrades = {

        maior: [
            "maj7",
            "m7",
            "m7",
            "maj7",
            "7",
            "m7",
            "m7b5"
        ],

        jonio: [
            "maj7",
            "m7",
            "m7",
            "maj7",
            "7",
            "m7",
            "m7b5"
        ],

        dorico: [
            "m7",
            "m7",
            "maj7",
            "7",
            "m7",
            "m7b5",
            "maj7"
        ],

        frigio: [
            "m7",
            "maj7",
            "7",
            "m7",
            "m7b5",
            "maj7",
            "m7"
        ],

        lidio: [
            "maj7",
            "7",
            "m7",
            "m7b5",
            "maj7",
            "m7",
            "m7"
        ],

        mixolidio: [
            "7",
            "m7",
            "m7b5",
            "maj7",
            "m7",
            "m7",
            "maj7"
        ],

        eolio: [
            "m7",
            "m7b5",
            "maj7",
            "m7",
            "m7",
            "maj7",
            "7"
        ],

        menorNatural: [
            "m7",
            "m7b5",
            "maj7",
            "m7",
            "m7",
            "maj7",
            "7"
        ],

        locrio: [
            "m7b5",
            "maj7",
            "m7",
            "m7",
            "maj7",
            "7",
            "m7"
        ],

        menorHarmonica: [
            "mMaj7",
            "m7b5",
            "maj7#5",
            "m7",
            "7",
            "maj7",
            "dim7"
        ],

        menorMelodica: [
            "mMaj7",
            "m7",
            "maj7#5",
            "7",
            "7",
            "m7b5",
            "m7b5"
        ]

    };


    // ==================================================
    // VERIFICAR HARMONIZAÇÃO
    // ==================================================

    const qualidadesTriade =
        qualidadesTriades[tipoEscala];

    const simbolosTriade =
        simbolosTriades[tipoEscala];

    const qualidadesTetrade =
        qualidadesTetrades[tipoEscala];

    const simbolosTetrade =
        simbolosTetrades[tipoEscala];


    if (
        !qualidadesTriade ||
        !simbolosTriade ||
        !qualidadesTetrade ||
        !simbolosTetrade
    ) {

        return null;

    }


    // ==================================================
    // TRÍADES
    // ==================================================

    const triadesResultado =
        grausCampo.map(
            function (grau, indice) {

                const notasAcorde = [

                    notasEscala[indice],

                    notasEscala[
                        (indice + 2) % 7
                    ],

                    notasEscala[
                        (indice + 4) % 7
                    ]

                ];


                return {

                    grau: grau,

                    acorde:
                        notasAcorde[0] +
                        simbolosTriade[indice],

                    notas: notasAcorde,

                    qualidade:
                        qualidadesTriade[indice]

                };

            }
        );


    // ==================================================
    // TÉTRADES
    // ==================================================

    const tetradesResultado =
        grausCampo.map(
            function (grau, indice) {

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


                return {

                    grau: grau,

                    acorde:
                        notasAcorde[0] +
                        simbolosTetrade[indice],

                    notas: notasAcorde,

                    qualidade:
                        qualidadesTetrade[indice]

                };

            }
        );


    return {

        triades: triadesResultado,

        tetrades: tetradesResultado

    };

}


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const botao =
    document.getElementById("gerarEscala");

const seletorNota =
    document.getElementById("nota");

const seletorEscala =
    document.getElementById("tipoEscala");

const resultado =
    document.getElementById("resultado");

const bracoViolao =
    document.getElementById("bracoViolao");


// ======================================================
// BRAÇO DO VIOLÃO
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
// OBTER NOTA POR CASA
// ======================================================

function obterNotaPorCasa(
    notaInicial,
    casa
) {

    const valorInicial =
        valoresNotas[notaInicial];


    const valor =
        (
            valorInicial +
            casa
        ) % 12;


    return notasCromaticas[valor];

}


// ======================================================
// GERAR BRAÇO DO VIOLÃO
// ======================================================

function gerarBracoViolao(notasEscala) {

    if (!bracoViolao) {
        return;
    }


    let html = `

        <h3>
            🎸 Braço do violão
        </h3>

        <div class="braco">

    `;


    afinacaoViolao.forEach(
        function (corda) {

            html += `

                <div class="linha-corda">

                    <div class="nome-corda">
                        ${corda}
                    </div>

            `;


            for (
                let casa = 0;
                casa <= notasPorCasa;
                casa++
            ) {

                const nota =
                    obterNotaPorCasa(
                        corda,
                        casa
                    );


                const destaque =
                    notasEscala.includes(nota);


                html += `

                    <div
                        class="casa ${destaque ? "nota-escala" : ""}"
                    >
                        ${nota}
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


    bracoViolao.innerHTML = html;

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
// GERAR ESCALA
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


            // ==========================================
            // VERIFICAR ESCALA
            // ==========================================

            if (!escalaSelecionada) {

                resultado.textContent =
                    "Escala não encontrada.";

                return;

            }


            // ==========================================
            // GERAR NOTAS
            // ==========================================

            const escala =
                escalaSelecionada.intervalos.map(
                    function (intervalo, indice) {

                        if (
                            escalaSelecionada.graus &&
                            escalaSelecionada.graus[indice] !== undefined
                        ) {

                            return gerarNotaGrafada(

                                notaEscolhida,

                                intervalo,

                                escalaSelecionada.graus[indice]

                            );

                        }


                        const valor =
                            (
                                valoresNotas[notaEscolhida] +
                                intervalo
                            ) % 12;


                        return notasCromaticas[valor];

                    }
                );


            // ==========================================
            // BRAÇO DO VIOLÃO
            // ==========================================

            gerarBracoViolao(escala);


            // ==========================================
            // GRAUS
            // ==========================================

            const nomesGraus = [

                "I",
                "II",
                "III",
                "IV",
                "V",
                "VI",
                "VII",
                "VIII",
                "IX",
                "X",
                "XI",
                "XII"

            ];


            const graus =
                escala.map(
                    function (_, indice) {

                        return nomesGraus[indice];

                    }
                );


            // ==========================================
            // NOMES DOS INTERVALOS
            // ==========================================

            const nomesDosIntervalos =
                escalaSelecionada.intervalos.map(
                    function (intervalo) {

                        return obterNomeIntervalo(
                            intervalo
                        );

                    }
                );


            // ==========================================
            // FÓRMULA
            // ==========================================

            const formula =
                formulas[tipoEscala] || [];


            // ==========================================
            // DISTÂNCIAS
            // ==========================================

            const distancias =
                calcularDistancias(
                    escalaSelecionada.intervalos
                );


            // ==========================================
            // ESTRUTURA
            // ==========================================

            const nomesIntervalos =
                obterNomeEstrutura(
                    distancias
                );


            // ==========================================
            // CAMPO HARMÔNICO
            // ==========================================

            const campoHarmonico =
                gerarCampoHarmonico(
                    escala,
                    tipoEscala
                );


            // ==========================================
            // RESULTADO
            // ==========================================

            resultado.innerHTML = `

                <h3>
                    🎵 ${notaEscolhida} — ${escalaSelecionada.nome}
                </h3>


                <div class="info-escala">

                    <div class="bloco-resultado">

                        <strong>
                            🎵 Notas
                        </strong>

                        <p>
                            ${escala.join(" - ")}
                        </p>

                    </div>


                    <div class="bloco-resultado">

                        <strong>
                            📐 Estrutura
                        </strong>

                        <p>
                            ${nomesIntervalos.join(" - ")}
                        </p>

                    </div>


                    <div class="bloco-resultado">

                        <strong>
                            🧮 Fórmula
                        </strong>

                        <p>
                            ${formula.join(" - ")}
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

                            ${escala.map(
                                function (nota, indice) {

                                    return `

                                        <tr>

                                            <td>
                                                ${graus[indice]}
                                            </td>

                                            <td>
                                                ${nota}
                                            </td>

                                            <td>
                                                ${formula[indice] || "-"}
                                            </td>

                                            <td>
                                                ${nomesDosIntervalos[indice]}
                                            </td>

                                            <td>
                                                ${escalaSelecionada.intervalos[indice]}
                                            </td>

                                        </tr>

                                    `;

                                }
                            ).join("")}

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

                                    ${campoHarmonico.triades.map(
                                        function (acorde) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${acorde.grau}
                                                    </td>

                                                    <td>
                                                        <strong>
                                                            ${acorde.acorde}
                                                        </strong>
                                                    </td>

                                                    <td>
                                                        ${acorde.notas.join(" - ")}
                                                    </td>

                                                    <td>
                                                        ${acorde.qualidade}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")}

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

                                    ${campoHarmonico.tetrades.map(
                                        function (acorde) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${acorde.grau}
                                                    </td>

                                                    <td>
                                                        <strong>
                                                            ${acorde.acorde}
                                                        </strong>
                                                    </td>

                                                    <td>
                                                        ${acorde.notas.join(" - ")}
                                                    </td>

                                                    <td>
                                                        ${acorde.qualidade}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")}

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
