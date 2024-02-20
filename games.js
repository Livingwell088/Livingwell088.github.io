
let number1 = 0;
let number2 = null;

let target = null;
let steps = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset1() {
    console.log("Working")
    document.getElementById("ans").hidden = true;

    document.getElementById("reset").hidden = true;

    document.getElementById("f").hidden = false;
    document.getElementById("q").remove()
    document.getElementById("steps").remove()
    document.getElementById("sucessAlert").remove()


}
function test() {
    number2 = document.getElementById("number").value;


    let q = document.createElement("p");
    q.id = "q"
    q.innerHTML = "Range: " + number1.toString() + ' - ' + number2.toString()

    document.getElementById("heading").appendChild(q)
    document.getElementById("f").hidden = true;

    console.log(number1)
    console.log(number2)

    target = getRandomInt(number2)

    document.getElementById("ans").hidden = false;

    document.getElementById("f").reset()
    steps = 0;
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

function refreshSteps() {
    let s = document.getElementById("steps")
    if (s === null) {
        s = document.createElement('p')
        s.id = "steps"
    }
    s.innerHTML = steps.toString()
    document.getElementById("heading").appendChild(s)
}

function test1() {

    refreshSteps()
    let guess = document.getElementById("guess");

    document.getElementById("guess").min = number1;
    document.getElementById("guess").max = number2;

    let heading = document.getElementById("heading")


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
        steps += 1;
        refreshSteps()
        //

        if (parseInt(guess.value) === target){
            number1 = parseInt(guess.value)
            number2 = parseInt(guess.value)
            let current = document.createElement("div")
            let alert = document.createElement("strong")
            current.className = "alert alert-success"
            current.id = "sucessAlert"
            alert.innerHTML = "Nice"

            current.appendChild(alert)
            heading.appendChild(current)

            guessCorrect()
            document.getElementById("ans").reset()
            document.getElementById("ans").hidden = true;

            document.getElementById("reset").hidden = false;




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

}


window.onload = function () {

}





