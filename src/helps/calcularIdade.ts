export function calcIdade(dataNasc: string, dataAjui:String, genero: String): boolean {

    let dataAjuizArray = dataAjui.split("/");
    let year = parseFloat(dataAjuizArray[2])
    let month = parseFloat(dataAjuizArray[1])
    let day = parseFloat(dataAjuizArray[0])


    var d = new Date,
        ano_atual = year,
        mes_atual = month + 1,
        dia_atual = day,
        split = dataNasc.split('/'),
        novadata = split[1] + "/" +split[0]+"/"+split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    const idade = quantos_anos < 0 ? 0 : quantos_anos;
    if(genero==="MASCULINO" && idade >= 60){
        return true;
    }

    if(genero==="FEMININO" && idade >= 55){
        return true;
    }

    return false;
    //return dataAjuizArray;
}
/* const idade = calcIdade("02/03/1998");
console.log(`Idade:${idade}`) */