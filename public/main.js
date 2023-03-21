window.onload = function (){
    let user = null;
    fetch('/starting', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => (response.text()))

}