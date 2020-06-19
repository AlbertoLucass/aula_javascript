
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";// procura o id no html  e executa essa funcao com o texto no formato h3 e em negrito
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.nike.com.br/"); // abrindo outra janela 
    //window.location.href = "https://www.nike.com.br/";  // abrindo outa pagina, mas na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";// resolver o problema para quando existirem dois elementos semelhantes  e coloca o this no html
    // e e nesse caso nao precisa nem do id, pois esta referenciando o elemento
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pronto, carregou");
}

function mudou(elemento){
    console.log(elemento.value);
}

/*function soma(n1,n2){
    return n1+n2;
}

function setReplace(texto,nome,novo_nome){
    return texto.replace(nome,novo_nome);
}
//alert(soma(20,60));
//alert(setReplace("Vai Japão","Japão","Brasil"));

function validarIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
*/

/*var d = new Date();
alert(d.getFullYear());// pegar o mes -> d.getMonth();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*for(var count =0; count < 5;count++){
alert(count);
}*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade"); // inserir valor
if (idade>18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};*/


/*var frutas = [{nome: "Cupuaçu", cor: "Amarelo"},{nome: "Goiaba", cor: "Vermelho"}]
console.log(frutas);                                        // dicionario
alert(frutas[0].nome);*/

/*var fruta = {nome: "Cupuaçu", cor: "Amarelo"}
console.log(fruta.nome);
*/

//var lista = ["cupuaçu", "goiaba", "banana"]; 
//lista.push("jenipapo");
//console.log(lista);
//console.log(lista.length);// tamanho
//console.log(lista.reverse());// inverte a lista
//console.log(lista.toString()); // uma unica letra -> console.log(lista.toString()[0]);
//console.log(lista.join(" - "));// concatena como quiser


//var nome = "Alberto Lucas";
//var idade = 21;
//var idade2 = 10;
//var texto = "Japão é o melhor time do mundo!"
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(texto.replace("Japão","Brasil").toUpperCase()); //----------substituindo var
