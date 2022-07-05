const elIncrBtn = document.querySelectorAll(".js-incr-btn");
const elDecrBtn = document.querySelectorAll(".js-decr-btn");
const elCartCount = document.querySelectorAll('.js-cart-count');
const elCartPrice = document.querySelectorAll('.js-cart-price');


if (elIncrBtn) {
    elIncrBtn.forEach(function(item, index) {
        const myVar = elCartPrice[index].textContent;
        // let count = elCartCount[index].textContent;
        elIncrBtn[index].addEventListener('click', function () {
            elCartCount[index].textContent++;
            // count++;
            // console.log(count);
            // elCartPrice[index].textContent = count * myVar;
            elCartPrice[index].textContent = elCartCount[index].textContent * myVar;
        });
    });
}

if (elDecrBtn) {
    elDecrBtn.forEach(function (item, index) {
        const myVar = elCartPrice[index].textContent;
        // let count = elCartCount[index].textContent;
        elDecrBtn[index].addEventListener('click', function () {
            if (elCartCount[index].textContent > 0) {
                elCartCount[index].textContent--;
                // count --;
                // console.log(count);
                elCartPrice[index].textContent = elCartCount[index].textContent * myVar;
                // console.log(elCartCount[index].textContent);
                // console.log(myVar);
            }
        });
    });
}