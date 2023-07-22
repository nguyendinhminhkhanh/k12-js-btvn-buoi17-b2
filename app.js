var div = document.getElementsByTagName('div')[0];
var attriClass = document.createAttribute('class');
attriClass.value = 'container';
div.setAttributeNode(attriClass);

var childDiv = document.createElement('div');
div.append(childDiv);

var elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Make your <span style="color: #3f872a;">choice</span> right now!';
childDiv.append(elementH1);

var elementSpan = document.createElement('span');
elementSpan.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse necessitatibus porro, autem sunt corporis culpa ea, quas non dolores deleniti cupiditate consequatur'
childDiv.append(elementSpan);
var spanClass = document.createAttribute('class');
spanClass.value = 'b';
elementSpan.setAttributeNode(spanClass);

var className = document.createAttribute('class');
className.value = 'a';
elementH1.setAttributeNode(className);

var elementImg = document.createElement('img');
var imgUrl = document.createAttribute('src')
imgUrl.value = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0TMXZNOtBeNsZt3SDVl0NAZVCptwPDiL3Y3CHkIoZtxjRAnE7';
elementImg.setAttributeNode(imgUrl)
childDiv.append(elementImg);
var classImg = document.createAttribute('class');
classImg.value = 'whImg';
elementImg.setAttributeNode(classImg)

console.log(elementH1);
