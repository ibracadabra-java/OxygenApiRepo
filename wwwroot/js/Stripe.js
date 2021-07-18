var stripe = Stripe("pk_test_wXIajECkCDRlx9m2kMCzm7Ir00V8TMeEg5");
var checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
    var data = {
        paymentstype: document.getElementById("payment").value,
        Amount: document.getElementById("amount").value,
        Currency: document.getElementById("currency").value,
        ProductName: document.getElementById("prodname").value,
        Mode: document.getElementById("mode").value
    };
    var url = "/CreateSession";

    $.post(url, { data }, function (data) {

        return stripe.redirectToCheckout({ sessionId: data.id });
    });    
      
});