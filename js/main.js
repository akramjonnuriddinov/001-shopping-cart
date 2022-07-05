const elIncrBtn = document.querySelectorAll(".js-incr-btn");
const elDecrBtn = document.querySelectorAll(".js-decr-btn");
const elCartCount = document.querySelectorAll('.js-cart-count');
const elCartPrice = document.querySelectorAll('.js-cart-price');


if (elIncrBtn) {
    elIncrBtn.forEach(function(item, index) {
        const myVar = elCartPrice[index].textContent;
        let count = 1;
        elIncrBtn[index].addEventListener('click', function () {
            elCartCount[index].textContent++;
            count++;
            elCartPrice[index].textContent = count * myVar;
        });
    });
}

if (elDecrBtn) {
    elDecrBtn.forEach(function (item, index) {
        const myVar = elCartPrice[index].textContent;
        let count = 1;
        elDecrBtn[index].addEventListener('click', function () {
            if (elCartCount[index].textContent > 0) {
                elCartCount[index].textContent--;
                elCartPrice[index].textContent = count * myVar;
                count --;
            }
        });
    });
}