function Pilihwarna(value) {
    var tema = document.getElementsByClassName("tema");

    if (value == "Dark") {
        for (let i = 0; i < tema.length; i++) {
            tema[i].style.color = "Lightgreen";
        }
        document.body.style.backgroundColor = value;
    } else {
        for (let i = 0; i < tema.length; i++) {
            tema[i].style.color = "Dark";
        }
        document.body.style.backgroundColor = value;
    }
}