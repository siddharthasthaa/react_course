function calculateBill() {
  const dellPrice = 20000;
  const hpPrice = 25000;
  const lenovoPrice = 30000;

  let dellQuantity = parseInt(document.getElementById("dell").value) || 0;
  let hpQuantity = parseInt(document.getElementById("hp").value) || 0;
  let lenovoQuantity = parseInt(document.getElementById("lenovo").value) || 0;

  const productTotal = (dellPrice * dellQuantity) + (hpPrice * hpQuantity) + (lenovoPrice * lenovoQuantity);

  let deliveryCharge = 0;
  if (document.getElementById("home").checked) {
      deliveryCharge = 10000;
  }

  const packingCharge = (document.getElementById("plastic").checked ? 1000 : 0) +
                        (document.getElementById("bag").checked ? 2000 : 0) +
                        (document.getElementById("giftbox").checked ? 5000 : 0);

  const location = document.getElementById("location").value;
  let taxRate = 0;

  if (location === "ktm") {
      taxRate = 13;
  }

  const taxAmount = (productTotal * taxRate) / 100;
  const grandTotal = productTotal + deliveryCharge + packingCharge + taxAmount;

  // Displaying the results
  document.getElementById("product-name").textContent = `Dell, HP, Lenovo`;  // You can update based on selected products
  document.getElementById("product-price").textContent = productTotal;
  document.getElementById("product-quantity").textContent = `${dellQuantity + hpQuantity + lenovoQuantity}`;
  document.getElementById("tax-amount").textContent = taxAmount;
  document.getElementById("grand-total").textContent = grandTotal;
}
