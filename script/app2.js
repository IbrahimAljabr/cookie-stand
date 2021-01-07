'use strict';

var timeArr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm',
    '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var td;
var cell;
var tr;
var table;
var totalCity = 0;
var cityArr = [];


function randonNumber(max, min) {
    return Math.floor(Math.random() * (max, min) + min);
}

function City(cityName, max, min, avCookie) {
    this.cityName = cityName;
    this.max = max;
    this.min = min;
    this.avCookie = avCookie;
    this.cookiesPerHour = [];
    this.totol = 0;
    cityArr.push(this);

}

City.prototype.customerNumber = function () {
    return randonNumber(this.max, this.min)

}

City.prototype.sellPerHour = function () {

    for (let index = 0; index < timeArr.length; index++) {

        this.cookiesPerHour.push(Math.floor(this.customerNumber() * this.avCookie));

    }

}

City.prototype.addCityRow = function () {

    tr = document.createElement('tr');
    table.appendChild(tr);

    td = document.createElement('td');
    td.textContent = this.cityName;
    tr.appendChild(td);


    this.sellPerHour();

    for (let index = 0; index < timeArr.length; index++) {

        td = document.createElement('td');
        td.textContent = this.cookiesPerHour[index];
        tr.appendChild(td);
        this.totol += this.cookiesPerHour[index];
    }

    td = document.createElement('td');
    td.textContent = this.totol;
    tr.appendChild(td);

}

// City.prototype

var seattle = new City("seattle", 65, 23, 6.5);
var tokyo = new City("tokyo", 24, 3, 1.2);
var dubai = new City("dubai", 38, 11, 3.7);
var paris = new City("paris", 38, 20, 2.3);
var lima = new City("lima", 16, 2, 4.6);






// //create table   
var tr
var td
var parentElement = document.getElementById("divid");
var table = document.createElement('table');
    table.setAttribute("id", "myTable");
    parentElement.appendChild(table);





function header() {

    tr = document.createElement('td');
    table.appendChild(tr);

    for (let index = 0; index < timeArr.length; index++) {

        td = document.createElement('th');
        td.textContent = timeArr[index];
        table.appendChild(td);

    }

    
    td = document.createElement('th');
    td.textContent = "Total";
    table.appendChild(td);

}


function fotter() {



    tr = document.createElement('tr');
    table.appendChild(tr);

    td = document.createElement('td');
    td.textContent = "Totsdasdale";
    table.appendChild(td);


    tr.setAttribute("id", "mytr");

    var fintTotal = 0;
    for (let index = 0; index < timeArr.length; index++) {

        var totalPerHour = 0;

        for (let i = 0; i < cityArr.length; i++) {

            cityArr[i].cookiesPerHour[index];
            totalPerHour += cityArr[i].cookiesPerHour[index];

        }
        td = document.createElement('td');
        td.textContent = totalPerHour;
        table.appendChild(td);
        fintTotal += totalPerHour;
    }

    td = document.createElement('td');
    td.textContent = fintTotal;
    table.appendChild(td);

}


// var addNewCity=document.getElementById("addCityForm");

// addNewCity.addEventListener('submit',function(event){
//     event.defaultPrevented();



// console.log(addNewCity);


function addNewSubmit() {
    var newrow = document.getElementById("addCityForm");
    
    return newrow.addEventListener("submit", eventNew);
}

function eventNew(event) {

    event.preventDefault();

    var newCityName = event.target.cityName.value;
    var max = parseInt(event.target.max.value);
    var min = parseInt(event.target.min.value);
    var avgCo = parseFloat(event.target.avg.value);

    var newCitySubmit = new City(newCityName, max, min, avgCo);

    
    // console.log(document.getElementById("mytr"));
    // table.innerHTML("");
    

    
    newCitySubmit.addCityRow();

    fotter();
    
    console.log("hello");
}




header();


for (let index = 0; index < cityArr.length; index++) {

    cityArr[index].addCityRow();
}



fotter();

addNewSubmit();




// table = document.createElement("TABLE");
// table.setAttribute("id", "myTable");
// document.body.appendChild(table);


// function header(){

//     //time
//     tr = document.createElement("TR");
//     tr.setAttribute("id", "myTrtime");
//     document.getElementById("myTable").appendChild(tr);

//     td = document.createElement("TD");
//     cell = document.createTextNode("    ");
//     td.appendChild(cell);
//     document.getElementById("myTrtime").appendChild(td);
//     for (let index = 0; index < timeArr.length; index++) {



//     tr = document.createElement("TR");
//     tr.setAttribute("id", "myTrtime");
//     document.getElementById("myTable").appendChild(tr);

//     td = document.createElement("TD");
//     cell = document.createTextNode(timeArr[index]);
//     td.appendChild(cell);
//     document.getElementById("myTrtime").appendChild(td);
//     }

//     td = document.createElement("TD");
//         cell = document.createTextNode("Total");    
//         td.appendChild(cell);
//         document.getElementById("myTrtime").appendChild(td);
// }

// var name="hello";
// City.prototype.addCity=function(){

//     tr = document.createElement("tr");
//     tr.setAttribute("id", 'name');
//     document.getElementById("myTable").appendChild(tr);

//     td = document.createElement("TD");
//     td.textContent = this.cityName;
//     tr.appendChild(td);
//     document.getElementById('name').appendChild(td);

//         for (let index = 0; index < timeArr.length; index++) {

//             //create columes
//             td = document.createElement("TD");
//             var ccell = document.createTextNode(this.customerNumber(this.max, this.min));
//             cell=ccell
//             td.appendChild(cell);
//             document.getElementById('name').appendChild(td);
//             totalCity=totalCity+(this.customerNumber(this.max, this.min));
//         console.log(totalCity);
//         }

//         td = document.createElement("TD");
//         td.textContent = totalCity;
//         tr.appendChild(td);



// }
// header()
// seattle.addCity();


// function newCity(event){

//     var newCityName=event.target.name.value;
//     var max=event.target.name.value;
//     var min=event.target.name.value;
//     var avgCo=event.target.name.value;
//     var newloc = new City(newCityName,max,min,avgCo);

// }

// var addNewCity=document.getElementById("addCityForm");

// addNewCity.addEventListener('submit',function(event){
//     event.defaultPrevented();

//     var newCityName=event.target.name.value;
//     var max=event.target.name.value;
//     var min=event.target.name.value;
//     var avgCo=event.target.name.value;
//     var newloc = new City(newCityName,max,min,avgCo);

//     console.log();


// });