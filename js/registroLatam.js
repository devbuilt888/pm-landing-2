//If bandera is pressed, this.country has to be saved, Banderas has to become invisible, 2Options will become visible, 
//then if option is pressed, # of option is saved, and then that # of form is displayed, with some values that change
//depending on country saved from banderas



(function () {
    // let currentCountry;
    // let formSelected;

    document.getElementById("twoOptions").style.display = "none";
    document.getElementById("formTP").style.display = "none";



    //FLAGS
    document.getElementById("bolivia").addEventListener("click", selectCountry);

    document.getElementById("colombia").addEventListener("click", selectCountry);

    document.getElementById("costarica").addEventListener("click", selectCountry);

    document.getElementById("ecuador").addEventListener("click", selectCountry);


    //TWOBUTTONS

    document.getElementById("form1").addEventListener("click", selectForm);

    document.getElementById("form2").addEventListener("click", selectForm);

})();




// Functions to inject country specific info in the form/change current country to id value of button clicked/change form selected depending which two options is clicked


function selectCountry() {
    currentCountry = this.id;
    console.log("this is the current country:" + currentCountry);
    document.getElementById("grid").style.display = "none";
    document.getElementById("aboutPM").style.display = "none";
    document.getElementById("twoOptions").style.display = "block";

}




function selectForm() {
    currentForm = this.id;
    console.log("this is the current form:" + currentForm);
    document.getElementById("twoOptions").style.display = "none";
    if (currentForm === "form1") {
        makeCountryInput();
        makeCountryOrder();
        document.getElementById("formTP").style.display = "block";
    } else if (currentForm === "form2") {
        makeAutoship();
        document.getElementById("autoshipContainer").style.display = "block";
    }

}

function makeAutoship() {
    let autoship;
    switch (currentCountry) {
        case 'costarica':
            let auto = "<div class='firstPurchase'><div class='orderTitle'><p>FitLine Optimal Set EA</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>672,00USD</p><br> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            autoship = auto
            break;
        case 'bolivia':
            let auto1 = "<div class='firstPurchase'><div class='orderTitle'><p>FitLine Optimal Set EA</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>651,00USD</p><br> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            autoship = auto1;
            break;
        case 'ecuador':
            let auto2 = "<div class='firstPurchase'><div class='orderTitle'><p>FitLine Optimal Set EA</p><p>(3 x Basics, 3 x Restorate Citrus, 3 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>3X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>386,40USD</p><br> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            autoship = auto2;
            break;
        case 'colombia':
            let auto3 = "<div class='firstPurchase'><div class='orderTitle'><p>FitLine Optimal Set EA</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>688,00USD</p><br> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            autoship = auto3;
            break;
        default:
    }
    document.getElementById("autoship").innerHTML = autoship;

};

function makeCountryOrder() {
    let countryOrder;
    switch (currentCountry) {
        case 'costarica':
            let order = "<div class='firstPurchase'><div class='orderTitle'><p>9700255 Quick Start B.A.R.</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p><p>Incluye un Starter kit (Bolsa + 2 vasos + cuchara + botella) + 1 x Bote de Activize Oxyplus</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>740,00USD</p> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            countryOrder = order
            break;
        case 'bolivia':
            let order1 = "<div class='firstPurchase'><div class='orderTitle'><p>9700255 Quick Start B.A.R.</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p><p>Incluye un Starter kit (Bolsa + 2 vasos + cuchara + botella) + 1 x Bote de Activize Oxyplus</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>700,00USD</p> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            countryOrder = order1;
            break;
        case 'ecuador':
            let order2 = "<div class='firstPurchase'><div class='orderTitle'><p>9700255 Pedido de prueba B.A.R.</p><p>(3 x Basics, 3 x Restorate Citrus, 3 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>3X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p><p>Incluye un Starter kit (Bolsa + 2 vasos + cuchara + botella) + 1 x Bote de Activize Oxyplus</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>396,00USD</p> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            countryOrder = order3;
            break;
        case 'colombia':
            let order3 = "<div class='firstPurchase'><div class='orderTitle'><p>9700255 Quick Start B.A.R.</p><p>(6 x Basics, 6 x Restorate Citrus, 6 x Activize Oxyplus)</p></div><div class='orderImg'><p class='redTitle'>6X</p><img class='xsmallImage' src='images/products1.png'/></div><div class='orderContent'><p>Calificacion inmediata como Manager</p><p>Incluye un Starter kit (Bolsa + 2 vasos + cuchara + botella) + 1 x Bote de Activize Oxyplus</p></div><div class='orderPrice'><p class='priceP'>Su precio es de solo</p><p class='redSmTitle'>750,00USD</p> <p>+28$ GASTOS DE ENVIO<p></div></div>";
            countryOrder = order3;
            break;
        default:
    }
    document.getElementById("firstOrder").innerHTML = countryOrder;
}
function makeCountryInput() {
    //for performance this is terrible
    // string is read by a loop, and each letter is a count
    let countryId;
    switch (currentCountry) {
        case 'costarica':
            let input = "<label for='id'>Cedula de identidad:</label><br> <input type='id' id='id' name='cedula'><br>";
            countryId = input
            break;
        case 'bolivia':
            let input1 = "<label for='id'>Cedula de identidad:</label><br> <input type='id' id='id' name='cedula'><br>";
            countryId = input1;
            break;
        case 'ecuador':
            let input2 = "<label for='id'>Cedula de identidad:</label><br> <input type='id' id='id' name='cedula'><br>";
            countryId = input2;
            break;
        case 'colombia':
            let input3 = "<label for='id'>Cedula de ciudadania/NIT:</label><br> <input type='id' id='id' name='cedula'><br>";
            countryId = input3;
            break;
        default:
    };
    document.getElementById("countryId").innerHTML = countryId;

}


