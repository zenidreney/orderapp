
import { menuArray } from "./data.js";


document.addEventListener("click", function(e){
        
        if(e.target.dataset.id){   
        handleAddClick(e.target.dataset.id);        
        }
        
});

  let totalPrice = 0;

function handleAddClick(item){
        
        
        /*Update UI*/
        
        const orderedItems = document.getElementById("ordered-items-container");
               
                const singleOrderContainer = document.createElement("div");
                singleOrderContainer.className = "single-order-container";
                
                        const itemName = document.createElement("h2");
                        itemName.className = "ordered-item-name";
                        itemName.textContent = menuArray[parseInt(item)].name;

                        const removeSpan = document.createElement("span");
                        removeSpan.className = "remove-btn-span";

                                const removeBtn = document.createElement("button");
                                removeBtn.className = "remove-btn";
                                removeBtn.textContent = "remove";

                        removeSpan.append(removeBtn); // append button inside span

                        const itemPrice = document.createElement("h2");
                        itemPrice.textContent = "$" + menuArray[parseInt(item)].price;
               
                singleOrderContainer.append(itemName, removeSpan, itemPrice);
                
        orderedItems.append(singleOrderContainer);
        
        /*Update Price*/
        
      
        totalPrice += menuArray[parseInt(item)].price;
        
        const totalPriceSpan = document.getElementById("total-price-span");
        totalPriceSpan.textContent = "$" + totalPrice;
        
}

/*FUNCTIONs*/

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













                //`<article class="item-container">
                //    <div class="item-pic">🍕</div>
                //    <div class="item-details">
                //        <h3>Name</h3>
                //        <p>Ingredients</p>
                //        <h3>Price $</h3>
                //    </div>
                //    <button class="add-item-btn">+</button>
                //</article>`
                