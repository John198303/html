function addGood(form) {
    var $data = JSON.stringify($(form).serialize());
    console.log($data);

    $.ajax({
        url: 'http://localhost:3000/cart',
        type: 'POST',
        data: $data,
        success: function () {

        }
    });
    return false;
}