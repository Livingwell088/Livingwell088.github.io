
let number1 = 0;
let number2 = null;

let target = null;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function test() {
    number2 = document.getElementById("number").value;


    let q = document.createElement("p");
    q.id = "q"
    q.innerHTML = "Range: " + number1.toString() + ' - ' + number2.toString()

    document.getElementById("heading").appendChild(q)
    document.getElementById("f").style.display = "none";

    console.log(number1)
    console.log(number2)

    target = getRandomInt(number2)

    document.getElementById("ans").hidden = false;

    console.log(target)
}

function refreshRange(){
    console.log("Lower Bound: " + number1.toString())
    console.log("Upper Bound: " + number2.toString())
    let q = document.getElementById("q")
    q.innerHTML = "Range: " + number1.toString() + ' - ' + number2.toString()
}

function guessCorrect() {
    let q = document.getElementById("q")
    q.innerHTML = "Target: " + number1.toString()
}


function test1() {

    let guess = document.getElementById("guess");

    document.getElementById("guess").min = number1;
    document.getElementById("guess").max = number2;

    let heading = document.getElementById("heading")

    // console.log("Guess: " + guess.value)
    // console.log("Lower Bound: " + number1.toString())
    // console.log("Upper Bound: " + number2.toString())

    if (parseInt(guess.value) > number2){

        console.log("Guess: " + guess.value)
        console.log("Lower Bound: " + number1.toString())
        console.log("Upper Bound: " + number2.toString())

        let current = document.createElement("div")
        let alert = document.createElement("strong")
        current.className = "alert alert-danger"
        alert.innerHTML = "Number should be less than upper bound of range"

        current.appendChild(alert)
        heading.appendChild(current)

        setTimeout(() => {
            current.style.display = "none";
        }, 2000)

        document.getElementById("ans").reset()
    }
    else if (parseInt(guess.value) < number1){
        let current = document.createElement("div")
        let alert = document.createElement("strong")
        current.className = "alert alert-danger"
        alert.innerHTML = "Number should be greater than lower bound of range"

        current.appendChild(alert)
        heading.appendChild(current)

        setTimeout(() => {
            current.style.display = "none";
        }, 2000)

        document.getElementById("ans").reset()
    }

    else{
        if (parseInt(guess.value) === target){
            number1 = parseInt(guess.value)
            number2 = parseInt(guess.value)
            let current = document.createElement("div")
            let alert = document.createElement("strong")
            current.className = "alert alert-success"
            alert.innerHTML = "Nice"

            current.appendChild(alert)
            heading.appendChild(current)

            guessCorrect()
            document.getElementById("ans").reset()
        }
        else if (parseInt(guess.value) > target){
            number2 = parseInt(guess.value)
            refreshRange()
            document.getElementById("ans").reset()
        }
        else{
            number1 = parseInt(guess.value)
            refreshRange()
            document.getElementById("ans").reset()
        }
    }

    // console.log(guess)
}


window.onload = function () {

}





