document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
  
    function updateTotalPrice() {
      let total = 0;
      cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').value);
        const price = parseFloat(item.getAttribute('data-price'));
        total += quantity * price;
      });
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    cartItems.forEach(item => {
      const increaseButton = item.querySelector('.increase');
      const decreaseButton = item.querySelector('.decrease');
      const quantityInput = item.querySelector('.quantity');
      const deleteButton = item.querySelector('.delete-item');
      const likeButton = item.querySelector('.like-item');
  
      increaseButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
      });
  
      decreaseButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          updateTotalPrice();
        }
      });
  
     
      deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
      });
  

      likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
      });
  
     
      quantityInput.addEventListener('change', () => {
        if (quantityInput.value < 1) quantityInput.value = 1;
        updateTotalPrice();
      });
    });
  
    
    updateTotalPrice();
  });
  