/*4. Imprima na tela 30 ( trinta ) números ímpares.*/

    let cont = 1;

      for (i = 1; i <= 60; i++) {
    
    if(i % 2 != 0 && cont <= 30) {
  document.write(`${cont}° número :  ${i} <br> `);
  cont++
}
}
   