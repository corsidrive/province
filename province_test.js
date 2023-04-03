console.log("------------")

// common js
// const fs = require('fs')
import  fs from "fs";
import  { cercaProvincia } from "./filtri_province.js";

const data = fs.readFileSync("province.json")
const province  = JSON.parse(data);


// Funzione di ordine superiore 
const risultato_prov =province.filter(cercaProvincia("TO"))
const risultato_regione =province.filter(cercaRegione("Piemonte"))
 
console.log("\nrisultato prov",risultato_prov,"\n")
console.log("\nrisultato reg",risultato_regione,"\n")