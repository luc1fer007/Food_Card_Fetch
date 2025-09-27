const input = document.getElementById("input");
const button = document.getElementById("btn");
const container2 = document.getElementById("container2");
let nation = "";

async function func() {
  let resource = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`
  );
  let resourceObj = await resource.json();
  let items = resourceObj.meals; //accessing only meals(array)
  //makes clear the container2 ajter result;
  container2.innerHTML = "";

  //creating DOM Elements
  for (let item of items) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    //assigning ClassName
    div.className = "foodCard";
    img.className = "image";
    h2.className = "title";

    //add img and title to the divchild section
    if (item.strMealThumb) {
      img.src = item.strMealThumb;
    }
    if (item.strMeal) {
      h2.textContent = item.strMeal;
    }

    //add the element to their position
    div.appendChild(img);
    div.appendChild(h2);
    container2.appendChild(div);
  }
}

//handling Events
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    nation = input.value.trim();
    if (!nation) {
      alert("Enter a country name");
    } else {
      func();
    }
  }
});

button.addEventListener("click", (c) => {
  nation = input.value.trim();
  if (!nation) {
    alert("Enter a country name");
  } else {
    func();
  }
});
