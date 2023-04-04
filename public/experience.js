window.onload = function (){
    fetch('/getExperiences', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => (response.json()))
        .then((json) => {
            json.forEach((item) => {
                console.log(item);


            })
        })
}