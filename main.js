let numero=Number(prompt('Scegli un numero da 1 a 3'));
check=true

while(numero){
if(numero !=1 && numero!=2 & numero!=3){
numero=prompt('Risposta non valida. Scegli un numero da 1 a 3');
}
else if(numero==1){
console.log(`E' stata selezionata l'acqua`);
break;
}
else if(numero==2){
console.log(`E' stata selezionata coca cola`);
break;
}
else if(numero==3){
console.log(`E' stata selezionata birra`);
break;
}
}