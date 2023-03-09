import { InformationForPicaPau } from "./GetInformationCapaForPicaPau";
import { advogados } from "./GetInformationAdvogadoPilantra";
import { calcularIdade } from "./GetInformationIdade";
import { identificarCidade } from "./GetInformationCidade";

export const impedimentosCapa = new InformationForPicaPau(advogados, calcularIdade, identificarCidade);
