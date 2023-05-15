console.log('hi');

const purchasePrice = document.querySelector(".js_purchase_price");
const rentPrice = document.querySelector(".js_rent_price");
const reset = document.querySelector(".js_reset");
const calculate = document.querySelector(".js_calculate");
const output = document.querySelector(".js_output");

function getPurchasePrice() {
    let result = 0;
    calculate.onclick = () => {
        console.log(purchasePrice.value, rentPrice.value);
        result = (+rentPrice.value * 12 * 100 / +purchasePrice.value).toFixed(2);
        // result = result.toFixed(2);
        console.log(result);
        output.value = result;
    }
};

function resetForm() {
    reset.onclick = () => {
        purchasePrice.value = '';
        rentPrice.value = '';
        output.value = '';
        console.log('reset');
    }
};

resetForm();
getPurchasePrice();