fetch("https://kea-alt-del.dk/t7/api/products/2801")
  .then(function (responce) {
    return responce.json();
  })
  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  console.log(product);
  document.querySelector("product.html").textContent = "hi mom";
}

// const url = "https://kea-alt-del.dk/t7/api/products/2801";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => showProduct());

// .then(function (data) {
//     showProduct(data);
//     });
