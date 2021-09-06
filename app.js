function updateProductNumber(product , price, isIncrease){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    //update total price

    const productTotal = document.getElementById(product +'-total');
    productTotal.innerText = productNumber * price;

    calculateTotal()
}

function getInput(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

//calculate total price

function calculateTotal(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59 ;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    console.log(totalPrice);

    // update text 

    const subTotalText = document.getElementById('sub-total');
    subTotalText.innerText = subTotal;
    const taxAmountText = document.getElementById('tax-amount');
    taxAmountText.innerText = tax;
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = totalPrice;
}

// handle phone price and quantity
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
})


//handle case price and quantity


document.getElementById('case-plus').addEventListener('click', function(){
   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) +1; */
    updateProductNumber('case', 59, true);
    
});
document.getElementById('case-minus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; */
    updateProductNumber('case', 59, false)
});