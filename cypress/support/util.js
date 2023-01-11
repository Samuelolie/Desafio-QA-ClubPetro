function gera_random(n) {
    var ranNum = Math.round(Math.random() * n);
    return ranNum;
}

function mod(dividendo, divisor) {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
}

export function gerarCnpj(comPonto) {
    let n = 9;
    let n1 = gera_random(n);
    let n2 = gera_random(n);
    let n3 = gera_random(n);
    let n4 = gera_random(n);
    let n5 = gera_random(n);
    let n6 = gera_random(n);
    let n7 = gera_random(n);
    let n8 = gera_random(n);
    let n9 = 0;//gera_random(n);
    let n10 = 0;//gera_random(n);
    let n11 = 0;//gera_random(n);    
    let n12 = 1;//gera_random(n);        
    let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    d1 = 11 - (mod(d1, 11));
    if (d1 >= 10) d1 = 0;
    let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    d2 = 11 - (mod(d2, 11));
    if (d2 >= 10) d2 = 0;

    if (comPonto)
        return '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2;
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;
}

function capsPrimeiraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function numeroInteiro(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function gerarNome() {
    var name1 = ["alisha", "adrian", "madalena", "lúcia", "samuel", "enzo", "pedro", "thiago", "luiz", "jorge", "carlos", "ana", "ana", "adriana",
        "rogerio", "maria", "jasmine", "pietra", "sophia", "edgar", "jesus", "davi", "walver"];

    var name2 = ["morão", "fonseca", "sardo", "pinto", "oliveira", "bastos", "carvalho", "vargas", "nogueira", "modesto", "coutinho", "parracho",
        "mangueira", "rosa", "igrejas", "carmo", "carreira", "rodrigues", "fernandes", "cardoso"];

    var name = capsPrimeiraLetra(name1[numeroInteiro(0, name1.length + 1)]) + ' ' + capsPrimeiraLetra(name2[numeroInteiro(0, name2.length + 1)]);
    return name;

}

function numeroRandomico() {
    return parseInt(Math.random() * 1000000);
};

export function gerarEmail() {
    return (
        "teste.automatizado." +
        numeroRandomico() +
        "@test.com"
    );
};

export function gerarSequenciaNumero(n) {
    var numbers = '0123456789';
    var random = '';
    for (var i = 0; i < n; i++) {
        var rnum = Math.floor(Math.random() * numbers.length);
        random += numbers.substring(rnum, rnum + 1);
    }
    return random;
}

export function dddValidos() {

    const dddValidos = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99]

    const numero = Math.floor(Math.random() * dddValidos.length);

    return dddValidos[numero]
}