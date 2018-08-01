var myname = "esneider";
var age = 29;
    console.log(myname,age);

var ignasiAge = 32;
var ageDiff;
ageDiff=age-ignasiAge;
console.log(ageDiff);

if(age>21){
    console.log("es mayor de  de 21 años");
}
else if(age<21){
    console.log("usted es menor de 21 años");
}
else{
    console.log("su edad es 21 años");
}
if(age<ignasiAge){
    console.log("usted es menor que ignasi");
}else if(age>ignasiAge){
    console.log("usted es mayor que ignasi")
}else{
    console.log("usted tiene la misma edad de ignasi");
}
var clase=["alberto","alex","esneider","micaela","oscar"];
  console.log(clase[0]," es el primero de la clase");
  console.log(clase[clase.length-1],"es el ultimo de la clase");
    
	for (var j= 0; j < clase.length; j++){
	console.log(clase[j]);
}
var edades=[24,28,29,31];
var a = 0;
while ( a < edades.length){
    console.log(edades[a]);
    a++; 
}
for( a=0; a < edades.length; a++){
   
    if(edades[a]%2==0){
        console.log(edades[a],"esta edad es par");
    }
}


var cuenta=[26,22,23,24,25];
var cuenta3=[22,23,24,25,26,27,28,29];
function nummayor(array){
    var mayor=0;
 for(var h=0; h<array.length;h++){
    
     if (array[h]> mayor){
        mayor=array[h];
      } 
  }
      console.log(mayor,"es el numero mayor");
}
  function nummenor(){
    var menor=cuenta[0];
    for(var h=0; h<cuenta.length;h++){
        if (cuenta[h]< menor){
            menor=cuenta[h];
        }
      }  
    console.log(menor,"es el numero menor");
}

nummenor();
nummayor(cuenta);
nummayor(cuenta3);

//
// escriba una función que reciba dos parámetros, una matriz y un índice. La función imprimirá el valor del elemento en una posición dada en la consola.
// 
 function  printnum(Array,num){
     for(h=0;h<Array.length;h++){
         if(num==h){
             console.log("la posicion :",h,"del arrays tiene el valor de: ",Array[h]);
         }
     }
 }
var number =2;
printnum(cuenta,number);

//escriba una función que recibe una matriz y solo imprime los valores que se repiten.  

var cuenta2=[26,23,24,24,26,30,30];
function numrepeat(Array){
    console.log("los numeros repetidos son :");
    for(h=0;h<Array.length-1;h++){
        for(j=h+1;j<Array.length;j++){
             if(Array[h]==Array[j]){
                      console.log(Array[j]);
              }
          }
      } 
}


 numrepeat(cuenta2);          
      
//escriba una función de JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena. 

var myColor = ["Red", "Green", "White", "Black"];

console.log( myColor.join('/ ') );

//escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, entonces la salida debería ser 34423.


function invert(numero){
var original=numero;

    var inverso = 0;
       while(numero!=0){
           cifra = numero%10;
           inverso = (inverso * 10) + cifra;
           numero= Math.round(numero/10);
       }
    
      console.log("este es el numero original :",original,"\n este es el numero invertido: ",inverso);
   }

var numero1=12;
invert(numero1);
//otra forma de rotar el numero haciendolo string;

var str = '123';
reversenum(str);
function reversenum(String){
var strReverse = String.split('').reverse().join(''); 
console.log(" el numero original es : ",str,"\n este es el invertido : ",strReverse);
}

// escriba una función de JavaScript que devuelve una cadena en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena.
 
var str = 'webmaster';
ordenalfabetico(str);
function ordenalfabetico(String){
var strReverse = String.split('').sort().join(''); 
console.log(strReverse);

}
//escriba una función de JavaScript que convierta la primera letra de cada palabra en mayúscula. Por ejemplo, si x = "príncipe de Persia", la salida debería ser "Prince of Persia".


var str = 'principe of persia game game game';

function ucwords(str) {
  return (str + '')
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
      return $1.toUpperCase();
    });
}
 
console.log(ucwords(str));

//escriba una función de JavaScript que encuentre la palabra más larga en una frase. Por ejemplo, si x = "Tutorial de desarrollo web", la salida debería ser "Desarrollo".



var str = 'principe of persia game game game';
 PalabraLarga(str);
function PalabraLarga(string) {
       grande = ""
       palabras = string.replace(",", " ").split(" ");
       palabras.forEach(function(palabra){
            if (palabra.length > grande.length){
                  grande = palabra
             };
          }
       );
       console.log(" la palabra mas grande es :",grande );
}




