
export function cercaProvincia(sigla_provincia_da_cercare) {
    return function( provincia ){
        //console.log("💛 "+sigla_provincia_da_cercare)
        //console.log(provincia.sigla,provincia.sigla === sigla_provincia_da_cercare)

        return provincia.sigla === sigla_provincia_da_cercare
        
    }
}




function somma(n1,n2){
    return n1+n2
}