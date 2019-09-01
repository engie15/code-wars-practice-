function addBinary(a,b) {
    let sum = a + b;
    let binary = '';
  
    while ( sum > 0 ) { 
      binary = ( sum % 2 ) + binary; 
      console.log(binary, "binary");
      sum = Math.floor( sum / 2 ); 
    }  
  
    console.log(binary, "result");
    return binary;
  }


  addBinary(1,2);