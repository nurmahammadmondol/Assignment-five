// Inner Text Function //
function InnerTextFunction(textMoney) {
  const Text = document.getElementById(textMoney).innerText;
  const ChangeInNumber = parseFloat(Text);
  return ChangeInNumber;
}

// Card Title //
function CardTitleFunction(title) {
  const Title = document.getElementById(title).innerText;
  return Title;
}

// function addTime(Time) {
//   const timeElement = document.getElementById(Time);
//   const now = new Date();

//   const formattedTime = now.toString();

//   timeElement.innerText = `Date : ${formattedTime}`;
// }

// Input Text Function //

function InputValueById(InputField) {
  const InputNumber = document.getElementById(InputField).value;
  const ChangeInNumberToInputNumber = parseFloat(InputNumber);
  return ChangeInNumberToInputNumber;
}

// Hide All Items & Unhide 1 Item Part //
function UnhideItem(idName) {
  // main part
  const DonateAllCardArticle1 = document
    .getElementById('DonateAllCard')
    .classList.add('hidden');
  const DonateHistoryArticle2 = document
    .getElementById('DonateHistory')
    .classList.add('hidden');

  const UnHideItem = document.getElementById(idName).classList.remove('hidden');
}
