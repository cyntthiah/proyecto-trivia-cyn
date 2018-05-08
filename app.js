var nombre = prompt ("Ingresa tu nombre");
document.getElementById('Usuario').innerHTML = nombre;
var r_correctas = 0;
var r_incorrectas = 0;
var pregunta1 = "Ingrese la edad minima para postular en Laboratoria";
var pregunta2 = "Ingrese con que genero se identifica";
var pregunta3 = "ingrese cuantos meses dura el bootcamp";
if (confirm("Vamos a realizar un Juego"))
{
    document.getElementById('Encabezado').innerHTML = "Resultado del Quiz";
   var respuesta1 = prompt (pregunta1);
   if (respuesta1 == 18 )
   {
     alert ("Correcto"); r_correctas = r_correctas + 1;
     document.getElementById('PreguntaCorrecta1').innerHTML = pregunta1;
     document.getElementById('RespuestaCorrecta1').innerHTML = respuesta1;
   }
   else
   {
     alert ("Respuesta Incorrecta");
     r_incorrectas = r_incorrectas + 1;
     document.getElementById('PreguntaIncorrecta1').innerHTML = pregunta1;
     document.getElementById('RespuestaIncorrecta1').innerHTML = respuesta1;
   }
  var respuesta2 = prompt(pregunta2);
  respuesta2 = respuesta2.toLowerCase();
    if (respuesta2 == "mujer")
    {
      alert ("Correcto"); r_correctas = r_correctas + 1;
      document.getElementById('PreguntaCorrecta2').innerHTML = pregunta2;
      document.getElementById('RespuestaCorrecta2').innerHTML = respuesta2;

    }
    else
    {
      alert ("Respuesta Incorrecta"); r_incorrectas = r_incorrectas + 1;
      document.getElementById('PreguntaIncorrecta2').innerHTML = pregunta2;
      document.getElementById('RespuestaIncorrecta2').innerHTML = respuesta2;
    }
    var respuesta3 = prompt (pregunta3);
    if(respuesta3 == 6)
    {
      alert ("Correcto");
      r_correctas = r_correctas + 1;
      document.getElementById('PreguntaCorrecta3').innerHTML = pregunta3;
      document.getElementById('RespuestaCorrecta3').innerHTML = respuesta3;
    }
    else
    {
      alert ("Respuesta Incorrecta");
      r_incorrectas = r_incorrectas + 1;
      document.getElementById('PreguntaIncorrecta3').innerHTML = pregunta3;
      document.getElementById('RespuestaIncorrecta3').innerHTML = respuesta3;
    }
      alert ("Sus respuestas correctas son: " + r_correctas + " y sus respuestas Incorrectas son: " + r_incorrectas);
      document.getElementById('Correctas').innerHTML = r_correctas;
      document.getElementById('Incorrectas').innerHTML = r_incorrectas;
    }
else
{
      alert ("Gracias por participar");
      document.getElementById('Encabezado').innerHTML = "Gracias por Participar";
}
