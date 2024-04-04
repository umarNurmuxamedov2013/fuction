let a = prompt("Birinchi taxminiy son kiriting!");
let b = prompt("Ikkinchi taxminiy son kiriting!");

function calculate() {
    if (a < b) {
        alert(a + " dan " + b + " katta");
    } else if (a > b) {
        alert(b + " dan " + a + " katta")
    } else {
        alert("Ikkala son xam teng")
    }
}

calculate()