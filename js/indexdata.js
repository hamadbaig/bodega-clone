function renderProducts(page, Product, format) {
  debugger;
  sort = format;
  var currentdata = Product;
  if (sort == "lowToHigh") {
    currentdata.sort((a, b) => a.price - b.price);
  } else if (sort == "highToLow") {
    currentdata.sort((a, b) => b.price - a.price);
  } else {
    currentdata = Product;
  }
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const productsForPage = currentdata.slice(startIndex, endIndex);
  const productHTMLArray = productsForPage.map(
    (product) => `
      <div id=${product._id.$oid} class="pro">
          <div class="pro--img">
              <img src="${product.image}" alt="">
          </div>
          <div class="pro--desc">
              <h3>${product.name}</h3>
              <h3>${product.category}</h3>
              <h3>${product.price}$</h3>
          </div>
          <div class="pro--btn">
          <button class="btn  add-to-cart"  onclick="Addtocart('${product.name}', '${product.image}', ${product.price}, '${product._id.$oid}'); return false;"><i class="fas fa-shopping-cart"></i>ANADIR</button>
  
          </div>  
      </div>
  `
  );

  productSection.innerHTML = productHTMLArray;
}
