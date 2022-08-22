// 1. add eventlistener to the deposit button
// 2.get deposit amount from the deposit input field
// 2.5.convert strign deposit amount to a number type
//3. clear the deposite input field after the getting number
// 4.get the previous deposit total
// 5.calculate new deposit total and set the value to the deposit total
// 6.get current balance
// step 7.calculate the new balance and set it to the balance total element

// step.1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2
    const depositField = document.getElementById('deposit-field');
    newDepositAmountStrign = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStrign);
    // step 3.
    depositField.value = '';
    // step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStrign = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStrign);
    //    step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step.6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalStrign = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalStrign);

    // step. 7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})