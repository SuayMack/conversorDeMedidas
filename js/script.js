// Seleciona o elemento HTML com o id 'categoria' e o armazena na variável 'categoria'
var categoria = document.getElementById('categoria');

// Seleciona o elemento HTML com o id 'entrada' e o armazena na variável 'entrada'
var entrada = document.getElementById('entrada');

// Seleciona o elemento HTML com o id 'unidade-entrada' e o armazena na variável 'unidadeEntrada'
var unidadeEntrada = document.getElementById('unidade-entrada');

// Seleciona o elemento HTML com o id 'unidade-saida' e o armazena na variável 'unidadeSaida'
var unidadeSaida = document.getElementById('unidade-saida');

// Seleciona o elemento HTML com o id 'unidades' e o armazena na variável 'selectUnidades'
var selectUnidades = document.getElementById('unidades');

// Cria uma nova opção para o elemento <select> com o texto "optionText" e o valor "optionValue"
new Option("optionText", "optionValue");

//Funções para limpar as opções do select de unidade de entrada e de saída
function limparOptionsEntrada() {
  unidadeEntrada.options.length = 0
}
function limparOptionsSaida() {
  unidadeSaida.options.length = 0
}
 

// Função para popular o select de entrada
//Essa função popula o select de unidade de entrada com opções com base na categoria selecionada. 
//Dependendo do valor da variável categoria, diferentes opções são adicionadas ao elemento unidadeEntrada usando a função add do objeto options. 
//Cada opção possui um texto visível para o usuário e um valor associado que será usado posteriormente.
function criarunidadeEntrada() {
  // Verifica se a categoria selecionada é 'comprimento'
  if (categoria.value == 'comprimento') {
    // Adiciona opções ao select de unidade de entrada relacionadas a comprimento
    unidadeEntrada.options.add(new Option("Selecione a unidade", ""));
    unidadeEntrada.options.add(new Option("Metros", "metros"));
    unidadeEntrada.options.add(new Option("Centímetros", "centimetros"));
    unidadeEntrada.options.add(new Option("Polegadas", "polegadas"));
  }
  // Verifica se a categoria selecionada é 'peso'
  else if (categoria.value == 'peso') {
    // Adiciona opções ao select de unidade de entrada relacionadas a peso
    unidadeEntrada.options.add(new Option("Selecione a unidade", ""));
    unidadeEntrada.options.add(new Option("Quilogramas", "quilogramas"));
    unidadeEntrada.options.add(new Option("Gramas", "gramas"));
    unidadeEntrada.options.add(new Option("Libras", "libras"));
  }
  // Verifica se a categoria selecionada é 'temperatura'
  else if (categoria.value == 'temperatura') {
    // Adiciona opções ao select de unidade de entrada relacionadas a temperatura
    unidadeEntrada.options.add(new Option("Selecione a unidade", ""));
    unidadeEntrada.options.add(new Option("Celsius", "celsius"));
    unidadeEntrada.options.add(new Option("Fahrenheit", "fr"));
    unidadeEntrada.options.add(new Option("Kelvin", "kelvin"));
  }
}



