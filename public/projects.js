const projects = [
    {
        projectName: "7Factor Staffing Tool",
        link: "",
        code: "",
        description: ["Platform for 7Factor to track billable hours, company revenue, and various project resources.",
            "Creating user stories by conducting interviews with the founder and employees.",
            "Developing server-side role based authentication by validating Auth0 roles.",
            "Implementing responsive design to all platforms including phone, tablet, and other nonstandard displays, keeping all functionalities and features using MaterialUI and BootStrap.",
        ],
        photo: "photos/Projects/7Factor.jpg",
        used: ["Java", "Spring", "PostgreSQL", "HTML/CSS", "JavaScript", "ReactJS", "Auth0"]
    },
    {
        projectName: "Hospital Equipment Tracking and Servicing Application",
        link: "",
        code: "",
        description: ["Hospital Servicing Application for the newly merged Mass Brigham Hospital.",
            "Integrated backend service with SQL and MongoDB to add, delete, update, and query information for service request components of the application.",
            "Created a wrapper for SQL and MongoDB databases to switch connections.",
            "Designed and implemented backend API’s and integrated frontend with the APIs.",
            "Increased test coverage of features by writing testable code and Junit tests.",
        ],
        photo: "photos/Projects/hospital.jpg",
        used: ["Java", "JavaFX", "Scene Builder", "Git", "SQL", "MongoDB"]
    },
    {
        projectName: "GitHub(by) Express",
        link: "",
        code: "",
        description: ["A dating/mingling Website for GitHub users to meet people, socialize, find work partners and even potential life partners.",
            "Designed and implemented the server using ExpressJS, as well as the Client Side using JavaScript.",
            "Added OAuth to the application using Github to allow only Github users to login and/or sign up.",
            "Connected the MongoDB database to store all data of each user.",
            "Designed the User Interface using HTML, CSS, JavaScript, BootStrap, and React.",
        ],
        photo: "photos/Projects/github.png",
        used: ["JavaScript", "HTML", "CSS", "BootStrap", "React", "NodeJS", "Express"]
    },
    {
        projectName: "Personal Portfolio Website",
        link: "",
        code: "",
        description: [],
        photo: "photos/Projects/portfolio.jpg",
        used: ["JavaScript", "HTML", "CSS", "BootStrap", "NodeJS", "Express"]
    },
    {
        projectName: "IQP: Assessing Opportunity for Air Pollution Mitigation in Chelsea, MA",
        link: "",
        code: "",
        description: [],
        photo: "photos/Projects/iqp.jpg",
        used: []
    },
    {
        projectName: "Great Project Seminar: Heal The World",
        link: "",
        code: "",
        description: [],
        photo: "photos/Projects/world.jpg",
        used: []
    },
]

let count = 0;
window.onload = function (){

    for (let i = 0; i < projects.length; i++) {
        let item = projects[i];

        console.log(Math.floor(count / 2));


        let row = document.getElementById("row");
        // row.style.alignItems = "stretch"
        // row.className = "h-100"


        let col = document.createElement("div");
        col.className = "col-xs-12 col-sm-12 col-md-4 h-100";


        let card = document.createElement("div");
        card.className = "card h-100"; // h-100
        card.style.height = "100%";

        let name = document.createElement("h4");
        name.className = "card-title"
        name.innerHTML = item.projectName;



        let button = document.createElement("button");
        button.id = ("button" + count.toString());
        button.className = "btn btn-secondary btn-lg btn-block text-truncate ";
        button.type = "button";
        button.style.margin = "0";
        button.setAttribute("data-bs-toggle", "modal")
        button.setAttribute("data-bs-target", "#modal1")
        button.onclick = function() {
            console.log(this.id)
            document.getElementById("modalTitle").innerHTML = item.projectName
            document.getElementById("modalBody").innerHTML = ""

            let list = document.createElement("ul")
            list.className = "list-group"
            for (i in item.description){
                let current = document.createElement("li")
                current.className = "list-group-item"
                current.innerHTML = item.description[i].toString()
                list.appendChild(current)
            }


            list.style.paddingTop = "10%"

            let img = document.createElement("img")
            img.className = "img-fluid"
            img.src = item.photo;
            // img.style.width = "60%";
            img.style.backgroundClip = "padding-box";
            img.style.backgroundPosition = "center";


            document.getElementById("modalBody").appendChild(img);
            document.getElementById("modalBody").appendChild(list);

        }

        button.innerHTML = "View Description";

        // const img = new Image();
        let img = document.createElement("img")
        img.className = "card-img-top"
        img.src = item.photo;
        img.style.width = "100%";
        img.style.backgroundClip = "padding-box";
        img.style.backgroundPosition = "center";

        // <div className="card-footer">
        //     <button type="button" className="btn btn-primary btn-sm btn-block" onClick="location.href = '';">BUY NOW </button>
        // </div>

        let cardFooter = document.createElement("div")
        cardFooter.className = "card-footer"


        card.appendChild(img);

        cardFooter.appendChild(name);
        cardFooter.appendChild(button);
        card.appendChild(cardFooter)

        col.appendChild(card);
        row.appendChild(col);

        count++;
    }

}

// function(this.id) {
// }

function popup(id) {




}