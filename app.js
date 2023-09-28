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

 input.addEventListener("input", async(e) => {
  // if (e.key === 'ArrowUp' || e.key === 'ArrowDown'){
  //   return;
  // }
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
    input.addEventListener('blur', () => {
      setTimeout(() => {
        div.style.display = 'none';
      }, 200); // Delay the hide to allow clicking on options
    });
  })
  })
  let options = listContainer.children
  //console.log(options[2])
  //i think add all the extra code here!
  let selectedIndex = -1;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      console.log('Arrow Down Bitches!')
      //options[2].classList.add('auto-keydown');
       // Remove previous selection
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.remove('selected');
      options[selectedIndex].classList.remove('auto-keydown');
    }

    selectedIndex = Math.min(selectedIndex + 1, options.length - 1);

    // Highlight the selected option
    options[selectedIndex].classList.add('selected');
    options[selectedIndex].classList.add('auto-keydown')
    // Set the input value to the selected option
    input.value = options[selectedIndex].textContent;
  } else if (e.key === 'ArrowUp') {
    // Handle up arrow key
    e.preventDefault(); // Prevent page scrolling

    // Remove previous selection
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.remove('selected');
      options[selectedIndex].classList.remove('auto-keydown');
    }
    selectedIndex = Math.max(selectedIndex - 1, -1);

    // Highlight the selected option
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.add('selected');
      options[selectedIndex].classList.add('auto-keydown');
      // Set the input value to the selected option
      input.value = options[selectedIndex].textContent;
    }
  } else if (e.key === 'Enter') {
    // Handle Enter key (select the option)
      input.value = options[selectedIndex].textContent;
      displayWords(input.value);
      getRsult();
      input.value = ''
      selectedIndex = -1;
  }
});
 

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab') {
    input2.focus();
    e.preventDefault();
  }
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
  input.value = ''
  // const availComics = jsonData.data.results[0].comics.available
  // document.getElementById("comic-number1").textContent = `Amount of comics: ${availComics}`
 })
 );
window.onload = () => {
  getRsult();
};









button2.addEventListener("click", (getRsult2 = async () => {
  if(input2.value.trim().length < 1) {
    return;
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
    const element = jsonData.data.results[0]
    const element2 = jsonData2.data.results[0]
  
    if (playerOneScore > playerTwoScore) {
      document.getElementById('results').textContent = `${playerOneName} beats ${playerTwoName}: ${playerOneScore} - ${playerTwoScore}`
      document.getElementById('result-pic').innerHTML = `<div><img src="${
        element.thumbnail["path"] + "." + element.thumbnail["extension"]
      }" id="winner-pic" ></div>`
    }else {
      document.getElementById('results').textContent = `${playerTwoName} beats ${playerOneName}: ${playerTwoScore} - ${playerOneScore}`
      document.getElementById('result-pic').innerHTML = `<div><img src="${
        element2.thumbnail["path"] + "." + element2.thumbnail["extension"]
      }" id="winner-pic" ></div>`
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

  
 








   

