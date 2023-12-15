document.addEventListener('DOMContentLoaded',function(){
    //selection des elements
var incrementation = document.querySelector('.btn-increment');
var decrementation =document.querySelector('.btn-decrement');
var quantite=document.querySelector('.quantite');
var price =document.querySelector('.prix');
var deleteButton=document.querySelector('.delete');
var likeButton=document.querySelector('.btn-like')
//initialisation des prix et quantité


let quantity=parseInt(quantite.textContent);

const prix=23.00;

const updateQuantityAndPrice=()=>{
    quantite.textContent=quantity;
    price.textContent=(prix * quantity).toFixed (2)+ '€'

}


const toggleLike=()=>{
    likeButton.classList.toggle('liked');
}

//ajout des events listeners pour btn decrementation
decrementation.addEventListener ('click',function(){
    if (quantity>1) {
        quantity--;
updateQuantityAndPrice();
        
    }

}
 
);

incrementation.addEventListener ('click',function(){
    quantity++;
    updateQuantityAndPrice();
}
);  


deleteButton.addEventListener ('click',function(){
    var card=document.querySelector('.card');
    card.parentNode.removeChild(card);

}

);


likeButton.addEventListener ('click',function(){
    toggleLike(likeButton);
}
);

});






