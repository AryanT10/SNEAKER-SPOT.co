/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <ARYAN_TUWAR>
 *      Student ID: <112137229>
 *      Date:       <NEED_TO_FILL>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { products, categories } = window;

function main() {
  const categoryMenu = document.getElementById("category-menu");
  const productsTable = document.getElementById("products");

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
      row.addEventListener("click", () => {
        console.log(`Name: ${product.name}\ndescription: ${product.description}\nprice: $${product.price/100}\ndiscontinued: ${product.discontinued}\ncategories: ${categoryName}`);
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
        currency: "CAD",
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
