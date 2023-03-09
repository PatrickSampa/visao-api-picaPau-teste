import { advogados } from "./GetInformationAdvogadoPilantra";
import { Advogados } from "./GetInformationAdvogadoPilantra/advogadoPilantra";
import { calcularIdade } from "./GetInformationIdade";
import { CalcularIdade } from "./GetInformationIdade/calcularIdade";
import { identificarCidade } from "./GetInformationCidade";
import { IdentificarCidade } from "./GetInformationCidade/cidadeCompetencia";



export class InformationForPicaPau{
    constructor(advogadosObj: Advogados, calcularIdade: CalcularIdade, identificarCidades: IdentificarCidade){};
    async Impedimentos(capaHTML: any, parginaDosPrevFormatada: any): Promise<Array<String>>{
        const arrayImpedimentos = [];
        //Estrutura para identificar nome dos Advogados
        const verificarAdvogadoBoolean = await advogados.AdvogadoPilantra(capaHTML);
        if(!verificarAdvogadoBoolean){
            arrayImpedimentos.push("IMPEDITIVO ADVOGADO");
        }



        //Estrutura para identificar a idade
        const verificarIdade = await calcularIdade.calcIdade(parginaDosPrevFormatada);
        if(!verificarIdade){
            arrayImpedimentos.push("IMPEDITIVO IDADE")
        } 



        //Estrutura para identificar se ha cidades(SEM COMPETENCIA DELEGADA);
        const IdentCidads = await identificarCidade.execute(capaHTML);
        if(!IdentCidads){
            arrayImpedimentos.push("SEM COMPETÊNCIA DELEGADA");
        }


        return arrayImpedimentos;


    }


}




//export {IdentificarAdvogadoPilantra, VerificarIdadeCapa}
