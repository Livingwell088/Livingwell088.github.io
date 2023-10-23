const experiences = [
    {
        num: 1,
        company: "Ming House",
        position: "Restaurant Manager",
        start: "August 2022",
        end: "Present",
        objectives: [],
        accomplishments: [],
        photo: "",
    },
    {
        num: 2,
        company: "Shaw Industries",
        position: "Software Engineer Intern/Co-op",
        start: "May 2022",
        end: "August 2022",
        objectives: ["Display the ability to quickly absorb, comprehend, and leverage new processes, concepts and technology.",
            "Display the ability to function as the member of an agile team and work in a collaborative environment. This includes business partners and stakeholders.",
            "Demonstrate the ability to gather requirements, design and build a catalog item and supporting workflow independently"],
        accomplishments: ["Contributed to Shaw Industries Service Portal projects, including building catalog items,automating backend workflow, and frontend features.",
            "Developed catalog items used by hundreds of users, making it easier for employees to request access to certain premises using ServiceNow, JavaScript, HTML, and CSS.",
            "Automated workflow for many access requesting items on the portal, minimizing time and increasing organization.",
            "Gathered requirements from business owners and stakeholders, created epics and stories, and conducted testing by documenting complete test scripts for users through the agile methodology.",
            "Migrated existing features from old production to new production during release and removed unused features."],
        photo: "",
    },
    {
        num: 3,
        company: "ASSISTments",
        position: "Student Content Builder",
        start: "August 2019",
        end: "May 2021",
        objectives: [],
        accomplishments: [],
        photo: "",

    },
    {
        num: 4,
        company: "Ming House",
        position: "Restaurant Manager",
        start: "October 2018",
        end: "May 2022",
        objectives: [],
        accomplishments: [],
        photo: "",
    }
]

let count = 0;
window.onload = function (){

    for (let i = 0; i < experiences.length; i++){

        item = experiences[i]

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

    }

}