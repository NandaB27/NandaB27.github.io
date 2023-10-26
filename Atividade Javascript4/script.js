 /*1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.*/
  const valorCelsius = Number(prompt('Insira a temperatura em graus Celsius'))
  const valorFahrenheit = valorCelsius * (9/5) + 32
  document.write(`A temperatura é de ${valorFahrenheit}° Fahrenheit </br>`)

/*2. Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente utilizando a estrutura condicional switch.*/
    let WeekDay = Number(prompt('Digite o valor:'))
    let WeekNames 

  switch(WeekDay) {
      case 1:
          WeekNames = 'Domingo'
      break
      case 2:
          WeekNames = 'Segunda-feira'
      break
      case 3:
          WeekNames = 'Terça-feira'
      break
      case 4:
          WeekNames = 'Quarta-feira'
      break
      case 5:
          WeekNames = 'Quinta-feira'
      break
      case 6:
          WeekNames = 'Sexta-feira'
      break
      case 7:
          WeekNames = 'Sábado'
      break

         default:
         document.write("Dia inválido, digite um valor de 1 a 7.")

  }
      document.write(`Hoje o dia é ${WeekNames}.</br>`)

/*3. Crie um programa que peça um número e verifique se ele é positivo, negativo ou zero.*/
  const num = Number(prompt('Insira um valor.'))
  if (num > 0) {
      document.write('Esse número é positivo.</br>')
  } else if (num < 0) {
      document.write('Esse número é negativo.</br>')
  } else {
      document.write('Esse número é igual a zero.</br>')
  }

/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever o custo final ao consumidor.*/

  const custodefabrica = Number(prompt('Insira o valor de fábrica do carro.'))
  const custofinal = custodefabrica * 1.45 * 1.28

  document.write(`O valor final do carro é de R$${custofinal.toFixed(2).replace('.',',')} </br>`)

/*5. Desenvolva um algoritmo que faça o cálculo do índice de massa corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário que digite sua altura, em seguida solicitar que digite seu peso e que lhe exiba o status. O status vai variar da seguinte forma:

a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
 “Você está abaixo da faixa de peso ideal”;

b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
 “Você está acima da faixa de peso ideal”;

c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”. */

 const altura = Number(prompt('Insira sua altura em centímetros.'))
 const peso = Number(prompt('Insira seu peso em kg.'))
 const IMC = peso / (altura * altura)

 if (IMC < 18.5) {
     document.write('Você está abaixo da faixa de peso ideal.</br>')
 } else if (IMC > 24.99) {
     document.write('Você está acima da faixa de peso ideal.</br>')
 } else if (IMC >= 18.5 && IMC <= 24.99){
     document.write('Você está dentro da faixa de peso ideal.</br>')
 }

/*6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números digitados conforme a operação informada.*/

 const num1 = Number(prompt('Insira um número.'))
 const operador = prompt('Insira um operador')
 const num2 = Number(prompt('Insira um segundo número.'))
 let resultado
 if (operador == "+") {
     resultado = num1 + num2;
 } else if (operador == "-" ) { 
     resultado = num1 - num2;
 } else if (operador == "*" ) {
     resultado = num1 * num2;
 } else if (operador == "/") {
     resultado = num1 / num2;
 }
 document.write(`O resultado é ${resultado}. </br>`)

/*7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e menor do que o saldo. Cada saque eletrônico cobra uma taxa de R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo certo com o saque, e se o usuário informar um valor maior que o saldo deve ser informado ao usuário que o mesmo não tem dinheiro suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve ser considerado e também contabilizado o valor da taxa a ser cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor da taxa do saque não pode ser maior que o saldo disponível.*/

let conta = 2500
const saque = Number(prompt('Quanto deseja retirar?'))
const resultado2 = conta - (saque + 4.50)

 if (saque + 4.50 > conta) {
     document.write('Erro, o valor de saque não pode ser maior do que o saldo.</br>')
 }


if (saque > 0 && saque % 5 === 0) {
     document.write(`Saque efetuado com sucesso, o valor restante na conta é de R$${resultado2.toFixed(2).replace('.',',')}</br>`)
 }

 /* 8. Faça um algoritmo que leia a idade e peso de um atleta  e imprima a sua categoria, de acordo com a seguinte tabela:
 Idade Peso Categoria
 Até 12 anos - Infantil
 13 a 16 anos Até 40kg Juvenil leve
 Acima de 40kg Juvenil pesado
 17 a 24 anos Até 45kg Sênior leve
 Acima de 45kg até 60kg Sênior médio
 Acima de 60kg Sênior pesado
 Acima de 24 anos - Veterano */

 const idadeAtleta = Number(prompt('Insira a sua idade.'))
 const pesoAtleta = Number(prompt('Insira seu peso.'))

 if (idadeAtleta <= 12 ) {
     document.write('Sua categoria é infantil. </br>')
 } else if (idadeAtleta > 12 && idadeAtleta <= 16 && pesoAtleta <= 40) {
     document.write('Sua categoria é juvenil leve. </br>')
 } else if (idadeAtleta > 12 && idadeAtleta <= 16 && pesoAtleta > 40) {
     document.write('Sua categoria é juvenil pesado. </br>')
 } else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta <= 45) {
     document.write('Sua categoria é sênior leve. </br>')
 } else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta > 45 && pesoAtleta < 60) {
     document.write('Sua categoria é sênior médio. </br>')
 } else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta > 60) {
     document.write('Sua categoria é sênior pesado. </br>')
 } else if (idadeAtleta > 24) {
     document.write('Sua categoria é veterano. </br>')
 }

/*9. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.*/

const velocidademaxima = 80
const velocidade = Number(prompt('Insira a velocidade do carro.'))
const multa = ( velocidade - velocidademaxima) * 5

if (velocidade > 80) {
    document.write(`Você ultrapassou o limite de velocidade e foi multado, o valor da multa é de R$${multa.toFixed(2).replace('.',',')}`)
} else {
    document.write('Você passou dentro do limite de velocidade!')
}