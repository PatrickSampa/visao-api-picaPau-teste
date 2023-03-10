import { InformationForPicaPau } from "./GetInformationCapaForPicaPau";
import { advogados } from "./GetInformationAdvogadoPilantra";
/* import { calcularIdade } from "../GetInformationDossie/GetInformationIdade"; */
import { identificarCidade } from "./GetInformationCidade";

export const impedimentosCapa = new InformationForPicaPau(advogados, identificarCidade);
