let serial=0;
let grandTotal=0;

const add=document.getElementById("add-btn")
.addEventListener('click',()=>{
    console.log("added");
    const dataRow=document.createElement("tr");
    const sno=document.createElement("td");
    const title=document.createElement("td");
    const price=document.createElement("td");
    const quantity=document.createElement("td");
    const total=document.createElement("td");
    const remove=document.createElement("td");
    const tbody=document.getElementById("tbody");
    tbody.appendChild(dataRow);
   
   
    dataRow.appendChild(sno).innerHTML=++serial;
    dataRow.appendChild(title).innerHTML=document.getElementById("data-item").value;
    dataRow.appendChild(quantity).innerHTML=document.getElementById("data-quantity").value;
    dataRow.appendChild(price).innerHTML=document.getElementById("data-price").value;
    dataRow.appendChild(total).innerHTML= parseInt(document.getElementById("data-quantity").value)* parseInt( document.getElementById("data-price").value) ;
    grandTotal+=parseInt(document.getElementById("data-quantity").value)* parseInt( document.getElementById("data-price").value) ;
    const button=document.createElement("button");
    button.type="submit";
    button.innerHTML="Remove";
    console.log(button);

    dataRow.appendChild(remove).appendChild(button);
    

     let final=document.getElementById("all-items");
     final.innerHTML=grandTotal;

     document.getElementById("data-item").value="";
     document.getElementById("data-price").value="";
     
});

