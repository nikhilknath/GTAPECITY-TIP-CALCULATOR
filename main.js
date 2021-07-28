
//declaring btn variable 

let btn = document.getElementById('btn');

//To execute the function when the user clicks on the button element.
btn.addEventListener('click', function(){
    
    // taking bill amount value from the user and storing it in billAmount variable
    let billAmount = document.getElementById('bill-amount').value;
    // taking tip percentage value from the user and storing it in tipPercentage variable
    let tipPercentage = document.getElementById('tip-percentage').value;
    // taking no. of people value from the user and storing it in noOfpeople variable
    let noOfpeople = document.getElementById('no-people').value;


    //declaring tip per person variable and storing the calculated value of it.

    let tipPerperson =  (billAmount*tipPercentage*0.01)/noOfpeople;

   //to display Tip person value in browser.
    document.getElementById('tip-amount').innerHTML = "$".concat(tipPerperson);

    //Calculating and displaying total bill in browser.
    document.getElementById('total-bill').innerHTML = "$".concat(parseFloat(billAmount/noOfpeople)+parseFloat(tipPerperson));
  


})


