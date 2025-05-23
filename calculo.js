function calcularDesconto() {
    const preco = Number(document.getElementById("preco").value);
    const desconto = Number(document.getElementById("desconto").value);
    const resultado = document.getElementById("resultado");
 
 
    if (preco > 0 && desconto > 0) {
       
        const valorDesconto = (preco / 100) * desconto
        const precoFinal = preco - valorDesconto
   
        resultado.innerHTML =  `<p> valor do desconto: ${valorDesconto}</p>  preço final com desconto: ${precoFinal}`
 
    }else{
 
        resultado.innerHTML = ` <p> Por favor, Degite um valor valido </p>`
 
    }
    }