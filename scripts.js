let priceFood;
let priceDrink;
let priceDessert;
let finalPrice;

let nameFood;
let nameDrink;
let nameDessert;


function selectFood(box,val){
    const sel = document.querySelector(".food").querySelector(".selected");
    if (sel !== null){
        sel.classList.remove("selected");
        const icon = sel.querySelector("ion-icon");
        icon.classList.add("off");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
        box.classList.add("selected");
    } else {
        box.classList.add("selected");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
    }
    priceFood = Number(val);
    nameFood = box.querySelector("p").innerHTML;

    if (priceFood && priceDrink && priceDessert){
        const button = document.querySelector(".button");
        button.classList.add("onButton");
        document.querySelector(".instruction").innerHTML = "Fechar pedido"; 
    }
}

function selectDrink(box,val){
    const sel = document.querySelector(".beverages").querySelector(".selected");
    if (sel !== null){
        sel.classList.remove("selected");
        const icon = sel.querySelector("ion-icon");
        icon.classList.add("off");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
        box.classList.add("selected");
    } else {
        box.classList.add("selected");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
    }
    
    priceDrink = Number(val);
    nameDrink = box.querySelector("p").innerHTML;

    if (priceFood && priceDrink && priceDessert){
        const button = document.querySelector(".button");
        button.classList.add("onButton");
        document.querySelector(".instruction").innerHTML = "Fechar pedido";
    }
}

function selectDessert(box,val){
    const sel = document.querySelector(".sweets").querySelector(".selected");
    if (sel !== null){
        sel.classList.remove("selected");
        const icon = sel.querySelector("ion-icon");
        icon.classList.add("off");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
        box.classList.add("selected");
    } else {
        box.classList.add("selected");
        const newIcon = box.querySelector("ion-icon");
        newIcon.classList.remove("off");
    }
    
    priceDessert = Number(val);
    nameDessert = box.querySelector("p").innerHTML;

    if (priceFood && priceDrink && priceDessert){
        const button = document.querySelector(".button");
        button.classList.add("onButton");
        document.querySelector(".instruction").innerHTML = "Fechar pedido";
    }
}

function fecharPedido(){
    if (priceFood && priceDrink && priceDessert){
        finalPrice = priceFood + priceDrink + priceDessert;
        finalPrice = finalPrice.toFixed(2);
        personalName = prompt("Qual é o seu nome?");
        address = prompt("Para qual endereço o pedido deve ser enviado?");
        let transparency = document.querySelector(".transparency");
        transparency.classList.remove("off");
        document.querySelector(".chosenDish").innerHTML = nameFood;
        document.querySelector(".chosenDrink").innerHTML = nameDrink;
        document.querySelector(".chosenDessert").innerHTML = nameDessert; 
        document.querySelector(".priceDish").innerHTML = priceFood.toFixed(2);
        document.querySelector(".priceDrink").innerHTML = priceDrink.toFixed(2);
        document.querySelector(".priceDessert").innerHTML = priceDessert.toFixed(2);
        document.querySelector(".finalPrice").innerHTML = "R$ " + finalPrice;
    }
} 

function pedir() {
    let finalText = 'Olá, gostaria de fazer o pedido: \n- Prato: ' + nameFood + 
    '\n - Bebida: ' + nameDrink +
    '\n - Sobremesa: ' + nameDessert +
    '\n Total: R$ ' + finalPrice +
    '\n \n Nome: ' + personalName +
    '\n Endereço: ' + address;
    encode = encodeURIComponent(finalText);
    textWpp = 'https://wa.me/5531997201266?' + encode;
    /*alert(finalText + ' ' + textWpp);*/
    window.open(textWpp);
    
}
