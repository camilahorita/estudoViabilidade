function mostrarDados() {
  const resultadoDiv = document.getElementById('resultado');
  const radios = document.getElementsByName('viagem');
  
  let selecionado = null;
  radios.forEach(radio => {
      if (radio.checked) {
          selecionado = radio.value;
      }
  });
  
  const dados = {
      viagemDisney: {
          emprestimo: {
              taxaJuros: '5,5% a.m.',
              pagamentoMensal: 'R$ 4.466,31',
              custoTotalComJuros: 'R$ 53.595,72'
          },
          cartaoCredito: {
              taxaJuros: '2% a.m.',
              pagamentoMensal: 'R$ 3.743,24',
              custoTotalComJuros: 'R$ 44.918,88'
          },
          poupando: {
              taxaJuros: '0% a.m.',
              pagamentoMensal: 'R$ 3.298,83',
              custoTotal: 'R$ 39.586'
          }
      },
      intercambioNYC: {
          emprestimo: {
              taxaJuros: '5,5% a.m.',
              pagamentoMensal: 'R$ 4.080,22',
              custoTotalComJuros: 'R$ 48.962,64'
          },
          cartaoCredito: {
              taxaJuros: '2% a.m.',
              pagamentoMensal: 'R$ 3.419,65',
              custoTotalComJuros: 'R$ 41.035,80'
          },
          poupando: {
              taxaJuros: '0% a.m.',
              pagamentoMensal: 'R$ 3.013,66',
              custoTotal: 'R$ 36.164'
          }
      },
      anoNovoJericoacoara: {
          emprestimo: {
              taxaJuros: '5,5% a.m.',
              pagamentoMensal: 'R$ 1.602,46',
              custoTotalComJuros: 'R$ 19.229,52'
          },
          cartaoCredito: {
              taxaJuros: '2% a.m.',
              pagamentoMensal: 'R$ 1.343,03',
              custoTotalComJuros: 'R$ 16.116,36'
          },
          poupando: {
              taxaJuros: '0% a.m.',
              pagamentoMensal: 'R$ 1.183,58',
              custoTotal: 'R$ 14.203'
          }
      },
      feriasParis: {
          emprestimo: {
              taxaJuros: '5,5% a.m.',
              pagamentoMensal: 'R$ 3.020,34',
              custoTotalComJuros: 'R$ 36.244,08'
          },
          cartaoCredito: {
              taxaJuros: '2% a.m.',
              pagamentoMensal: 'R$ 2.531,36',
              custoTotalComJuros: 'R$ 30.376,32'
          },
          poupando: {
              taxaJuros: '0% a.m.',
              pagamentoMensal: 'R$ 2.230,83',
              custoTotal: 'R$ 26.770'
          }
      }
  };

  const dadosSelecionados = dados[selecionado];
  
  resultadoDiv.innerHTML = `
      <h2>${capitalizeFirstLetter(selecionado)}</h2>
      <div class="column-container">
          <div class="column">
              <h3>Empréstimo</h3>
              <p><strong>Taxa de Juros:</strong></p>
              <p>${dadosSelecionados.emprestimo.taxaJuros}</>
              <p><strong>Pagamento Mensal:</strong></p>
              <p>${dadosSelecionados.emprestimo.pagamentoMensal}</p>
              <p><strong>Custo Total com Juros:</strong></p>
              <p>${dadosSelecionados.emprestimo.custoTotalComJuros}</p>
          </div>
          <div class="column">
              <h3>Cartão de Crédito</h3>
              <p><strong>Taxa de Juros:</strong></p>
              <p>${dadosSelecionados.cartaoCredito.taxaJuros}</p>
              <p><strong>Pagamento Mensal:</strong></p>
              <p>${dadosSelecionados.cartaoCredito.pagamentoMensal}</p>
              <p><strong>Custo Total com Juros:</strong></p>
              <p>${dadosSelecionados.cartaoCredito.custoTotalComJuros}</p>
          </div>
          <div class="column">
              <h3>Poupando o Dinheiro</h3>
              <p><strong>Taxa de Juros:</strong></p>
              <p>${dadosSelecionados.poupando.taxaJuros}</p>
              <p><strong>Pagamento Mensal:</strong></p>
              <p>${dadosSelecionados.poupando.pagamentoMensal}</p>
              <p><strong>Custo Total:</strong></p>
              <p>${dadosSelecionados.poupando.custoTotal}</p>
          </div>
      </div>
  `;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/([A-Z])/g, ' $1').trim();
}
