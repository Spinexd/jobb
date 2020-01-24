/* const air = document.querySelector('#air');  /*.value, 10;*/
const mxf = document.querySelector('#mxf');
const air = document.querySelector('#air')
const bm = document.querySelector('#bm')



mxf.addEventListener('click', function (event) {
  document.querySelector('#inputter2').value = 50;
});

air.addEventListener('click', function (event){
  document.querySelector('#inputter2').value = 25;

})

bm.addEventListener('click', function (event){
  document.querySelector('#inputter2').value = 100;

})
/*parseInt(document.querySelector('#mxf').value, 10); */

function toggleList() {
  const toggle = document.querySelector('.drops');
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}

function toggleList2() {
  const toggle = document.querySelector('#broder');
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}
function toggleList3() {
  const toggle = document.querySelector('#broder2');
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}

function calc() {
  const textType = Node.textContent ? 'textContent' : 'innerText',
     inputter = parseFloat(document.querySelector('#inputter').value) || 0,
     inputter2 = parseFloat(document.querySelector('#inputter2').value) || 0,
    result = document.querySelector('#result');
  switch (document.querySelector('select').value.replace(/\s/g,'')){
    case '+':
     result[textType] = inputter + inputter2;
     break;
 case '-':
     result[textType] = inputter - inputter2;
     break;
 case '*':
     result[textType] = inputter * inputter2;
     break;
 case '/':
     result[textType] = inputter / inputter2;
     break;
     default:
         result[textType] = 'silly'
         break;
  }
}


/*function toggleList2() {
  const toggle = document.querySelector('.drops');
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
} */

/*if you add a value attribute on your button
 i.e. <button id="someId" value="50">My 50 button</button>
  you can get it with document.querySelector('#someId').value*/
/*
  const air = document.querySelector('#air');  /*.value, 10;
  const mxf = document.querySelector('#mxf');
parseInt((mxf.value) + 200));

  mxf.addEventListener('click', function (event) {
    document.querySelector('.display').innerHTML = ;
  });
  /*parseInt(document.querySelector('#mxf').value, 10);

  function toggleList() {
    const toggle = document.querySelector('.drops');
    if (toggle.style.display === 'none') {
      toggle.style.display = 'block';
    } else {
      toggle.style.display = 'none';
    }
  }
*/

/* function calc() {
  const textType = Node.textContent ? 'textContent' : 'innerText' // checks if textContent is available, fallsback onto using innerText if it isn't
  // for both of these II'm assuming you meant to get a class
  const inputter = parseFloat(document.querySelector('.inputter').value) || 0 // if .value is not parsable we get 0
  const inputter2 = parseFloat(document.querySelector('.inputter').value) || 0
  const result = document.querySelector('.result')
  const trimmedCalc = document.querySelector('.calculation').value.trim() // is probably a better idea for trimming the edges than using regex
  switch(trimmedCalc) { // easier to read than the above
 */
