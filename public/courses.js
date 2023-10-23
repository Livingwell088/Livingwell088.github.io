
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


window.onload = function (){
    console.log("Window loading");
    for (let i = 0; i < courses.length; i++){
        let item = courses[i];

        console.log(item);

        let tbody = document.getElementById("tbody");

        let tr = document.createElement("tr");

        let courseNum = document.createElement("th");
        courseNum.scope = "row";
        courseNum.innerHTML = item.courseNumber;

        let name = document.createElement("td");
        name.innerHTML = item.name;

        let date = document.createElement("td");
        date.innerHTML = item.date;

        tr.appendChild(courseNum);
        tr.appendChild(name);
        tr.appendChild(date);

        tbody.appendChild(tr);

        let year = yearTaken(item.date);
        let col = document.getElementById(year);

        let current = document.createElement("li");
        current.innerHTML = item.courseNumber;


        col.appendChild(current);

    }
}


function yearTaken(date) {
    console.log(date)
    switch(date) {

        case "2019 A-Term":
            return "freshman";

        case "2019 B-Term":
            return "freshman";

        case "2020 C-Term":
            return "freshman";

        case "2020 D-Term":
            return "freshman";

        case "2020 A-Term":
            return "sophomore";

        case "2020 B-Term":
            return "sophomore";

        case "2021 C-Term":
            return "sophomore";

        case "2021 D-Term":
            return "sophomore";


        case "2021 A-Term":
            return "junior";

        case "2021 B-Term":
            return "junior";

        case "2022 C-Term":
            return "junior";

        case "2022 D-Term":
            return "junior";

        case "2022 A-Term":
            return "senior";

        case "2022 B-Term":
            return "senior";

        case "2023 C-Term":
            return "senior";

        case "2023 D-Term":
            return "senior";

        case "2022 A-Term - 2022 C-Term":
            return "senior";

    }
}