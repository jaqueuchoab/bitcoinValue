//Variàveis globais
const showValues = [
  document.getElementById('valueBuy'), 
  document.getElementById('valueSymbol')
];

//Funções

//Realiza a requisição na API
function initFetchofBuy() {
  const valuesFetch = fetch('https://blockchain.info/ticker');

  valuesFetch.then(resultsFetch => {
    resultsFetch.json().then(valuesJson => {
      const valueBuy = valuesJson.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const valueSymbol = valuesJson.BRL.symbol;
      const valuesBuySymbol = [valueBuy, valueSymbol];

      innerTextValues(showValues, valuesBuySymbol);
    })
  })
}

//Realiza a requisição a cada 30 segundos, assim, atualizando o valor de compra.
function uptadeOfBuy() {
  setInterval(() => {
    initFetchofBuy()
  }, 30000);
}

//Mostra os valores para o usuário
function innerTextValues(containers, values){
  containers.forEach((container, index) => {
    return (container.innerText = `${values[index]}`);
  });
}

//Area de ativação
initFetchofBuy();
uptadeOfBuy();