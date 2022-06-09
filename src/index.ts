console.clear();
let imprimir:string="";

function repito(dato:string){
console.log(dato);
dato=dato+" "+dato;
repito(dato);

}
imprimir=String(prompt("Ingrese una palabra"));
repito(imprimir);