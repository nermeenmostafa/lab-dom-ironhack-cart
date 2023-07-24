// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceNumber = price.innerHTML;
  const quantityNumber = quantity.value;

  const subtotalNumber = priceNumber * quantityNumber;
  subtotal.innerHTML = subtotalNumber;

  return subtotalNumber;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product)')
  let totalSum = 0;
  products.forEach((singleProduct) => {
    subtotal = updateSubtotal(singleProduct);
    totalSum += subtotal
  })
    
  };


  // ITERATION 3
  //... your code goes here
 
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
