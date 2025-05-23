function calcularMedia() {
      let n1 = parseFloat(document.getElementById("nota1").value);
      let n2 = parseFloat(document.getElementById("nota2").value);
      let n3 = parseFloat(document.getElementById("nota3").value);
 
      let resultado = document.getElementById("resultado");
 
      if (n1 > 0 && n2 > 0 && n3 > 0) {
        let media = (n1 + n2 + n3) / 3;
        let status = "";
 
        if (media >= 6) {
          status = "Aprovado";
        } else {
          status = "Reprovado";
        }
 
        resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Status: ${status}`;
      } else {
        resultado.innerHTML = "Por favor, digite apenas valores maiores que 0.";
      }
    }