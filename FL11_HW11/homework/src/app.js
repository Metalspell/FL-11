let rootNode = document.getElementById('root');
let counterOfClick = 2;
let step = 1;
let edge = 9;
let cols = document.querySelectorAll('.items');
[].forEach.call(cols, addDnDHandlers);

function enterTheData() {
  let actionText = document.getElementsByClassName('action-enter')[0].value;
  if(actionText !== '' && counterOfClick < edge) {
    counterOfClick++;
    let parent = document.getElementsByClassName('action-list')[0];
    let liElement = document.createElement('li');
    parent.appendChild(liElement);
    liElement.id = counterOfClick+step;
    liElement.className = 'items';
    liElement.setAttribute('draggable', 'true');

    let items = document.getElementsByClassName('items')[counterOfClick];
    
    let liChild1 = document.createElement('input');
    liChild1.type='checkbox';
    liChild1.className ='checkbox'+liElement.id;
    items.appendChild(liChild1);
    liChild1.setAttribute('onclick', 'denied(this.parentNode.id);')
    
    let liChild2 = document.createElement('span');
    liChild2.innerText=actionText;
    items.appendChild(liChild2);
    liChild2.className = 'position-name';

    let liChild3 = document.createElement('input');
    liChild3.type='text';  
    items.appendChild(liChild3);
    liChild3.className = 'edit-data edit-data'+liElement.id;
    liChild3.setAttribute('onclick', 'enterTheEditedData();')

    let liChild4 = document.createElement('i');
    liChild4.innerText='save'; 
    items.appendChild(liChild4);
    liChild4.className = 'material-icons add-edited add-edited'+liElement.id;
    liChild4.setAttribute('onclick', 'enterTheEditedData(this.parentNode.id);')

    let liChild5 = document.createElement('i');
    liChild5.innerText='edit';
    items.appendChild(liChild5);
    liChild5.className = 'material-icons edit';
    liChild5.setAttribute('onclick', 'editTheData(this.parentNode.id);')

    let liChild6 = document.createElement('i');
    liChild6.innerText='delete';
    items.appendChild(liChild6);
    liChild6.className = 'material-icons delete';
    liChild6.setAttribute('onclick', 'deleteTheData(this.parentNode.id);');

    if(counterOfClick === edge) {
      document.getElementsByClassName('atention')[0].style= 'display: block';
    }
    cols = document.querySelectorAll('.items');
    [].forEach.call(cols, addDnDHandlers);
  }
}

  

function deleteTheData(n) {
  document.getElementById(n).remove();
  counterOfClick -=step;
}

function editTheData(x) {
  document.getElementsByClassName('edit-data')[x-step].style= 'display: inline';
  document.getElementsByClassName('add-edited')[x-step].style= 'display: inline';
  document.getElementsByClassName('edit')[x-step].style= 'display: none';
  document.getElementsByClassName('position-name')[x-step].style= 'display: none';
  document.getElementsByClassName('delete')[x-step].style= 'display: none';
}

function enterTheEditedData(y) {
  let editText = document.getElementsByClassName('edit-data')[y-step].value;
  let newSpanText = document.getElementsByClassName('position-name')[y-step];
  newSpanText.innerText = editText;

  document.getElementsByClassName('edit-data')[y-step].style= 'display: none';
  document.getElementsByClassName('add-edited')[y-step].style= 'display: none';
  document.getElementsByClassName('edit')[y-step].style= 'display: inline';
  document.getElementsByClassName('position-name')[y-step].style= 'display: inline';
  document.getElementsByClassName('delete')[y-step].style= 'display: inline';
}

function denied(j) {
  let check = document.querySelector('input[type=checkbox].checkbox'+j);
  if (check.checked === false) {
    check.checked = true;
  }
}

let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragElem');
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd() {
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
