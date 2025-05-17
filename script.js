function changeText() {
  const textEl = document.getElementById('dynamicText');
  textEl.textContent = "Text Changed Dynamically!";
}

function toggleStyle() {
  const textEl = document.getElementById('dynamicText');
  textEl.classList.toggle('highlight');
}

function addOrRemoveBox() {
  const container = document.getElementById('boxContainer');
  const existingBox = document.getElementById('box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'box';
    box.className = 'box';
    container.appendChild(box);
  }
}
