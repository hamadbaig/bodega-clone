const cartsection = document.querySelector(".tbody");

updateCartQuantity();
function updateCartQuantity() {
  const cartQuantityElement = document.getElementById("cartQuantity");
  let cartlength = JSON.parse(localStorage.getItem("cart"));
  cartQuantityElement.textContent = cartlength.length;
  console.log(cartlength.length);
  debugger;

  // Render cart items after updating quantity
}
renderCartitems();
function renderCartitems() {
  let allcart = JSON.parse(localStorage.getItem("cart"));

  const cartproducts = allcart.map(
    (cartItem) => `
    <tr >
    <td width="10%">
        <a href="#">
          <img class="__image" src="${cartItem.image}" alt="demo">
        </a>
    </td>
  
    <td width="35%">
      <span class="__name">${cartItem.name}</span>
    </td>
  
    <td width="15%">
      <span class="__price">${cartItem.price}</span>
    </td>
  
    <td width="20%">
      <div class="quantity-counter js-quantity-counter">
      <a href="#"onclick="removeCartItem('${
        cartItem.name
      }'); return false;"><span class="__btn __btn--minus">-</span></a>
        <input class="__q-input" type="text" value=${cartItem.quantity}>
        <a href="#" onclick="Addtocart('${cartItem.name}', '${
      cartItem.image
    }', ${cartItem.price}, '${
      cartItem.id
    }'); return false;"> <span class="__btn __btn--plus">+</span></a>
      </div>
    </td>
  
    <td width="5%">
      <span class="__total">${cartItem.price * cartItem.quantity}</span>
    </td>
  
    <td width="10%">
      <a href="#"onclick="removeCartItem('${cartItem.name}'); return false;">
        <img class=" __image-2" src="images/cross.jpg" alt="demo">
      </a>
  </td>
  </tr>
    `
  );

  const allCartHTML = cartproducts.join("");
  debugger;
  cartsection.innerHTML = allCartHTML;
  const subtotal = allcart.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );
  document.getElementById("subtotal").innerText = subtotal;
  const vat = 1.008;
  const delivery = 1.5;

  const total = subtotal + vat + delivery;

  document.getElementById("total").innerText = total;
}
function removeCartItem(name) {
  let allcart = JSON.parse(localStorage.getItem("cart"));
  debugger;
  // Find the index of the item with the specified name
  const indexToRemove = allcart.findIndex((item) => item.name === name);

  if (allcart[indexToRemove].quantity === 1) {
    allcart.splice(indexToRemove, 1);

    localStorage.setItem("cart", JSON.stringify(allcart));

    renderCartitems();
    updateCartQuantity();
  } else {
    allcart[indexToRemove].quantity =
      (allcart[indexToRemove].quantity || 1) - 1;
    localStorage.setItem("cart", JSON.stringify(allcart));
    renderCartitems();
    updateCartQuantity();
  }
}
function Addtocart(name, image, price, id) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  let num = 1;
  const existingProductIndex = cartData.findIndex(
    (product) => product.id === id
  );

  if (existingProductIndex !== -1) {
    cartData[existingProductIndex].quantity =
      (cartData[existingProductIndex].quantity || 1) + 1;
  } else {
    const productData = {
      name: name,
      image: image,
      price: price,
      id: id,
      quantity: num,
      total: num * price,
    };
    cartData.push(productData);
  }

  localStorage.setItem("cart", JSON.stringify(cartData));

  console.log("Updated Cart Data:", cartData);
  updateCartQuantity();
  renderCartitems();
}
