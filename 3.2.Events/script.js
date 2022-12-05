const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const emptyList = (list) => {
  while(list.children.length > 0){
    list.removeChild(list.lastElementChild);
  }
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

const randomColor = () => {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const clickOnSquare = (e) => {
  // Create a new square with the corresponding clicked color.
  const wrapper = document.querySelector('.displayedsquare-wrapper');
  const square = document.createElement('div');
  const color = e.target.classList[1];
  square.classList.add('displayedsquare', color);
  wrapper.appendChild(square);

  // Log the action that was done
  const listItem = document.createElement('li');
  let log = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`;
  listItem.innerText = log;
  document.querySelector('ul').appendChild(listItem);

  // Alert user with the color of the square.
  alert(color);
  
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener('keypress', (e) => {
  const list = document.querySelector('ul');

  // Change the background color and log it.
  if (e.code === 'Space'){
    const color = randomColor();
    e.target.style.backgroundColor = color;
    let listItem = document.createElement('li');
    listItem.innerText = `[${getElapsedTime()}] Change background to ${color}`;
    list.appendChild(listItem);
  }

  // Delete log.
  if (e.code === 'Backslash'){
    emptyList(list)
  }

  // Delete the dynamically created squares.
  if (e.code === 'KeyS'){
    const squaresWrapper = document.querySelector('.displayedsquare-wrapper'); 
    emptyList(squaresWrapper);
  }
})