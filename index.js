// - Start -
clearMemory();
$('.key').click((clicked) => btnClicked(clicked.target.id.slice(4)));
// - - - -

function setValue(name, value) {
  localStorage.setItem(name, value);
}
function getValue(name) {
  return localStorage.getItem(name);
}

function clearMemory() {
  setValue('num1', '');
  setValue('num2', '');
  setValue('action', '');
  setValue('storagedValue', '');
  cleanDisplay();
}

function btnClicked(value) {
  switch (value) {
    case 'add':
      setValue('action', value);
      areReadyForMath();
      break;
    case 'sub':
      setValue('action', value);
      areReadyForMath();
      break;
    case 'equal':
      areReadyForMath();
      break;
    case 'clear':
      clearMemory();
      break;
    default:
      concatenatingValue(value);
  }
}

function concatenatingValue(value) {
  let storagedValue = getValue('storagedValue');

  if (storagedValue !== null) {
    let newValue = storagedValue + value;
    setValue('storagedValue', newValue);
    displayNumbers(getValue('storagedValue'));
  }
}

function areReadyForMath() {
  let num1 = Number(getValue('num1'));
  let storagedValue = Number(getValue('storagedValue'));

  if(storagedValue !== '' || storagedValue !== 0) {
    if(num1 !== 0 && num1 !== '') {
      setValue('num2', storagedValue);
      setValue('storagedValue', '');
      cleanDisplay();
      result();
    } else {
      setValue('num1', storagedValue);
      setValue('storagedValue', '');
      cleanDisplay();
    }
  } else {
    clearMemory();
  }
}

function result() {
  let num1 = Number(getValue('num1'));
  let num2 = Number(getValue('num2'));
  let action = getValue('action');

  if(action === 'add') {   
    displayNumbers(String(num1 + num2));
  } else if (action === 'sub') {
    displayNumbers(String(num1 - num2));
  }
}