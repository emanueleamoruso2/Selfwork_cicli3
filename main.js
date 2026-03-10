let numero=prompt('Scegli un numero da 1 a 3');

while(numero){
if(numero==1){
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
else{
numero=prompt('Risposta non valida. Scegli un numero da 1 a 3');
}
}
