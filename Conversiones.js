var pesos, dolar, Con

function pesosADolares(pesos, Con) {
    return pesos / Con;
  }
  
  function dolaresAPesos(dolar, Con) {
    return dolar * Con;
  }

function Conversion() {
    pesos= document.getElementById("P").value
    dolar= document.getElementById("D").value
    Con= document.getElementById("Conver").value
  
    let resultado;
  
    if (pesos) {
      resultado = pesosADolares(pesos, Con);
      document.getElementById("D").value = resultado;
    } else if (dolar) {
      resultado = dolaresAPesos(dolar, Con);
      document.getElementById("P").value = resultado;
    }
  }
  
  function Limpiar() {
    document.getElementById("P").value = "";
    document.getElementById("D").value = "";
    document.getElementById("Conver").value = "";
  }