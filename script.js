let ValorFuturoPoupado = document.getElementById('ValorFuturoPoupado');


function pace () {
    let nome = document.getElementById('nome').value;
    let ValorAplicadoMensalmentePeloUsuario = document.getElementById('ValorAplicadoMensalmentePeloUsuario').value;
    let NumeroDeParcelasMensaisAplicadasPeloUsuario = document.getElementById('NumeroDeParcelasMensaisAplicadasPeloUsuario').value;
    let TaxaDeJurosAplicadaPeloUsuario = parseFloat(document.getElementById('TaxaDeJurosAplicadaPeloUsuario').value/100);
    let resultado = document.getElementById('resultado');
    if (nome !== '' && ValorAplicadoMensalmentePeloUsuario !== '' && NumeroDeParcelasMensaisAplicadasPeloUsuario !== '') { 
        let TaxaDeJurosAplicadaPeloUsuarioCerto = (TaxaDeJurosAplicadaPeloUsuario * 100)
        let ValorFuturoCalculo = (ValorAplicadoMensalmentePeloUsuario*((((1+ TaxaDeJurosAplicadaPeloUsuario)**NumeroDeParcelasMensaisAplicadasPeloUsuario) - 1) / TaxaDeJurosAplicadaPeloUsuario));
        let ValorFuturoCalculoFOrmatado = ValorFuturoCalculo.toFixed(2);
        resultado.textContent = ` Boas vindas meu nobre, notei aqui que senhor deseja verificar quanto ganharia se poupasse dinheiro, chegamos a conclusão que, com a aplicação de R$
         ${ValorAplicadoMensalmentePeloUsuario} por  ${NumeroDeParcelasMensaisAplicadasPeloUsuario} meses, com o juros de ${TaxaDeJurosAplicadaPeloUsuarioCerto}%, você poderá obter  R$ ${ValorFuturoCalculoFOrmatado} no futuro`;
    }
    else
    {
      
    }
}
ValorFuturoPoupado.addEventListener('click', pace);
       
        
        

        
        