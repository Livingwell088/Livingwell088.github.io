
const express = require("express"),
    app = express()

app.use(express.static("public"));
app.use(express.static("views"));

app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const {response} = require("express");
const uri = "mongodb+srv://admin:admin@portfolio.eyhaayo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const education = [
    {
        degree: "Bachelor's Degree",
        school: "Worcester Polytechnic Institute",
        graduation: "Graduation: May 2023",
        major: "Major: Computer Science",
        photo: "",
    }
]


const experiences = [
    {
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
        company: "Ming House",
        position: "Restaurant Manager",
        start: "October 2018",
        end: "Present",
        objectives: [],
        accomplishments: [],
        photo: "",

    },
    {
        company: "ASSISTments",
        position: "Student Content Builder",
        start: "August 2019",
        end: "May 2021",
        objectives: [],
        accomplishments: [],
        photo: "",

    }
]

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
        photo: "",
        used: []
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
        photo: "",
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
        photo: "",
        used: ["JavaScript", "HTML", "CSS", "BootStrap", "React", "NodeJS", "Express"]
    },
    {
        projectName: "Personal Portfolio Website",
        link: "",
        code: "",
        description: [],
        photo: "",
        used: ["JavaScript", "HTML", "CSS", "BootStrap", "NodeJS", "Express"]
    },
    {
        projectName: "IQP: Assessing Opportunity for Air Pollution Mitigation in Chelsea, MA",
        link: "",
        code: "",
        description: [],
        photo: "",
        used: []
    },
    {
        projectName: "Great Project Seminar: Heal The World",
        link: "",
        code: "",
        description: [],
        photo: "",
        used: []
    },


]


let collection = null;
let account = null;


client.connect()
    .then( () => {
        // will only create collection if it doesn't exist
        return client.db( 'Portfolio' ).collection( 'Education' )
    })
    .then( __collection => {
        collection = __collection;
        // blank query returns all documents
        return collection.find({ }).toArray()
    })
    .then( console.log )

    .then( () => {
        return (client.db("Portfolio").collection("Experiences"));
    })
    .then( __account => {
        account = __account;
        // blank query returns all documents
        return account.find({ }).toArray()
    })
    .then( console.log )

    .then( () => {
        return (client.db("Portfolio").collection("Projects"));
    })
    .then( __account => {
        account = __account;
        // blank query returns all documents
        return account.find({ }).toArray()
    })
    .then( console.log )




app.get( '/', (req, res) => {
    if (collection !== null){
        collection.find({ }).toArray().then(result => res.json(result))
    }
    console.log("Testing");
    client.db( 'Portfolio' ).collection( 'Education' ).insertOne(education[0]).then(console.log);
})




app.get('/starting', (req, res) => {

    client.db("Portfolio").collection("Education").countDocuments({}).then((count_documents) => {
        console.log(count_documents);

        if (count_documents === 0){
            client.db("Portfolio").collection("Education").insertOne(education[0]).then(result => console.log(result));
        }
        else {
        }
    })

    client.db("Portfolio").collection("Experiences").countDocuments({}).then((count_documents) => {
        console.log(count_documents);

        if (count_documents === 0){
            client.db("Portfolio").collection("Experiences").insertMany(experiences).then(result => console.log(result));
        }
        else {
        }
    })

    client.db("Portfolio").collection("Projects").countDocuments({}).then((count_documents) => {
        console.log(count_documents);

        if (count_documents === 0){
            client.db("Portfolio").collection("Projects").insertMany(projects).then(result => console.log(result));
        }
        else {
        }
    })


})

app.get('/getProjects', (req, res) => {
    (client.db("Portfolio").collection("Projects").find({}).toArray()).then(result => res.json(result));
})



app.listen(process.env.PORT || 3000);


