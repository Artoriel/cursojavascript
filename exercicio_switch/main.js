function getDiaDaSemana(num) {
    let texto;
    switch (num) {
        case 0:
            texto = 'Domingo';
            return texto;
        case 1:
            texto = 'Segunda';
            return texto;
        case 2:
            texto = 'Terça';
            return texto;
        case 3:
            texto = 'Quarta';
            return texto;
        case 4:
            texto = 'Quinta';
            return texto;
        case 5:
            texto = 'Sexta';
            return texto;
        case 6:
            texto = 'Sábado'
            return texto;
        default:
            texto = ''
            return texto;
    }
}


function getMes(num) {
    let texto;
    const textomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    switch (num) {
        case 1:
            texto = textomes[0];
            return texto;
        case 2:
            texto = textomes[1];
            return texto;
        case 3:
            texto = textomes[2];
            return texto;
        case 3:
            texto = textomes[3];
            return texto;
        case 4:
            texto = textomes[4];
            return texto;
        case 5:
            texto = textomes[5];
            return texto;
        case 6:
            texto = textomes[6];
            return texto;
        case 7:
            texto = textomes[7];
            return texto;
        case 8:
            texto = textomes[8];
            return texto;
        case 9:
            texto = textomes[9];
            return texto;
            texto = textomes[10];
            return texto;
        case 11:
            texto = textomes[11];
            return texto;
    }
}


function checaHora(num){
    const dataformatada = num < 10 ? `0${num}` : num;
    return dataformatada;
}


function formataData(data) {
    let dia = data.getDate();
    let diaSemana = getDiaDaSemana(data.getDay());
    let mes = getMes(data.getMonth() - 1);
    let ano = data.getFullYear();
    let hora = checaHora(data.getHours());
    let min = checaHora(data.getMinutes());

    return `${diaSemana}, ${dia} de ${mes} de ${ano} as ${hora}:${min}`;

}


const resultado = document.querySelector('.resultado');
let data = new Date();

let dataFormata = formataData(data);
resultado.innerHTML += `${dataFormata}`;
// resultado.innerhtml = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
