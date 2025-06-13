
function appendItemHtml() {
    
    const itemsSection = document.getElementById("render-items");
    
        const article = document.createElement("article");
        article.className = "item-container";
    
            const itemPicDiv = document.createElement("div");
            itemPicDiv.className = "item-pic";
            itemPicDiv.textContent = "🍕";
    
            const itemDetailsDiv = document.createElement("div");
            itemDetailsDiv.className = "item-details";
    
                const itemName = document.createElement("h3");
                itemName.textContent = "Item";
    
                const itemDetails = document.createElement("p");
                itemDetails.textContent = "Ingredients";
    
                const itemPrice = document.createElement("h3");
                itemPrice.textContent = "Price$";
    
    
    
    
            itemDetailsDiv.append(itemName, itemDetails, itemPrice);
    
            const addItemBtn = document.createElement("button");
            addItemBtn.className = "add-item-btn";
            addItemBtn.textContent = "+";
    
    
        article.append(itemPicDiv, itemDetailsDiv, addItemBtn);
    
    itemsSection.append(article);
    
    //return appendItemHtml;
    
}


appendItemHtml();













                //`<article class="item-container">
                //    <div class="item-pic">🍕</div>
                //    <div class="item-details">
                //        <h3>Name</h3>
                //        <p>Ingredients</p>
                //        <h3>Price $</h3>
                //    </div>
                //    <button class="add-item-btn">+</button>
                //</article>`
                