const x = document.getElementById("i")
console.log(x)
x.classList.add("red")
x.onclick = () => {
    console.info("Ich wurde geklickt")
    console.log(x.classList)
    change_color()
    //setTimeout(change_color, 1000)
    function change_color() {
        if (x.classList.contains("green")) {
            x.classList.remove("green")
            x.classList.add("red")
        }
        else if (x.classList.contains("red")) {
            x.classList.remove("red")
            x.classList.add("green")
        }
    }
}