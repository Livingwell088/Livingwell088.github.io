
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
        photo: "photos/Projects/7Factor.jpg",
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

const courses = [
    {
        courseNumber: "CS1101",
        name: "Introduction To Program Design",
        date: "2019 A-Term"
    },
    {
        courseNumber: "CS2102",
        name: "Object-Oriented Design Concepts",
        date: "2019 B-Term"
    },
    {
        courseNumber: "CS2303",
        name: "Systems Programming Concepts",
        date: "2020 C-Term"
    },
    {
        courseNumber: "CS2011",
        name: "Introduction To Machine Organization And Assembly Language",
        date: "2020 B-Term"
    },
    {
        courseNumber: "CS3133",
        name: "Foundations Of Computer Science",
        date: "2021 C-Term"
    },
    {
        courseNumber: "CS3043",
        name: "Social Implications Of Information Processing",
        date: "2021 B-Term"
    },
    {
        courseNumber: "CS3733",
        name: "Software Engineering",
        date: "2022 C-Term"
    },
    {
        courseNumber: "CS2223",
        name: "Algorithms",
        date: "2022 D-Term"
    },
    {
        courseNumber: "CS3516",
        name: "Computer Networks",
        date: "2022 D-Term"
    },
    {
        courseNumber: "CS4432",
        name: "Database Systems II",
        date: "2022 D-Term"
    },
    {
        courseNumber: "CS3013",
        name: "Operating Systems",
        date: "2022 A-Term"
    },
    {
        courseNumber: "CS4241",
        name: "Webware: Computational Technology For Network Information Systems",
        date: "2022 A-Term"
    },
    {
        courseNumber: "CS3041",
        name: "Human-Computer Interaction",
        date: "2022 B-Term"
    },
    {
        courseNumber: "CS4342",
        name: "Machine Learning",
        date: "2022 B-Term"
    },
    {
        courseNumber: "Major Qualifying Project (MQP)",
        name: "7Factor Staffing Tool Platform",
        date: "2022 A-Term - 2022 C-Term"
    },
    {
        courseNumber: "CS4233",
        name: "Object-Oriented Analysis And Design",
        date: "2023 C-Term"
    },
    {
        courseNumber: "CS4341",
        name: "Introduction To Artificial Intelligence",
        date: "2023 C-Term"
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

    .then( () => {
        return (client.db("Portfolio").collection("Courses"));
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

    client.db("Portfolio").collection("Courses").countDocuments({}).then((count_documents) => {
        console.log(count_documents);

        if (count_documents === 0){
            client.db("Portfolio").collection("Courses").insertMany(courses).then(result => console.log(result));
        }
        else {
        }
    })


})

app.get('/getProjects', (req, res) => {
    (client.db("Portfolio").collection("Projects").find({}).toArray()).then(result => res.json(result));
})

app.get('/getCourses', (req, res) => {
    (client.db("Portfolio").collection("Courses").find({}).toArray()).then(result => res.json(result));
})



app.listen(process.env.PORT || 3000);


