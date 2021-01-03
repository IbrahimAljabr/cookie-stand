totalSeattle = 0;
totalTokyo = 0;
totalDubai = 0;
totalParis = 0;
totalLima = 0;
var Seattle = {
    max: 65,
    min: 23,
    avCookie: 6.5,

    customerNum: function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));
    }
}





for (let index = 0; index < 14; index++) {


    var ul1 = document.createElement("UL");
    ul1.setAttribute("id", "myUL");
    document.body.appendChild(ul1);


    if (index <= 6) {


        var liSeattle = document.createElement("LI");
        var liTextSeattle = document.createTextNode(index + 6 + ":00 Am: " + Seattle.customerNum(Seattle.max, Seattle.min) + " cookies in Seattle");
        liSeattle.appendChild(liTextSeattle);
        document.getElementById("myUL").appendChild(liSeattle);

    } else {

        var liSeattle = document.createElement("LI");
        var liTextSeattle = document.createTextNode(index - 6 + ":00 Pm: " + Seattle.customerNum(Seattle.max, Seattle.min) + " cookies in Seattle");
        liSeattle.appendChild(liTextSeattle);
        document.getElementById("myUL").appendChild(liSeattle);
    }

    totalSeattle = totalSeattle + Seattle.customerNum(Seattle.max, Seattle.min)

}
console.log("totalSeattle = " + totalSeattle + " cookies");






var Tokyo = {
    max: 24,
    min: 3,
    avCookie: 1.2,


    customerNum: function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));
    }

}

for (let index = 0; index < 14; index++) {


    var ul1 = document.createElement("UL");
    ul1.setAttribute("id", "myUL");
    document.body.appendChild(ul1);


    if (index <= 6) {


        var liTokyo = document.createElement("LI");
        var liTextTokyo = document.createTextNode(index + 6 + ":00 Am: " + Tokyo.customerNum(Tokyo.max, Tokyo.min) + " cookies in tokyo");
        liTokyo.appendChild(liTextTokyo);
        document.getElementById("myUL").appendChild(liTokyo);

    } else {

        var liTokyo = document.createElement("LI");
        var liTextTokyo = document.createTextNode(index - 6 + ":00 Pm: " + Tokyo.customerNum(Tokyo.max, Tokyo.min) + " cookies in tokyo");
        liTokyo.appendChild(liTextTokyo);
        document.getElementById("myUL").appendChild(liTokyo);
    }

    totalTokyo = totalTokyo + Tokyo.customerNum(Tokyo.max, Tokyo.min)

}






var Dubai = {
    max: 38,
    min: 11,
    avCookie: 3.7,


    customerNum: function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));
    }

}

for (let index = 0; index < 14; index++) {

    var ul1 = document.createElement("UL");
    ul1.setAttribute("id", "myUL");
    document.body.appendChild(ul1);


    if (index <= 6) {


        var liDubai = document.createElement("LI");
        var liTextDubai = document.createTextNode(index + 6 + ":00 Am: " + Dubai.customerNum(Dubai.max, Dubai.min) + " cookies in dubai");
        liDubai.appendChild(liTextDubai);
        document.getElementById("myUL").appendChild(liDubai);

    } else {

        var liDubai = document.createElement("LI");
        var liTextDubai = document.createTextNode(index - 6 + ":00 Pm: " + Dubai.customerNum(Dubai.max, Dubai.min) + " cookies in dubai");
        liDubai.appendChild(liTextDubai);
        document.getElementById("myUL").appendChild(liDubai);
    }

    totalDubai = totalDubai + Dubai.customerNum(Dubai.max, Dubai.min)
}





var Paris = {
    max: 38,
    min: 20,
    avCookie: 2.3,


    customerNum: function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));

    }
}

for (let index = 0; index < 14; index++) {

    var ul1 = document.createElement("UL");
    ul1.setAttribute("id", "myUL");
    document.body.appendChild(ul1);


    if (index <= 6) {


        var liParis = document.createElement("LI");
        var liTextParis = document.createTextNode(index + 6 + ":00 Am: " + Paris.customerNum(Paris.max, Paris.min) + " cookies in paris");
        liParis.appendChild(liTextParis);
        document.getElementById("myUL").appendChild(liParis);

    } else {

        var liParis = document.createElement("LI");
        var liTextParis = document.createTextNode(index - 6 + ":00 Pm: " + Paris.customerNum(Paris.max, Paris.min) + " cookies in paris");
        liParis.appendChild(liTextParis);
        document.getElementById("myUL").appendChild(liParis);
    }

    totalParis = totalParis + Paris.customerNum(Paris.max, Paris.min)
}







var Lima = {
    max: 16,
    min: 2,
    avCookie: 4.6,


    customerNum: function (max, min) {
        return Math.floor(Math.random() * Math.floor(max, min));
    }


}



for (let index = 0; index < 14; index++) {

    var ul1 = document.createElement("UL");
    ul1.setAttribute("id", "myUL");
    document.body.appendChild(ul1);


    if (index <= 6) {


        var liLima = document.createElement("LI");
        var liTextLima = document.createTextNode(index + 6 + ":00 Am: " + Lima.customerNum(Lima.max, Lima.min) + " cookies in lima");
        liLima.appendChild(liTextLima);
        document.getElementById("myUL").appendChild(liLima);

    } else {

        var liLima = document.createElement("LI");
        var liTextLima = document.createTextNode(index - 6 + ":00 Pm: " + Lima.customerNum(Lima.max, Lima.min) + " cookies in lima");
        liLima.appendChild(liTextLima);
        document.getElementById("myUL").appendChild(liLima);
    }

    totalLima = totalLima + Lima.customerNum(Lima.max, Lima.min)
}














