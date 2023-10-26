/*1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável. */

const myage = 19
document.write(`Minha idade é  ${myage} anos</br>` );

/*2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável*/

const num1 = 7
const num2 = 10
const sum = num1 + num2

document.write(`O resultado da soma de ${num1} e ${num2} é ${sum}</br>` );

/*3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"*/

const total = 189.90
const nparcelas = 5
const valorparcela = total / nparcelas

document.write(`O valor total da compra foi R$${total.toString().replace('.', ',')} </br>`)
document.write(`Forma de pagamento ${nparcelas}x de R$${valorparcela.toFixed(2).toString().replace('.', ',')}. </br>`)

/*4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda
coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"*/

const totalMinutes = 87
const totalSeconds = totalMinutes * 60

document.write(`${totalMinutes} minutos equivale à ${totalSeconds} segundos! </br>`)

/*5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"*/

const nome = "Renan"
const nota1 = 8.5
const nota2 = 7.9
const nota3 = 9
const média = (nota1 + nota2 + nota3) / 3
document.write(`O aluno ${nome} ficou com média ${média.toFixed(1)}.
</br>`)

/*6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.*/

let A = 10
let B = 20
let C = A
A = B
B = C 

document.write(`${A} e ${B} </br>`)

/*7. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

let totalEleitores = Number(prompt('Total de votos:'))
let votosBranco = Number(prompt('Total de votos brancos:'))
let votosNulos = Number(prompt('Total de votos nulos:'))
let votosValidos = totalEleitores - votosBranco - votosNulos

const brancosPercent = (votosBranco/totalEleitores) *100;
const nulosPercent = (votosNulos/totalEleitores) *100;
const validosPercent = (votosValidos/totalEleitores) *100;

document.write(`A porcentagem de votos válidos é ${validosPercent.toFixed(2)}%, a porcentagem de votos nulos é ${nulosPercent.toFixed(2)}% e a porcentagem de votos brancos é ${brancosPercent.toFixed(2)}%. </br>`)

/*8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

let valor1 = Number(prompt('Insira o primeiro valor:'))
let valor2 = Number(prompt('Insira o segundo valor:'))

if (valor1 == valor2) {
    document.write(`${valor1} e ${valor2} são números iguais. </br>`)
} else if (valor1 > valor2) {
    document.write(`${valor1} é maior que ${valor2}. </br>`)
} else if (valor1 < valor2) {
    document.write(`${valor1} é menor que ${valor2}. </br>`)
}

/*9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const maças = Number(prompt(`Número de maçãs compradas:`)) 
const maçasMenos = maças * 0.30
const maçasMais = maças * 0.25

if (maças < 12) {
    document.write(`O valor total da compra é de: R$${maçasMenos.toFixed(2).toString().replace('.',',')}. </br>`)
} else if (maças > 12) {
    document.write(`O valor total da compra é de: R$${maçasMais.toFixed(2).toString().replace('.',',')}. </br>`)
}

/*10. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome, a idade e o ano
de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
em 2000”.
OBS: Pegue o ano atual como base*/

const nomePessoa = prompt(`Insira seu nome:`)
const idadePessoa = Number(prompt(`Insira sua idade:`))
const AnodeNascimento = 2023 - idadePessoa

document.write(`Nome:${nomePessoa}, Idade:${idadePessoa}, nasceu em ${AnodeNascimento}. </br>`)

/*11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;*/

const num = prompt('Digite um número')
const Ntotal = num/2

if(num/2 == 0){
    document.write(`O ${num} é par. </br>`)
} else if (num/2 !== 0) {
    document.write(`O ${num} é impar. </br>`)
}

/*12. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

const AnoAtual = 2023 
const AnoNasci = Number(prompt('Ensira o ano em que nasceu:'))
const CalculoAno = (AnoAtual - AnoNasci)

if (CalculoAno < 16 ) {
    document.write('Você não pode votar')
} else if (CalculoAno > 16) {
    document.write('Você pode votar.')
}