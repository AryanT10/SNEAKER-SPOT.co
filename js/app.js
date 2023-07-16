const { products, categories } = window;

function main() {
  const categoryMenu = document.getElementById("category-menu");
  const productsTable = document.getElementById("products");
  const productDetails = document.getElementById("product-description");
  // ************** SHOW PRODUCT FOR INDIVIDUAL CATEGORY ************ //
  const showCategoryProducts = (categoryId) => {
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

    // **************** CLEAR EXISTING ROWS ******************** //
    productsTable.innerHTML = "";

    // ***************** CREATE AND ADD NEW ROWS FOR THE PRODUCTS **//
    filteredProducts.forEach((product) => {
      const row = document.createElement("tr");

      // ********* ONLCLICK SHOW PRODUCT DETAILS ****************** //
      // row.addEventListener("click", () => {
      //   console.log(
      //     `Name: ${product.name}\ndescription: ${product.description}\nprice: $${
      //       product.price / 100
      //     }\ndiscontinued: ${product.discontinued}\ncategories: ${categoryName}`
      //   );
      // });
      row.addEventListener("click", () => {
        productDetails.innerHTML = `<ul> <li>Name: ${product.name}</li> <br/> <li> Description: ${
          product.description
        } </li> <br/> <li>Price: $${product.price / 100} </li> <br/> <li> Discontinued: ${
          product.discontinued
        } </li> <br/> <li>Category: ${categoryName}</li> </ul>`;
      });

      const titleCell = document.createElement("td");
      titleCell.textContent = product.name;
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;
      row.appendChild(descriptionCell);

      const priceCell = document.createElement("td");
      const formattedPrice = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      }).format(product.price / 100);
      priceCell.textContent = formattedPrice;
      row.appendChild(priceCell);

      productsTable.appendChild(row);
    });
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
  showCategoryProducts("c1");
}

addEventListener("DOMContentLoaded", main);
