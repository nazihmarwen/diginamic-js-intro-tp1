function fibonacci(nbr) {
   var n1 = 0;
   var n2 = 1;
   var somme = 0;
   console.log(n1,n2);
   for(let i = 2; i <= 20; i++){
      //somme des deux derniers nombres
      somme = n1 + n2; 
      //assigner la dernière valeur à la première
      n1 = n2; 
      //attribuer la somme au dernier
      n2 = somme; 
    console.log(somme);
   }
 
}
fibonacci(20);