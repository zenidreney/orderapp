
import { menuArray } from "./data.js";

console.log(menuArray[0].name);


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
                