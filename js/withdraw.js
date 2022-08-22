
//1. add event handler with the withdraw button
// 2. get the withdraw amount
// 3.clear the withdraw input field
// 4.get previous withdraw total
// step 5. calculate the total element
// step 6.get previous balance
// step 7.  total balance add & minas


// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawfield = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawfield.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3
    withdrawfield.value = '';

    // step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step 6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalStrign = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStrign);

    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})