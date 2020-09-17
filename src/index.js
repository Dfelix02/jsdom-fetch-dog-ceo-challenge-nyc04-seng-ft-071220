let divDogContainer = document.querySelector("div#dog-image-container");
let ulDogBreeds = document.querySelector("ul#dog-breeds");
let dogSelectDropDown = document.querySelector("select#breed-dropdown");

fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(dogObj => dogObj.message.forEach((dog) => createNewDogObjLi(dog)));

fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(dogObj => createNewBreedDogLi(dogObj));

function createNewDogObjLi(dog){
  let dogLi= document.createElement("li");
  let dogImg = document.createElement('img');
  dogImg.className = "doggie";
  dogImg.src = dog;
  dogLi.append(dogImg);
  divDogContainer.append(dogLi);
} 

function createNewBreedDogLi(dog){
  value = dogSelectDropDown.value;
  for(const breed in dog.message){
    let dogLi= document.createElement("li");
    if(value === "all"|| value === breed[0]){
      dogLi.className = "doggo";
      dogLi.innerText = breed;
      ulDogBreeds.append(dogLi);
    }
    dogLi.addEventListener("click", () =>{
      dogLi.style.backgroundColor = random_bg_color();
      dogLi.style.color = random_bg_color();
    });
    };
  console.log(ulDogBreeds.children.length);
};

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};

dogSelectDropDown.addEventListener("click", () => {
    ulDogBreeds.innerHTML = "";
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(dogObj => createNewBreedDogLi(dogObj));
    });

