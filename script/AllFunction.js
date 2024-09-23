// Inner Text Function //
function InnerTextFunction(textMoney) {
  const Text = document.getElementById(textMoney).innerText;
  const ChangeInNumber = parseFloat(Text);
  return ChangeInNumber;
}

// Input Text Function //
function InputValueById(InputField) {
  const InputNumber = document.getElementById(InputField).value;
  const ChangeInNumberToInputNumber = parseFloat(InputNumber);
  return ChangeInNumberToInputNumber;
}
