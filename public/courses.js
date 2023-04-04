window.onload = function (){
    fetch('/getCourses', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => (response.json()))
        .then((json) => {
            json.forEach((item) => {
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

        })
})
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