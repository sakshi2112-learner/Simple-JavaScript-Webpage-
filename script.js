function display() {
    const p = document.getElementById("input").value;
    const q = document.getElementById("io").value;
    const r = document.getElementById("myDropdown").value;

const output = document.getElementById("datatype");
output.innerHTML = "Hello, " + p + "<br>Your number is : " + q + "<br>boolean is : "+ r ;

}


function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    if (operation === "add") {
      result = num1 + num2;
    } else if (operation === "sub") {
      result = num1 - num2;
    } else if (operation === "mul") {
        result = num1 *num2;
    } else if (operation === "div") {
        result = num1/num2;
    }
    document.getElementById("result").innerHTML = `Result: ${result}`;
  
      
       let result2 = "";

       if (num1 % 2 === 0) {
           result2 += num1 + " is even.<br>";
       } else {
           result2 += num1 + " is odd.<br>";
       }
       
       if (num2 % 2 === 0) {
           result2 += num2 + " is even.";
       } else {
           result2 += num2 + " is odd.";
       }
       
       document.getElementById("modulas").innerHTML = result2;
    }



    

    function compare() {

        
        const numb1 = parseInt(document.getElementById("numb1").value);
        const numb2 = parseInt(document.getElementById("numb2").value);
        
       let op = "";

       if (numb1 == numb2) {
           op +=  " both are equal<br>";
       } else {
           op += " both are not equal<br>";
       }
       
       if (numb1 > numb2) {
           op += numb1 + " is greater than " + numb2 + "<br>";
       } else if(numb1 < numb2)  {
        op += numb1 + " is smaller than " + numb2 + "<br>";

       }
       
       document.getElementById("comp").innerHTML = op;

    }

    function logical() {
          
        let nu1 = parseInt(document.getElementById("nu1").value);
        let nu2 = parseInt(document.getElementById("nu2").value);

        let lo = "";

        if (nu1 > 15 && nu2 > 15) {
            lo +=  " both are greater than 15<br>";
        } 
        
        if (nu1 > 5 || nu2 > 5) {
            lo += "either number is greater than 5 <br>";
        } 
        
        if(nu1 != nu2)  {
         lo += nu1 + " is not equal to " + nu2 + "<br>";
        }
        
        document.getElementById("log").innerHTML = lo;


    }