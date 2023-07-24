

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     data.forEach(function (post) {
//       const li = document.createElement("li");
//       li.innerText = post.title;
//       ul.append(li); // Corrected line: append the li element to the ul
//     });
//     document.body.append(ul);
//   });





const ul = document.createElement("ul");

async function loaddata() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.forEach(function (post) {
    const li = document.createElement("li");
    li.innerText = post.title;
    ul.append(li);
  });
}

loaddata();

console.log("Linea 2");

document.body.appendChild(ul);