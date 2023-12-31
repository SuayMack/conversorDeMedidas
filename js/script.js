// Seleciona o elemento HTML com o id 'categoria' e o armazena na variável 'categoria'
var categoria = document.getElementById('categoria')

// Seleciona o elemento HTML com o id 'entrada' e o armazena na variável 'entrada'
var entrada = document.getElementById('entrada')

// Seleciona o elemento HTML com o id 'unidade-entrada' e o armazena na variável 'unidadeEntrada'
var unidadeEntrada = document.getElementById('unidade-entrada')

// Seleciona o elemento HTML com o id 'unidade-saida' e o armazena na variável 'unidadeSaida'
var unidadeSaida = document.getElementById('unidade-saida')

// Seleciona o elemento HTML com o id 'unidades' e o armazena na variável 'selectUnidades'
var selectUnidades = document.getElementById('unidades')

// Seleciona o elemento HTML com o id 'select-unidades' e o armazena na variável 'divUnidades'
var divUnidades = document.getElementById('unidades')

// Seleciona o elemento HTML com o id 'exibir-resultado' e o armazena na variável 'inputResultado'
var inputResultado = document.getElementById('exibir-resultado')

// Cria uma nova opção para o elemento <select> com o texto "optionText" e o valor "optionValue"
new Option("optionText", "optionValue")

//Funções para limpar as opções do select de unidade de entrada e de saída e o resultado
function limparOptionsEntrada() {
  unidadeEntrada.options.length = 0
}
function limparOptionsSaida() {
  unidadeSaida.options.length = 0
}
function limparResultado() {
  inputResultado.value = ''
}

// Função para popular o select de entrada
//Essa função popula o select de unidade de entrada com opções com base na categoria selecionada. 
//Dependendo do valor da variável categoria, diferentes opções são adicionadas ao elemento unidadeEntrada usando a função add do objeto options. 
//Cada opção possui um texto visível para o usuário e um valor associado que será usado posteriormente.
function criarunidadeEntrada() {
  // Verifica se a categoria selecionada é 'comprimento'
  if (categoria.value == 'comprimento') {
    // Adiciona opções ao select de unidade de entrada relacionadas a comprimento
    unidadeEntrada.options.add(new Option("Metros", "metros"))
    unidadeEntrada.options.add(new Option("Centímetros", "centimetros"))
    unidadeEntrada.options.add(new Option("Polegadas", "polegadas"))
  }
  // Verifica se a categoria selecionada é 'peso'
  else if (categoria.value == 'peso') {
    // Adiciona opções ao select de unidade de entrada relacionadas a peso
    unidadeEntrada.options.add(new Option("Quilogramas", "quilogramas"))
    unidadeEntrada.options.add(new Option("Gramas", "gramas"))
    unidadeEntrada.options.add(new Option("Libras", "libras"))
  }
  // Verifica se a categoria selecionada é 'temperatura'
  else if (categoria.value == 'temperatura') {
    // Adiciona opções ao select de unidade de entrada relacionadas a temperatura
    unidadeEntrada.options.add(new Option("Celsius", "celsius"))
    unidadeEntrada.options.add(new Option("Fahrenheit", "fr"))
    unidadeEntrada.options.add(new Option("Kelvin", "kelvin"))
  }
}

//Criei as funções para as unidades de saida separadas.
//Poderia ter feito todas em uma só função, como fiz com a unidade de entrada, mas optei por deixá-las separadas para melhor entendimento do código
//Essa função cria as opções do select de unidade de saída com base na unidade de entrada selecionada. 
//Dependendo do valor da variável unidadeEntrada, diferentes opções são adicionadas ao elemento unidadeSaida usando a função add do objeto options. 
//Cada opção possui um texto visível para o usuário e um valor associado que será usado posteriormente.
//Função para unidades de saida COMPRIMENTO
function criarUnidadeSaidaComprimento() {
  // Verifica se a unidade de entrada selecionada é 'metros'
  if (unidadeEntrada.value == 'metros') {
    // Adiciona opções ao select de unidade de saída relacionadas a metros
    unidadeSaida.options.add(new Option("Centímetros", "centimetros"));
    unidadeSaida.options.add(new Option("Polegadas", "polegadas"));
  }
  // Verifica se a unidade de entrada selecionada é 'centímetros'
  else if (unidadeEntrada.value == 'centimetros') {
    // Adiciona opções ao select de unidade de saída relacionadas a centímetros
    unidadeSaida.options.add(new Option("Metros", "metros"));
    unidadeSaida.options.add(new Option("Polegadas", "polegadas"));
  }
  // Verifica se a unidade de entrada selecionada é 'polegadas'
  else if (unidadeEntrada.value == 'polegadas') {
    // Adiciona opções ao select de unidade de saída relacionadas a polegadas
    unidadeSaida.options.add(new Option("Metros", "metros"));
    unidadeSaida.options.add(new Option("Centímetros", "centimetros"));
  }
}
// Função para criar as opções do select de unidade de saída relacionadas a peso
function criarUnidadeSaidaPeso() {
  // Verifica se a unidade de entrada selecionada é 'quilogramas'
  if (unidadeEntrada.value == 'quilogramas') {
    // Adiciona opções ao select de unidade de saída relacionadas a quilogramas
    unidadeSaida.options.add(new Option("Gramas", "gramas"));
    unidadeSaida.options.add(new Option("Libras", "libras"));
  }
  // Verifica se a unidade de entrada selecionada é 'gramas'
  else if (unidadeEntrada.value == 'gramas') {
    // Adiciona opções ao select de unidade de saída relacionadas a gramas
    unidadeSaida.options.add(new Option("Quilogramas", "quilogramas"));
    unidadeSaida.options.add(new Option("Libras", "libras"));
  }
  // Verifica se a unidade de entrada selecionada é 'libras'
  else if (unidadeEntrada.value == 'libras') {
    // Adiciona opções ao select de unidade de saída relacionadas a libras
    unidadeSaida.options.add(new Option("Quilogramas", "quilogramas"));
    unidadeSaida.options.add(new Option("Gramas", "gramas"));
  }
}
// Função para criar as opções do select de unidade de saída relacionadas a temperatura
function criarUnidadeSaidaTemperatura() {
  // Verifica se a unidade de entrada selecionada é 'celsius'
  if (unidadeEntrada.value == 'celsius') {
    // Adiciona opções ao select de unidade de saída relacionadas a celsius
    unidadeSaida.options.add(new Option("Fahrenheit", "fr"));
    unidadeSaida.options.add(new Option("Kelvin", "kelvin"));
  }
  // Verifica se a unidade de entrada selecionada é 'fr'
  else if (unidadeEntrada.value == 'fr') {
    // Adiciona opções ao select de unidade de saída relacionadas a fr
    unidadeSaida.options.add(new Option("Celsius", "celsius"));
    unidadeSaida.options.add(new Option("Kelvin", "kelvin"));
  }
  // Verifica se a unidade de entrada selecionada é 'kelvin'
  else if (unidadeEntrada.value == 'kelvin') {
    // Adiciona opções ao select de unidade de saída relacionadas a kelvin
    unidadeSaida.options.add(new Option("Celsius", "celsius"));
    unidadeSaida.options.add(new Option("Fahrenheit", "fr"));
  }
}

//Funções de conversão 
function converterComprimento() {
  var valorEntrada = parseFloat(entrada.value) // Obtém o valor de entrada e converte para um número
  var unidadeEntradaSelecionada = unidadeEntrada.value // Obtém a unidade de entrada selecionada
  var unidadeSaidaSelecionada = unidadeSaida.value // Obtém a unidade de saída selecionada
  var resultado
  //Se a unidade de entrada for metro
  if (unidadeEntradaSelecionada == 'metros') {
    //E se a unidade de saida for centimetros
    if (unidadeSaidaSelecionada == 'centimetros') {
      resultado = valorEntrada * 100; // Converte metros para centímetros
    } else if (unidadeSaidaSelecionada == 'polegadas') {
      resultado = valorEntrada * 39.37 // Converte metros para polegadas
    }
    //Senão, se a unidade de entrada for centimetros
  } else if (unidadeEntradaSelecionada == 'centimetros') {
    //e se a unidade de saida for metros
    if (unidadeSaidaSelecionada == 'metros') {
      resultado = valorEntrada / 100 // Converte centímetros para metros
      //e se a unidade de saida for polegadas
    } else if (unidadeSaidaSelecionada == 'polegadas') {
      resultado = valorEntrada * 0.3937 // Converte centímetros para polegadas
    }
    //senão se a unidade de entrada for polegadas
  } else if (unidadeEntradaSelecionada == 'polegadas') {
    //e se a unidade de saida for metros
    if (unidadeSaidaSelecionada == 'metros') {
      resultado = valorEntrada / 39.37 // Converte polegadas para metros
      //senão se a unidade de saida for centimetros
    } else if (unidadeSaidaSelecionada == 'centimetros') {
      resultado = valorEntrada / 0.3937 // Converte polegadas para centímetros
    }
  }
  //insere no input o resultado
  inputResultado.value = resultado.toFixed(2)
  return resultado
}
function converterPeso() {
  var valorEntrada = parseFloat(entrada.value) // Obtém o valor de entrada e converte para um número
  var unidadeEntradaSelecionada = unidadeEntrada.value // Obtém a unidade de entrada selecionada
  var unidadeSaidaSelecionada = unidadeSaida.value // Obtém a unidade de saída selecionada
  var resultado
  // Se a unidade de entrada for quilograma
  if (unidadeEntradaSelecionada == 'quilogramas') {
    // Se a unidade de saída for libra
    if (unidadeSaidaSelecionada == 'libras') {
      resultado = valorEntrada * 2.2046 // Converte quilogramas para libras
    }
    // Se a unidade de saída for grama
    else if (unidadeSaidaSelecionada == 'gramas') {
      resultado = valorEntrada * 1000 // Converte quilogramas para gramas
    }
  }
  // Se a unidade de entrada for libra
  else if (unidadeEntradaSelecionada == 'libras') {
    // Se a unidade de saída for quilograma
    if (unidadeSaidaSelecionada == 'quilogramas') {
      resultado = valorEntrada / 2.2046 // Converte libras para quilogramas
    }
    // Se a unidade de saída for grama
    else if (unidadeSaidaSelecionada == 'gramas') {
      resultado = valorEntrada * 453.592 // Converte libras para gramas
    }
  }
  // Se a unidade de entrada for grama
  else if (unidadeEntradaSelecionada == 'gramas') {
    // Se a unidade de saída for quilograma
    if (unidadeSaidaSelecionada == 'quilogramas') {
      resultado = valorEntrada / 1000 // Converte gramas para quilogramas
    }
    // Se a unidade de saída for libra
    else if (unidadeSaidaSelecionada == 'libras') {
      resultado = valorEntrada / 453.592 // Converte gramas para libras
    }
  }
  //insere no input o resultado
  inputResultado.value = resultado.toFixed(2)
  return resultado
}
function converterTemperatura() {
  var valorEntrada = parseFloat(entrada.value) // Obtém o valor de entrada e converte para um número
  var unidadeEntradaSelecionada = unidadeEntrada.value // Obtém a unidade de entrada selecionada
  var unidadeSaidaSelecionada = unidadeSaida.value // Obtém a unidade de saída selecionada
  var resultado
  // Se a unidade de entrada for Celsius
  if (unidadeEntradaSelecionada == 'celsius') {
    // Se a unidade de saída for Fahrenheit
    if (unidadeSaidaSelecionada == 'fr') {
      resultado = (valorEntrada * 9 / 5) + 32 // Converte Celsius para Fahrenheit
    }
    // Se a unidade de saída for Kelvin
    else if (unidadeSaidaSelecionada == 'kelvin') {
      resultado = valorEntrada + 273.15 // Converte Celsius para Kelvin
    }
  }
  // Se a unidade de entrada for Fahrenheit
  else if (unidadeEntradaSelecionada == 'fr') {
    // Se a unidade de saída for Celsius
    if (unidadeSaidaSelecionada == 'celsius') {
      resultado = (valorEntrada - 32) * 5 / 9 // Converte Fahrenheit para Celsius
    }
    // Se a unidade de saída for Kelvin
    else if (unidadeSaidaSelecionada == 'kelvin') {
      resultado = (valorEntrada - 32) * 5 / 9 + 273.15 // Converte Fahrenheit para Kelvin
    }
  }
  // Se a unidade de entrada for Kelvin
  else if (unidadeEntradaSelecionada == 'kelvin') {
    // Se a unidade de saída for Celsius
    if (unidadeSaidaSelecionada == 'celsius') {
      resultado = valorEntrada - 273.15 // Converte Kelvin para Celsius
    }
    // Se a unidade de saída for Fahrenheit
    else if (unidadeSaidaSelecionada == 'fr') {
      resultado = (valorEntrada - 273.15) * 9 / 5 + 32 // Converte Kelvin para Fahrenheit
    }
  }
  //insere no input o resultado
  inputResultado.value = resultado.toFixed(2)
  return resultado
}

// Adiciona um ouvinte de evento 'change' ao elemento 'categoria'
//Quando ocorrer uma alteração no valor de categoria, ou seja, quando o usuário selecionar uma opção diferente, a função anônima é acionada.
//Dentro dessa função, as ações seguintes são realizadas: limpar as opções do select de unidade de entrada, limpar as opções do select de unidade de saída e criar as opções do select de unidade de entrada com base na categoria selecionada.
//Essa sequência de ações tem como objetivo atualizar as opções disponíveis nos selects de entrada e saída conforme a categoria selecionada pelo usuário.
categoria.addEventListener('change', function () {
  // Ao ocorrer uma alteração no valor de 'categoria', executa as seguintes ações:
  // Limpa as opções do select de unidade de entrada
  limparOptionsEntrada()
  // Limpa as opções do select de unidade de saída
  limparOptionsSaida()
  //Limpa o input do resultado
  limparResultado()

  // Adiciona uma opção vazia para "Selecione a unidade" no select de unidade de entrada
  unidadeEntrada.options.add(new Option("Selecione a unidade", ""));
  // Cria as opções do select de unidade de entrada com base na categoria selecionada
  criarunidadeEntrada();
});

//Tratamento para quando selecionar a unidade de entrada sem ter selecionado a categoria
unidadeEntrada.addEventListener('click', function () {
  if (categoria.value == '') {
    alert("Selecione a categoria")
  }
})
//Tratamento para quando selecionar a unidade de saida sem ter selecionado a categoria pu a unidade de entrada
unidadeSaida.addEventListener('click', function () {
  if (categoria.value == '') {
    alert("Selecione a categoria")
  } else if (unidadeEntrada.value == '') {
    alert("Selecione a unidade de entrada")
  }
})

//Adiciona um ouvinte de evento 'change' ao elemento unidadeEntrada. Quando ocorrer uma alteração no valor de unidadeEntrada, ou seja, quando o usuário selecionar uma opção diferente, a função anônima é acionada.
//Dentro dessa função, as ações seguintes são realizadas: limpar as opções do select de unidade de saída, adicionar uma opção vazia para "Selecione a unidade" no select de unidade de saída e criar as opções do select de unidade de saída relacionadas a comprimento, peso e temperatura com base na unidade de entrada selecionada.
//Essa sequência de ações tem como objetivo atualizar as opções disponíveis no select de unidade de saída conforme a unidade de entrada selecionada pelo usuário.
unidadeEntrada.addEventListener('change', function () {
  // Ao ocorrer uma alteração no valor de 'unidadeEntrada', executa as seguintes ações:  
  // Limpa as opções do select de unidade de saída
  limparOptionsSaida();
  // Limpa o input do resultado
  limparResultado()
  // Adiciona uma opção vazia para "Selecione a unidade" no select de unidade de saída
  unidadeSaida.options.add(new Option("Selecione a unidade", ""));
  // Cria as opções do select de unidade de saída relacionadas a comprimento
  criarUnidadeSaidaComprimento();
  // Cria as opções do select de unidade de saída relacionadas a peso
  criarUnidadeSaidaPeso();
  // Cria as opções do select de unidade de saída relacionadas a temperatura
  criarUnidadeSaidaTemperatura();
});

//A função exibirResultado, que é chamada ao clicar no botão de converter, verifica se a entrada, a unidade de entrada e a unidade de saída têm valores. 
//Se algum dos campos estiver vazio, exibe um alerta indicando que todos os campos devem ser preenchidos.
//Caso contrário, verifica a categoria selecionada e chama a função de conversão apropriada com base nessa categoria.
function exibirResultado() {
  // Verifica se algum dos campos está vazio
  if (entrada.value == '' || unidadeEntrada.value == '' || unidadeSaida.value == '') {
    alert("Todos os campos devem ser preenchidos!")
  } else {
    // Verifica a categoria selecionad
    if (categoria.value == 'comprimento') {
      // Chama a função de conversão de comprimento
      converterComprimento()
    } else if (categoria.value == 'peso') {
      // Chama a função de conversão de peso
      converterPeso()
    } else if (categoria.value == 'temperatura') {
      // Chama a função de conversão de temperatura
      converterTemperatura()
    }
  }
}

