//Função para verifivar se ocorre Impeditivo idade
import { calcIdade } from "./GetInformarFunctiosTheCapa/calcularIdade";
import { advogadoPilantra } from "./GetInformarFunctiosTheCapa/advogadoPilantra";
function VerificarIdadeCapa(parginaDosPrevFormatada: any): boolean {
    const CalcularIdadeCapa = calcIdade(parginaDosPrevFormatada);
    return CalcularIdadeCapa;
}





//Função para Verificar os Impeditivos de Advogados
function IdentificarAdvogadoPilantra(capaHTML: any):boolean{
   const verificarAdvogadoBoolean = advogadoPilantra(capaHTML);
   return verificarAdvogadoBoolean;
}






export {IdentificarAdvogadoPilantra, VerificarIdadeCapa}
