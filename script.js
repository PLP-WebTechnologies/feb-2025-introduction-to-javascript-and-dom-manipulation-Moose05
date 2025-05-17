function changeText() {
  const textEl = document.getElementById('dynamicText');
  textEl.textContent = "Welcome to your dynamic page";
}

function toggleStyle() {
  const box = document.getElementById('box');
  if (box) {
    if (box.classList.contains('left')) {
      box.classList.remove('left');
      box.classList.add('right');
    } else {
      box.classList.remove('right');
      box.classList.add('left');
    }
  }
}

function addOrRemoveBox() {
  const container = document.getElementById('boxContainer');
  const existingBox = document.getElementById('box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'box';
    box.className = 'box left'; // Start with "left" position

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/200'; 
    img.alt = 'Dynamic Box Image';

    box.appendChild(img);
    container.appendChild(box);
  }
}
