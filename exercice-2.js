var nbr = prompt("Choisir un chiffre :");



function fibonacci(nbr) {
   var n1 = 0;
   var n2 = 1;
   var somme = 0;
    document.write(n1 + "<br/>");
    document.write(n2 +"<br/>");
   for(let i = 2; i <= nbr; i++){
      //somme des deux derniers nombres
      somme = n1 + n2; 
      //assigner la dernière valeur à la première
      n1 = n2; 
      //attribuer la somme au dernier
      n2 = somme; 
       document.write(somme+"<br/>");
   }
 
}
fibonacci(20);