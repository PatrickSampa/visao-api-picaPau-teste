export class IdentificarCidade{
    async execute(capaHTML: any): Promise<boolean>{
        const arrayCidades: Array<string> = ["Cuiabá", "Chapada dos Guimarães","CASTANHAL"];
        for(let i=0; i<arrayCidades.length; i++){
            console.log(arrayCidades[i])
            if((capaHTML.indexOf(arrayCidades[i])) !== -1){
                return false;
            }
        }
        return true;
        }
}