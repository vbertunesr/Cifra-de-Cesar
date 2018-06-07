1. Prompt que solicita que o usuário insisa a frase a ser codificada. Foi colocada o método toUpperCase para que o programa converta letras minusculas para maiusculas;

2. Se o usuário digitar números ou retornar um campo vazio, aparecerá um alert solicitando que digite apenas letras;

3. São criadas duas variaveis distintas, uma para que armazene a palavra codificada e a palavra decodificada;

4. A seguir temos duas funções que são chamadas, cipher() e decipher();

5. A função cipher tem o objetivo de codificar a palavra no qual o usuário inseriu; Length foi usao para messar a quantidade de letras inputadas e a var quantidadeLetras irá guardar este valor;

6. For irá fazer o loop nas letras inputadas, e junto com o charCodeAT fara a codificação da palavra correspondente a tabela ASCII.

7. Dentro da var codigoCalculado é aplicado a formula cifra de César, que em seguida, com o método String.fromCharCode  retorna a palavra/frase criada uma sequência especifica ao usar o charCodeAt;

8. Após este processo, aparecerá um alert com a frase codificada com a cifra de César;

9. Já a função decipher() decodifica a palavra/frase codificada anteriormente pela cifra de César; Note que a fórmula faz exatamente o inverso, e retorna a palavra/frase decodificada;

10. Por fim retorna um alert com a frase/palavra decodificada, em seguida.

![Fluxograma Cifra de César](Fluxograma Cifra de César)