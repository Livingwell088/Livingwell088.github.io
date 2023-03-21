window.onload = function (){
    let user = null;
    fetch('/getProjects', {
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