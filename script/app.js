
totalSeattle = 0;
totalTokyo = 0;
totalDubai = 0;
totalParis = 0;
totalLima = 0;
totalall = 0;

var timeArr = [];


function randomNumber(max, min) {
    return Math.floor(Math.random() * Math.floor(max, min));
}

function City(cityName, max, min, avCookie) {
    this.cityName = cityName;
    this.max = max;
    this.min = min;
    this.avCookie = avCookie;

    this.customerNumber = function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));
    };


}

City.prototype.customerNumber = function (max, min) {
    return Math.floor(Math.random() * Math.floor(max, min));

}


var seattle = new City("seattle", 65, 23, 6.5);
var tokyo = new City("tokyo", 24, 3, 1.2);
var dubai = new City("dubai", 38, 11, 3.7);
var paris = new City("paris", 38, 20, 2.3);
var lima = new City("lima", 16, 2, 4.6);


var td;
var cell;
var tr;
var table;


function header() {


    //create table   
    table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    document.body.appendChild(table);

    //time
    tr = document.createElement("TR");
    tr.setAttribute("id", "myTrtime");
    document.getElementById("myTable").appendChild(tr);

    td = document.createElement("TD");
    cell = document.createTextNode("         ");
    td.appendChild(cell);
    document.getElementById("myTrtime").appendChild(td);


    for (let index = 0; index < 14; index++) {

        if (index <= 6) {
            td = document.createElement("TD");
            cell = document.createTextNode(index + 6 + ":00 Am ");
            td.appendChild(cell);
            document.getElementById("myTrtime").appendChild(td);
        }
        else {

            td = document.createElement("TD");
            cell = document.createTextNode(index - 6 + ":00 Pm");
            td.appendChild(cell);
            document.getElementById("myTrtime").appendChild(td);

        }
    }
    td = document.createElement("TD");
    cell = document.createTextNode("Total");
    td.appendChild(cell);
    document.getElementById("myTrtime").appendChild(td);



}

header();



for (let j = 0; j < 14; j++) { }




//create first row  //seattle

tr = document.createElement("TR");
tr.setAttribute("id", "myTr");
document.getElementById("myTable").appendChild(tr);


td = document.createElement("TD");
cell = document.createTextNode("Seattle");
td.appendChild(cell);
document.getElementById("myTr").appendChild(td);
for (let index = 0; index < 14; index++) {
    

    //create columes
    td = document.createElement("TD");
    cell = document.createTextNode(seattle.customerNumber(seattle.max, seattle.min));
    td.appendChild(cell);
    document.getElementById("myTr").appendChild(td);
    totalSeattle = totalSeattle + (seattle.customerNumber(seattle.max, seattle.min));
    timeArr[0]=(seattle.customerNumber(seattle.max, seattle.min));
}


td = document.createElement("TD");
cell = document.createTextNode(totalSeattle);
td.appendChild(cell);
document.getElementById("myTr").appendChild(td);





//tokyo
tr = document.createElement("TR");
tr.setAttribute("id", "myTr1");
document.getElementById("myTable").appendChild(tr);


td = document.createElement("TD");
cell = document.createTextNode("tokyo");
td.appendChild(cell);
document.getElementById("myTr1").appendChild(td);

for (let index = 0; index < 14; index++) {

    td = document.createElement("TD");
    cell = document.createTextNode(tokyo.customerNumber(tokyo.max, tokyo.min));
    td.appendChild(cell);
    document.getElementById("myTr1").appendChild(td);
    totalTokyo = totalTokyo + (tokyo.customerNumber(tokyo.max, tokyo.min));

}

td = document.createElement("TD");
cell = document.createTextNode(totalTokyo);
td.appendChild(cell);
document.getElementById("myTr1").appendChild(td);




//dubai
tr = document.createElement("TR");
tr.setAttribute("id", "myTr2");
document.getElementById("myTable").appendChild(tr);


td = document.createElement("TD");
cell = document.createTextNode("Dubai");
td.appendChild(cell);
document.getElementById("myTr2").appendChild(td);

for (let index = 0; index < 14; index++) {

    td = document.createElement("TD");
    cell = document.createTextNode(dubai.customerNumber(dubai.max, dubai.min));
    td.appendChild(cell);
    document.getElementById("myTr2").appendChild(td);
    totalDubai = totalDubai + (dubai.customerNumber(dubai.max, dubai.min));

}

td = document.createElement("TD");
cell = document.createTextNode(totalDubai);
td.appendChild(cell);
document.getElementById("myTr2").appendChild(td);



//paris
tr = document.createElement("TR");
tr.setAttribute("id", "myTr3");
document.getElementById("myTable").appendChild(tr);


td = document.createElement("TD");
cell = document.createTextNode("paris");
td.appendChild(cell);
document.getElementById("myTr3").appendChild(td);

for (let index = 0; index < 14; index++) {

    td = document.createElement("TD");
    cell = document.createTextNode(paris.customerNumber(paris.max, paris.min));
    td.appendChild(cell);
    document.getElementById("myTr3").appendChild(td);
    totalParis = totalParis + (paris.customerNumber(paris.max, paris.min));

}
td = document.createElement("TD");
cell = document.createTextNode(totalParis);
td.appendChild(cell);
document.getElementById("myTr3").appendChild(td);




//lima
tr = document.createElement("TR");
tr.setAttribute("id", "myTr4");
document.getElementById("myTable").appendChild(tr);

td = document.createElement("TD");
cell = document.createTextNode("lima");
td.appendChild(cell);
document.getElementById("myTr4").appendChild(td);


for (let index = 0; index < 14; index++) {

    td = document.createElement("TD");
    cell = document.createTextNode(lima.customerNumber(lima.max, lima.min));
    td.appendChild(cell);
    document.getElementById("myTr4").appendChild(td);
    totalLima = totalLima + (lima.customerNumber(lima.max, lima.min));

}
td = document.createElement("TD");
cell = document.createTextNode(totalLima);
td.appendChild(cell);
document.getElementById("myTr4").appendChild(td);


function fotter() {
    //totleperhouer
    tr = document.createElement("TR");
    tr.setAttribute("id", "myTr6");
    document.getElementById("myTable").appendChild(tr);

    td = document.createElement("TD");
    cell = document.createTextNode("Total");
    td.appendChild(cell);
    document.getElementById("myTr6").appendChild(td);


    for (let index = 0; index < 14; index++) {

        td = document.createElement("TD");
        cell = document.createTextNode((lima.customerNumber(lima.max, lima.min))+(paris.customerNumber(paris.max, paris.min))
        +(dubai.customerNumber(dubai.max, dubai.min))+(seattle.customerNumber(seattle.max, seattle.min))+(tokyo.customerNumber(tokyo.max, tokyo.min)));
        td.appendChild(cell);
        document.getElementById("myTr6").appendChild(td);

    }

    totalall = totalSeattle + totalTokyo + totalDubai + totalLima + totalParis;

    td = document.createElement("TD");
    cell = document.createTextNode(totalall);
    td.appendChild(cell);
    document.getElementById("myTr6").appendChild(td);

}




fotter();









// var Seattle = {
//     max: 65,
//     min: 23,
//     avCookie: 6.5,

//     customerNum: function (max, min) {
//         return Math.floor(Math.random() * Math.floor(max, min));
//     }
// }





// for (let index = 0; index < 14; index++) {


//     var ul1 = document.createElement("UL");
//     ul1.setAttribute("id", "myUL");
//     document.body.appendChild(ul1);


//     if (index <= 6) {


//         var liSeattle = document.createElement("LI");
//         var liTextSeattle = document.createTextNode(index + 6 + ":00 Am: " + Seattle.customerNum(Seattle.max, Seattle.min) + " cookies in Seattle");
//         liSeattle.appendChild(liTextSeattle);
//         document.getElementById("myUL").appendChild(liSeattle);

//     } else {

//         var liSeattle = document.createElement("LI");
//         var liTextSeattle = document.createTextNode(index - 6 + ":00 Pm: " + Seattle.customerNum(Seattle.max, Seattle.min) + " cookies in Seattle");
//         liSeattle.appendChild(liTextSeattle);
//         document.getElementById("myUL").appendChild(liSeattle);
//     }

//     totalSeattle = totalSeattle + Seattle.customerNum(Seattle.max, Seattle.min)

// }
// console.log("totalSeattle = " + totalSeattle + " cookies");






// var Tokyo = {
//     max: 24,
//     min: 3,
//     avCookie: 1.2,


//     customerNum: function (max, min) {
//         return Math.floor(Math.random() * Math.floor(max, min));
//     }

// }

// for (let index = 0; index < 14; index++) {


//     var ul1 = document.createElement("UL");
//     ul1.setAttribute("id", "myUL");
//     document.body.appendChild(ul1);


//     if (index <= 6) {


//         var liTokyo = document.createElement("LI");
//         var liTextTokyo = document.createTextNode(index + 6 + ":00 Am: " + Tokyo.customerNum(Tokyo.max, Tokyo.min) + " cookies in tokyo");
//         liTokyo.appendChild(liTextTokyo);
//         document.getElementById("myUL").appendChild(liTokyo);

//     } else {

//         var liTokyo = document.createElement("LI");
//         var liTextTokyo = document.createTextNode(index - 6 + ":00 Pm: " + Tokyo.customerNum(Tokyo.max, Tokyo.min) + " cookies in tokyo");
//         liTokyo.appendChild(liTextTokyo);
//         document.getElementById("myUL").appendChild(liTokyo);
//     }

//     totalTokyo = totalTokyo + Tokyo.customerNum(Tokyo.max, Tokyo.min)

// }






// var Dubai = {
//     max: 38,
//     min: 11,
//     avCookie: 3.7,


//     customerNum: function (max, min) {
//         return Math.floor(Math.random() * Math.floor(max, min));
//     }

// }

// for (let index = 0; index < 14; index++) {

//     var ul1 = document.createElement("UL");
//     ul1.setAttribute("id", "myUL");
//     document.body.appendChild(ul1);


//     if (index <= 6) {


//         var liDubai = document.createElement("LI");
//         var liTextDubai = document.createTextNode(index + 6 + ":00 Am: " + Dubai.customerNum(Dubai.max, Dubai.min) + " cookies in dubai");
//         liDubai.appendChild(liTextDubai);
//         document.getElementById("myUL").appendChild(liDubai);

//     } else {

//         var liDubai = document.createElement("LI");
//         var liTextDubai = document.createTextNode(index - 6 + ":00 Pm: " + Dubai.customerNum(Dubai.max, Dubai.min) + " cookies in dubai");
//         liDubai.appendChild(liTextDubai);
//         document.getElementById("myUL").appendChild(liDubai);
//     }

//     totalDubai = totalDubai + Dubai.customerNum(Dubai.max, Dubai.min)
// }





// var Paris = {
//     max: 38,
//     min: 20,
//     avCookie: 2.3,


//     customerNum: function (max, min) {
//         return Math.floor(Math.random() * Math.floor(max, min));

//     }
// }

// for (let index = 0; index < 14; index++) {

//     var ul1 = document.createElement("UL");
//     ul1.setAttribute("id", "myUL");
//     document.body.appendChild(ul1);


//     if (index <= 6) {


//         var liParis = document.createElement("LI");
//         var liTextParis = document.createTextNode(index + 6 + ":00 Am: " + Paris.customerNum(Paris.max, Paris.min) + " cookies in paris");
//         liParis.appendChild(liTextParis);
//         document.getElementById("myUL").appendChild(liParis);

//     } else {

//         var liParis = document.createElement("LI");
//         var liTextParis = document.createTextNode(index - 6 + ":00 Pm: " + Paris.customerNum(Paris.max, Paris.min) + " cookies in paris");
//         liParis.appendChild(liTextParis);
//         document.getElementById("myUL").appendChild(liParis);
//     }

//     totalParis = totalParis + Paris.customerNum(Paris.max, Paris.min)
// }







// var Lima = {
//     max: 16,
//     min: 2,
//     avCookie: 4.6,


//     customerNum: function (max, min) {
//         return Math.floor(Math.random() * Math.floor(max, min));
//     }


// }



// for (let index = 0; index < 14; index++) {

//     var ul1 = document.createElement("UL");
//     ul1.setAttribute("id", "myUL");
//     document.body.appendChild(ul1);


//     if (index <= 6) {


//         var liLima = document.createElement("LI");
//         var liTextLima = document.createTextNode(index + 6 + ":00 Am: " + Lima.customerNum(Lima.max, Lima.min) + " cookies in lima");
//         liLima.appendChild(liTextLima);
//         document.getElementById("myUL").appendChild(liLima);

//     } else {

//         var liLima = document.createElement("LI");
//         var liTextLima = document.createTextNode(index - 6 + ":00 Pm: " + Lima.customerNum(Lima.max, Lima.min) + " cookies in lima");
//         liLima.appendChild(liTextLima);
//         document.getElementById("myUL").appendChild(liLima);
//     }

//     totalLima = totalLima + Lima.customerNum(Lima.max, Lima.min)
// }














