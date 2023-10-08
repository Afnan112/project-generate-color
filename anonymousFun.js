document.getElementById("mainButton").addEventListener("click", function () {
    var randomColor = generateRandomNumber()
    this.style.backgroundColor = '#' + randomColor;

    setInterval(
        function () {
            var randomColor = generateRandomNumber()
            document.body.style.backgroundColor = "#" + randomColor;
        }, 2000);
})

function generateRandomNumber() {
    return Math.floor(Math.random() * 16777215).toString(16)
}
