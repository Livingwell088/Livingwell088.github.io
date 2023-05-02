let count = 0;
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

                console.log(Math.floor(count / 2));


                let row = document.getElementById("row");


                let col = document.createElement("div");
                col.className = "col-xs-12 col-sm-12 col-md-4";


                let card = document.createElement("div");
                card.className = "card"; // h-100

                let name = document.createElement("h4");
                name.className = "card-title"
                name.innerHTML = item.projectName;


                let button = document.createElement("button");
                button.id = "button";
                button.className = "btn btn-secondary btn-lg btn-block text-truncate mt-auto";
                button.type = "button";
                button.onclick = function () {

                }

                button.innerHTML = "View Description";

                // const img = new Image();
                let img = document.createElement("img")
                img.className = "card-img-top"
                img.src = item.photo;
                img.style.width = "100%";
                img.style.backgroundClip = "padding-box";
                img.style.backgroundPosition = "center";

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(button);
                col.appendChild(card);
                row.appendChild(col);

                count++;
            })
        })

}