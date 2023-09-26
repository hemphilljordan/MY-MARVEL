console.log('hey dawg')



  

 let input = document.getElementById('input-box');
 let button = document.getElementById('submit-button');
 let showContainer = document.getElementById('show-container');
 let listContainer = document.getElementById('list');

 let input2 = document.getElementById('input-box2');
 let button2 = document.getElementById('submit-button2');
 let showContainer2 = document.getElementById('show-container2');
 let listContainer2 = document.getElementById('list2');



 let date = new Date();
 console.log(`This is my time stampe: ${date.getTime()}`);

 const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

 function displayWords(value){
  input.value = value;
  removeElements();
 }

function removeElements(){
  listContainer.innerHTML = "";
}

 input.addEventListener("keyup", async() => {
  removeElements();
  if(input.value.length < 2){
    return false;
  }

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();

  


  jsonData.data["results"].forEach((result) => {
    let name = result.name;
    let div = document.createElement("div");
    div.style.cursor = "pointer"
    div.classList.add("autocomplete-items");
    div.setAttribute("onclick", "displayWords('" + name + "')");
    let word = "<b>" + name.substr(0, input.value.length) + "</b>";
    word += name.substr(input.value.length);
    div.innerHTML = `<p class="item">${word}</p>`;
    listContainer.appendChild(div);
  })
 })

 button.addEventListener("click", (getRsult = async () => {
  if(input.value.trim().length < 1) {
    console.log("Input cannot be blank");
  }
  showContainer.innerHTML = "";
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.data["results"].forEach((element) => {
    showContainer.innerHTML = `<div
    class="card-container">
    <div class="container-character-image">
    <img src="${
      element.thumbnail["path"] + "." + element.thumbnail["extension"]
    }"/></div>
    <div class="character-name">${element.name}</div>
    </div>`;
  });
  // console.log(jsonData.data["results"])
  // const availComics = jsonData.data.results[0].comics.available
  // document.getElementById("comic-number1").textContent = `Amount of comics: ${availComics}`
 })
 );
window.onload = () => {
  getRsult();
};



// function displayWords2(value){
//   input2.value = value;
//   removeElements2();
//  }

// function removeElements2(){
//   listContainer2.innerHTML = "";
// }

//  input.addEventListener("keyup", async() => {
//   removeElements2();
//   if(input2.value.length < 4){
//     return false;
//   }

//   const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input2.value}`;

//   const response2 = await fetch(url);
//   const jsonData2 = await response2.json();

  


//   jsonData2.data["results"].forEach((result) => {
//     let name = result.name;
//     let div = document.createElement("div");
//     div.style.cursor = "pointer"
//     div.classList.add("autocomplete-items");
//     div.setAttribute("onclick", "displayWords2('" + name + "')");
//     let word = "<b>" + name.substr(0, input2.value.length) + "</b>";
//     word += name.substr(input2.value.length);
//     div.innerHTML = `<p class="item">${word}</p>`;
//     listContainer2.appendChild(div);
//   })
//  })






button2.addEventListener("click", (getRsult2 = async () => {
  if(input2.value.trim().length < 1) {
    console.log("Input cannot be blank");
  }
  showContainer2.innerHTML = "";
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input2.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.data["results"].forEach((element) => {
    showContainer2.innerHTML = `<div
    class="card-container">
    <div class="container-character-image">
    <img src="${
      element.thumbnail["path"] + "." + element.thumbnail["extension"]
    }"/></div>
    <div class="character-name">${element.name}</div>
    </div>`;
  });
  // availComics = jsonData.data.results[0].comics.available
  // document.getElementById("comic-number2").textContent = `Amount of comics: ${availComics}`
  //console.log(jsonData.data)
 })
 );
window.onload = () => {
  getRsult2();
};



  const battleButton = document.getElementById('battle-btn');


  battleButton.addEventListener("click", async() => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;
    const url2 = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input2.value}`;
  
    const response = await fetch(url);
    const jsonData = await response.json();
    const response2 = await fetch(url2);
    const jsonData2 = await response2.json();
    const playerOneScore = jsonData.data.results[0].comics.available
    const playerTwoScore = jsonData2.data.results[0].comics.available
    const playerOneName = jsonData.data.results[0].name
    const playerTwoName = jsonData2.data.results[0].name
  
    if (playerOneScore > playerTwoScore) {
      document.getElementById('results').textContent = `${playerOneName} beats ${playerTwoName}: ${playerOneScore} - ${playerTwoScore}`
    }else {
      document.getElementById('results').textContent = `${playerTwoName} beats ${playerOneName}: ${playerTwoScore} - ${playerOneScore}`
    }
   })

   battleButton.addEventListener('mouseover', () => {
   battleButton.style.backgroundColor = '#ff9900';
   battleButton.style.color = '#ffffff'
   });

   battleButton.addEventListener('mouseout', () => {
    battleButton.style.backgroundColor = 'yellow'
    battleButton.style.color = 'black'
   })

  









