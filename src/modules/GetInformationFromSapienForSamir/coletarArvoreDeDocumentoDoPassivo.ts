const { JSDOM } = require('jsdom');
import { IGetArvoreDocumentoDTO } from '../../DTO/GetArvoreDocumentoDTO';
import { ResponseArvoreDeDocumento } from '../../sapiensOperations/response/ResponseArvoreDeDocumento';
import { getArvoreDocumentoUseCase } from '../GetArvoreDocumento';
import { getCapaDoPassivaUseCase } from '../GetCapaDoPassiva/index';
import { getXPathText } from "../../helps/GetTextoPorXPATH";
import { corre├žaoDoErroDeFormatoDoSapiens } from '../../helps/Corre├žaoDoErroDeFormatoDoSapiens';
export async function coletarArvoreDeDocumentoDoPassivo(data: IGetArvoreDocumentoDTO): Promise<Array<ResponseArvoreDeDocumento>>{
    const capaHTMLDoPassivo = await getCapaDoPassivaUseCase.execute(data.nup, data.cookie)
    const capaDoPassivoFormata =  new JSDOM(capaHTMLDoPassivo)
    const xphatDaNUP_Principal =  "/html/body/div/div[4]/table/tbody/tr[13]/td[2]/a[1]/b"
    try {
        data.nup = await corre├žaoDoErroDeFormatoDoSapiens(getXPathText(capaDoPassivoFormata, xphatDaNUP_Principal)).replace("(PRINCIPAL)", "").replace("-","").replace("/", "").replace(".","");
        return await (await getArvoreDocumentoUseCase.execute(data)).reverse();   
    } catch (error) {
        console.log(error);
        return [];
    }

}