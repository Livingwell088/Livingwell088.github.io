let count = 0;
window.onload = function (){
    fetch('/getExperiences', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => (response.json()))
        .then((json) => {
            json.forEach((item) => {
                console.log(item);

                let container = document.getElementById("mainTimeline");
                let timeline = document.createElement("div");
                if ((count++ % 2) === 0){
                    timeline.className = "timeline left";
                }
                else{
                    timeline.className = "timeline right";
                }

                let card = document.createElement("div");
                card.className = "card";

                let card_body = document.createElement("div");
                card_body.className = "card-body p-4";

                let title = document.createElement("h3");
                title.innerHTML = item.company;

                let position = document.createElement("h5");
                position.innerHTML = item.position;

                let obj = document.createElement("div");
                let acc = document.createElement("div");

                obj.className = "card";
                obj.style.width = "80%";
                obj.style.textAlign = "left";

                acc.className = "card";
                acc.style.width = "80%";
                acc.style.textAlign = "left";

                let obj_body = document.createElement("div");
                obj_body.className = "card-body p-4"
                let acc_body = document.createElement("div");
                acc_body.className = "card-body p-4"

                for (let i = 0; i < item.objectives.length; i++){
                    let current = document.createElement("p");
                    current.innerHTML = item.objectives[i];
                    obj_body.appendChild(current);
                }

                for (let j = 0; j < item.accomplishments.length; j++){
                    let current = document.createElement("p");
                    current.innerHTML = item.accomplishments[j];
                    acc_body.appendChild(current);
                }

                let obj_header = document.createElement("div");
                let acc_header = document.createElement("div");

                obj_header.className = "card-header";
                acc_header.className = "card-header";

                obj_header.innerHTML = "Objectives";
                acc_header.innerHTML = "Accomplishments";

                card_body.appendChild(title);
                card_body.appendChild(position);

                obj.appendChild(obj_header);
                acc.appendChild(acc_header);

                obj.appendChild(obj_body);
                acc.appendChild(acc_body);

                card.appendChild(card_body);

                card.appendChild(obj);
                card.appendChild(acc);

                timeline.appendChild(card);

                container.appendChild(timeline);
            })
        })
}