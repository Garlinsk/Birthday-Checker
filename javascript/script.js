
function akanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = document.getElementById("month").value;
    let dayOfBirth = document.getElementById("day").value;
    let gender = document.getElementById("gender").value;

    //validating inputs
    if (yearOfBirth.length !== 4){
        alert("invalid year")
    }

    if (parseInt(monthOfBirth) < 1 || parseInt(monthOfBirth) > 12 ){
        alert("invalid month")
    }

    if (parseInt(dayOfBirth) < 1 || parseInt(dayOfBirth) > 31 ){
        alert("invalid date")
    }

    let CC = parseInt(yearOfBirth.substr(0,2));
    let YY = parseInt(yearOfBirth.substr(2,));
    let MM = parseInt(monthOfBirth);
    let DD = parseInt(dayOfBirth);


    let d = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7);

    //Arrays
    let daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    let akanMales = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
    
    let akanFemales = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];

    let dayOfWeek = daysOfWeek[d];

    //Calculate gender
    let name;
    if (gender === "male") {
    name = akanMales[d];
    }else if (gender === "female") {
    name = akanFemales[d];
    }else {
    alert("Please select Gender")
    }

    //let now display to the html
    document.getElementById("daysOfWeek").innerHTML = daysOfWeek[d]
    document.getElementById("akanName").innerHTML = name;


}