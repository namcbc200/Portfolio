
function genNewPassword(min, max) {

    min = 5;
    max = 10;

    // Loop 10 times
    for (var i = 0; i < 10; i++) {
        // Generate an integer between 1 & 10
        // var num = Math.floor(Math.random() * max) + min;

        var num = Math.floor(Math.random() * (max - min + 1) ) + min;

        // Display in console
        console.log(num);
    }
}
    console.log(genNewPassword);


