const input = document.getElementById('autocomplete');
const optionsList = document.getElementById('autocomplete-options');
const options = optionsList.getElementsByTagName('li');



//focus response to clicking on the input, then performs function, here is creates a block item in display

 input.addEventListener('focus', () => {
   optionsList.style.display = 'block';
 });






//blur reverse the focus response, when user clicks away from item


input.addEventListener('blur', () => {
  setTimeout(() => {
    optionsList.style.display = 'none';
  }, 200); // Delay the hide to allow clicking on options
});


//function is triggered when something is typed in the input field

input.addEventListener('input', () => {
  const inputValue = input.value.toLowerCase();

  // Show/hide options based on user input
  for (let i = 0; i < options.length; i++) {
    const optionText = options[i].textContent.toLowerCase();
    if (optionText.includes(inputValue)) {
      options[i].style.display = 'block';
    } else {
      options[i].style.display = 'none';
    }
  }
});





let selectedIndex = -1;

input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    // Handle down arrow key
    e.preventDefault(); // Prevent page scrolling

    // Remove previous selection
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.remove('selected');
    }

    selectedIndex = Math.min(selectedIndex + 1, options.length - 1);

    // Highlight the selected option
    options[selectedIndex].classList.add('selected');

    // Set the input value to the selected option
    input.value = options[selectedIndex].textContent;
  } else if (e.key === 'ArrowUp') {
    // Handle up arrow key
    e.preventDefault(); // Prevent page scrolling

    // Remove previous selection
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.remove('selected');
    }

    selectedIndex = Math.max(selectedIndex - 1, -1);

    // Highlight the selected option
    if (selectedIndex >= 0) {
      options[selectedIndex].classList.add('selected');
      // Set the input value to the selected option
      input.value = options[selectedIndex].textContent;
    }
  } else if (e.key === 'Enter') {
    // Handle Enter key (select the option)
    if (selectedIndex >= 0) {
      input.value = options[selectedIndex].textContent;
      optionsList.style.display = 'none'; // Hide the options
    }
  }
});







// jsonData.data["results"].forEach((result) => {
//   let name = result.name;
//   let div = document.createElement("div");
//   div.style.cursor = "pointer"
//   div.classList.add("autocomplete-items");
//   div.setAttribute("onclick", "displayWords('" + name + "')");
//   let word = "<b>" + name.substr(0, input.value.length) + "</b>";
//   word += name.substr(input.value.length);
//   div.innerHTML = `<p class="item">${word}</p>`;
//   listContainer.appendChild(div);