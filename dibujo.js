
var texto = document.getElementById("texto_lineas");
var boton =document.getElementById("Botoncito");
boton.addEventListener("click",dibujoPorClick );
var d = document.getElementById("dibujito"); 
var lienzo= d.getContext("2d");
var ancho= d.clientWidth;
var lineas = 30;
var l =0;
var yi,xf;
var colorcito1 ="green";
var colorcito2="blue";
var colorcito3="violet";
var colorcito4="yellow";
var ctx=d.getContext("2d");


var yf,xi;


for (l=0; l < lineas; l++)

{
yi= 10 * l;
xf= 10*(l+1);
yf=300-yi;
xi=300-xf;
dibujarLinea(colorcito1,0,yi,xf,300);
dibujarLinea(colorcito2,300,yi,xf,0);
dibujarLinea(colorcito3,yf,0,0,xf);
dibujarLinea(colorcito4,300,yf,xf,300);
console.log("linea "+1);
}





function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)



{


    


    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



function dibujoPorClick()
{ ctx.clearRect(0, 0, d.width, d.height);
    console.log(texto);
   var xxx= parseInt(texto.value);
   var lineas = xxx;
var l =0;
var yi,xf;
var colorcito1 ="green";
var colorcito2="blue";
var colorcito3="violet";
var colorcito4="yellow";
var espacio = ancho/lineas;
var yf,xi;
for (l=0; l < lineas; l++)
{
yi= espacio * l;
xf= espacio*(l+1);
yf=300-yi;
xi=300-xf;
dibujarLinea(colorcito1,0,yi,xf,300);
dibujarLinea(colorcito2,300,yi,xf,0);
dibujarLinea(colorcito3,yf,0,0,xf);
dibujarLinea(colorcito4,300,yf,xf,300);
console.log("linea "+1);

}





}


var teclas ={
    UP:38,DOWN:40,LEFT:37,RIGHT:39  
};
console.log(teclas);

document.addEventListener("keydown",dibujarTeclado);
var cuadrito =document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;

dibujarLinea2("red",149,149,151,151,papel);
var movimiento = 10;



function dibujarLinea2(color,xinicial,yinicial,xfinal,yfinal,papel)
{


    papel.beginPath();
    papel.strokeStyle =color;
    papel.lineWidth= 3;
    papel.moveTo(xinicial,yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.stroke();
    papel.closePath();

}


function dibujarTeclado(evento)
{
  
        
switch (evento.keyCode){
    case teclas.DOWN:
    console.log("vamo pa abajo");
    dibujarLinea2(colorcito1,x,y,x,y+movimiento,papel);
    y=y+movimiento;
    break;
case teclas.UP:
console.log("vamos pa arriba");
dibujarLinea2(colorcito1,x,y,x,y-movimiento,papel);
y=y-movimiento;
break;
case teclas.LEFT:
    console.log("izquierda");
    dibujarLinea2(colorcito1,x,y,x-movimiento,y,papel);
    x=x-movimiento;
    break;
    case teclas.RIGHT:
        console.log("dere");
        dibujarLinea2(colorcito1,x,y,x+movimiento,y,papel);
        x=x+movimiento;
        break;

default :
console.log("otra tecla");
}     

}