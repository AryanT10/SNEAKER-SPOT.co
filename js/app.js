
const { products, categories } = window;

function main() {
  const productContainer = document.getElementById("products");
  const categoryMenu = document.getElementById("category-menu");
  // const productsTable = document.getElementById("products");
  // const productDetails = document.getElementById("product-description");
  // ************** SHOW PRODUCT FOR INDIVIDUAL CATEGORY ************ //
  const showCategoryProducts = (categoryId) => {
    // **************** CLEAR EXISTING CONTENT ******************** //
    productContainer.innerHTML = "";
    const selectedCategory = categories.find((category) => category.id === categoryId);
    const filteredProducts = products.filter(
      (product) => product.categories.includes(categoryId) && !product.discontinued
    );
    // CATEGORY
    let categoryName;
    switch (categoryId) {
      case "c1":
        categoryName = "MEN";
        break;
      case "c2":
        categoryName = "WOMEN";
        break;
      case "c3":
        categoryName = "KIDS";
        break;
      case "c4":
        categoryName = "SPORTS PERFORMANCE";
        break;
      default:
        categoryName = "UNKNOWN CATEGORY";
    }
    // ***** UPDATE THE SELECTED CATEGORY TITLE ************************ //
    document.getElementById("category").textContent = selectedCategory.description;

    filteredProducts.forEach((product) => {
      const card = createProductCard(product);
      console.log(card);
      productContainer.appendChild(card);
    });
    // PRODUCT CARD
    function createProductCard(product) {
      const card = document.createElement("div");
      card.classList.add("container", "card");

      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = "Product Image";
      productImage.classList.add("imgBx");
      card.appendChild(productImage);

      const title = document.createElement("h2");
      title.textContent = product.name;
      title.classList.add("contentBx", "h2");
      card.appendChild(title);

      const sizeContainer = document.createElement("div");
      sizeContainer.classList.add("size");
      sizeContainer.innerHTML = `<h5>Size:</h5>${product.sizes
        .map((size) => `<span>${size}</span>`)
        .join("")}`;
      card.appendChild(sizeContainer);

      const colorContainer = document.createElement("div");
      colorContainer.classList.add("color");
      colorContainer.innerHTML = `<h5>Color :</h5>${product.colors
        .map((color) => `<span style="background-color: ${color};"></span>`)
        .join("")}`;
      card.appendChild(colorContainer);

      let price = document.createElement("div");
      price.className = "price";
      price.textContent = "$" + product.price / 100; // Assuming the price is stored in cents
      card.appendChild(price);

      const buyNowLink = document.createElement("a");
      buyNowLink.href = "#";
      buyNowLink.textContent = "Buy Now";
      buyNowLink.classList.add("contentBx");
      card.appendChild(buyNowLink);

      card.addEventListener("click", () => {
        const productDetails = `
          <ul>
            <li>Category: ${categoryName}</li>
            <li>Name: ${product.name}</li>
            <li>Description: ${product.description}</li>
            <li>Price: $${product.price / 100}</li>
            <li>Discontinued: ${product.discontinued}</li>
          </ul>
        `;
        document.getElementById("product-description").innerHTML = productDetails;
      });

      return card;
    }
  };

  // ***************** BUTTONS ******************** //
  categories.forEach((category) => {
    const button = document.createElement("a");
    button.href = "#";
    button.textContent = category.description;

    button.classList.add("btn", "btn-dark");

    button.addEventListener("click", () => {
      showCategoryProducts(category.id);
    });

    categoryMenu.appendChild(button);
  });
  // *************** DEFAULT CATEGORY SHOW ********************* //

  // *************** DEFAULT CATEGORY SHOW ********************* //
  showCategoryProducts("c1");
}

addEventListener("DOMContentLoaded", main);
