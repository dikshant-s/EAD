function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  const resultField = document.getElementById('result');
  try {
      const result = eval(resultField.value);
      resultField.value = result;
  } catch (error) {
      resultField.value = 'Error';
  }
}
