let hearts = document.querySelectorAll('.heart');
hearts.forEach(heart =>{
    heart.addEventListener('click', (event) =>{
        event.target.classList.toggle ('redHeart');
    });
});

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        // Дістаємо масив з пам'яті. Якщо його нема — створюємо порожній []
        const savedItems = JSON.parse(localStorage.getItem('cartData') || "[]");
        
        // Використовуємо innerText для запису довжини масиву
        badge.innerText = savedItems.length;
    };
};
var items = [];
let addItem = document.querySelectorAll('.btn-primary');
addItem.forEach(el =>{
    el.addEventListener('click',(event)=>{
        const btn = event.target;
        const card = btn.closest ('.card');
        const product ={
            id: btn.dataset.id,
            title: card.querySelector('.card-title').innerText,
            price: card.querySelector('.card-text').innerText.replace('$', ''),
            img: card.querySelector('.card-img-top').src
        };
        
        localStorage.setItem('cartData', JSON.stringify(items));

// Оновили текст у бейджі
        updateCartBadge();
        items.push(product);
        
})
});