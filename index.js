
import { menuArray } from "./data.js";

let totalPrice = 0;
let orderInstanceId = 1; /*TO KEEP TRACK OF ORDERS*/

document.addEventListener("click", function(e){
        
        if(e.target.dataset.id){   
        handleAddClick(e.target.dataset.id);        
        } else if(e.target.dataset.removeId){
        handleRemoveClick(e.target.dataset.removeId);        
        } else if(e.target.id === "complete-order-btn"){
        handleOrderBtn();
        } else if(e.target.id === "pay-btn"){
        handlePayBtn(e);
        }
});

function resetOrder(){
        
        
        /*Close the Modal*/
        
        const orderModal = document.getElementById("modal-overlay");
        orderModal.classList.add("hidden");
        
        /*Close Order Container*/
        
        const orderContainer = document.getElementById("order-container");
        orderContainer.classList.add("hidden");
        
        
        /*Reset Order Container*/
        
        document.getElementById("ordered-items-container").innerHTML = "";

        totalPrice = 0;
        orderInstanceId = 1;
        
        /*Reset Form*/

        document.getElementById("payment-form").reset();
}

function handlePayBtn(click){
        
        /*To make sure that the entered data is not visible in the toolbar*/
        click.preventDefault(); 
        
        /*Check if the form is Filled*/
        const paymentForm = document.getElementById("payment-form");
        
        if(!paymentForm.checkValidity()) {
        alert("Please Fill In");
        return;
        } 
        
        /*Show Confirmation*/
        
        const confirmOrder = document.getElementById("confirm-order");
        
                const confirmPara = document.createElement("p");
        
                const fullName = document.getElementById("name-input").value.trim();
                const firstName = fullName.split(" ")[0];
                //console.log(firstName);
        
                confirmPara.textContent = `Thank you ${firstName}! Your order is on its way`;
        
        confirmOrder.append(confirmPara);
        
        resetOrder();
        
}

function handleOrderBtn(){
        const orderModal = document.getElementById("modal-overlay");
        orderModal.classList.remove("hidden");
}

function handleRemoveClick(item){

        const orderDiv = document.querySelector(`[data-order-id="${item}"]`);
                if(!orderDiv) return;
          
        const menuId = orderDiv.getAttribute("data-menu-id");
                if(menuId === null) return;
       
        const itemPrice = menuArray[Number(menuId)].price;
         
        totalPrice -= itemPrice;
        
        /*Update UI*/
        
        const totalPriceSpan = document.getElementById("total-price-span");
        totalPriceSpan.textContent = "$" + totalPrice;
        
        orderDiv.remove();
        
        if(totalPrice === 0) {
        document.getElementById("order-container").classList.add("hidden");
        }
        
         
}

function handleAddClick(item){
        
        document.getElementById("confirm-order").innerHTML = "";
        
        /*Update UI*/
        
        const orderedItems = document.getElementById("ordered-items-container");
               
                const singleOrderContainer = document.createElement("div");
                singleOrderContainer.className = "single-order-container";
                singleOrderContainer.setAttribute("data-order-id", orderInstanceId);
                singleOrderContainer.setAttribute("data-menu-id", item);
                //console.log(singleOrderContainer.dataset.orderId);
                
                        const itemName = document.createElement("h2");
                        itemName.className = "ordered-item-name";
                        itemName.textContent = menuArray[Number(item)].name;

                        const removeSpan = document.createElement("span");
                        removeSpan.className = "remove-btn-span";

                                const removeBtn = document.createElement("button");
                                removeBtn.className = "remove-btn";
                                removeBtn.textContent = "remove";
                                removeBtn.setAttribute("data-remove-id", orderInstanceId);

                        removeSpan.append(removeBtn); // append button inside span

                        const itemPrice = document.createElement("h2");
                        itemPrice.textContent = "$" + menuArray[Number(item)].price;
               
                singleOrderContainer.append(itemName, removeSpan, itemPrice);
                
        orderedItems.append(singleOrderContainer);
        
        /*Update Price*/
        
      
        totalPrice += menuArray[Number(item)].price;
        
        const totalPriceSpan = document.getElementById("total-price-span");
        totalPriceSpan.textContent = "$" + totalPrice;
        
        /*Update Order Instance*/
        
        orderInstanceId++;
        
        /*Show order modal*/
        
        const orderContainer = document.getElementById("order-container");
        //console.log(orderContainer);
        orderContainer.classList.remove("hidden");
        orderContainer.scrollIntoView({behavior: "smooth"});
}

function appendItemHtml(dataArr) {
    
    const itemsSection = document.getElementById("render-items");
        
        
        dataArr.forEach(function(item){
                
        const article = document.createElement("article");
        article.className = "item-container";
    
            const itemPicDiv = document.createElement("div");
            itemPicDiv.className = "item-pic";
            itemPicDiv.textContent = item.emoji;
    
            const itemDetailsDiv = document.createElement("div");
            itemDetailsDiv.className = "item-details";
    
                const itemName = document.createElement("h3");
                itemName.textContent = item.name;
    
                const itemDetails = document.createElement("p");
                itemDetails.textContent = item.ingredients.join(", ");
    
                const itemPrice = document.createElement("h3");
                itemPrice.textContent = "$" + item.price;
    
    
            itemDetailsDiv.append(itemName, itemDetails, itemPrice);
    
            const addItemBtn = document.createElement("button");
            addItemBtn.setAttribute("data-id", item.id);
               
        
            addItemBtn.className = "add-item-btn";
            addItemBtn.textContent = "+";
    
    
        article.append(itemPicDiv, itemDetailsDiv, addItemBtn);
                
                
    itemsSection.append(article);
                
        });
        
    
    
}


appendItemHtml(menuArray);

