// Blog Button
document.getElementById('blogBTN').addEventListener('click', function () {
  window.location.href = 'html/Blog.html';
});

// Dom & Event Listener added Card-1
document
  .getElementById('Card1DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card1Money = InnerTextFunction('Card1Money');
    const Title = CardTitleFunction('Card1title');
    const Card1InputMoney = InputValueById('Card1InputMoney');

    const MinusNavbarMoneyCard1 = NavbarMoneyDetails - Card1InputMoney;
    const AddedCard1Money = Card1Money + Card1InputMoney;

    if (Card1InputMoney <= NavbarMoneyDetails && Card1InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoneyCard1;
      document.getElementById('Card1Money').innerText = AddedCard1Money;

      const Model = document.getElementById('my_modal_5');

      const historyNewFile = document.createElement('div');
      historyNewFile.classList.add(
        'border',
        'w-full',
        'p-5',
        'my-5',
        'rounded-lg'
      );
      const now = new Date();
      const formattedTime = now.toString();

      historyNewFile.innerHTML = `
      <h1 class='font-extrabold text-xl mb-2'> ${Card1InputMoney} Taka is ${Title}</h1>
      <p> Date : ${formattedTime}</p>
      `;

      document.getElementById('DonateHistoryList').appendChild(historyNewFile);
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });

// Model Card 1
function ModelOne() {
  const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
  const Card1Money = InnerTextFunction('Card1Money');
  const Card1InputMoney = InputValueById('Card1InputMoney');
  const OutputAddNumber = Card1Money + Card1InputMoney;

  if (OutputAddNumber > Card1Money && Card1InputMoney <= NavbarMoneyDetails) {
    document.getElementById('my_modal_5').showModal();
  }
}
// ***************************************************************

// Dom & Event Listener added Card-2
document
  .getElementById('Card2DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card2Money = InnerTextFunction('Card2Money');
    const Title = CardTitleFunction('Cart2title');
    const Card2InputMoney = InputValueById('Card2InputMoney');

    const MinusNavbarMoney = NavbarMoneyDetails - Card2InputMoney;
    const AddedCard2Money = Card2Money + Card2InputMoney;

    if (Card2InputMoney <= NavbarMoneyDetails && Card2InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoney;
      document.getElementById('Card2Money').innerText = AddedCard2Money;

      const historyCard2NewFile = document.createElement('div');
      historyCard2NewFile.classList.add(
        'border',
        'w-full',
        'p-5',
        'my-5',
        'rounded-lg'
      );
      const now = new Date();
      const formattedTime = now.toString();

      historyCard2NewFile.innerHTML = `
      <h1 class='font-extrabold text-xl mb-2'> ${Card2InputMoney} Taka is ${Title}</h1>
      <p> Date : ${formattedTime}</p>
      `;

      document
        .getElementById('DonateHistoryList')
        .appendChild(historyCard2NewFile);
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });

// Model Card 2
function ModelTwo() {
  const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
  const Card2Money = InnerTextFunction('Card2Money');
  const Card2InputMoney = InputValueById('Card2InputMoney');
  const Output2AddNumber = Card2Money + Card2InputMoney;

  if (Output2AddNumber > Card2Money && Card2InputMoney <= NavbarMoneyDetails) {
    document.getElementById('my_modal_5').showModal();
  }
}
// ***************************************************************

// Dom & Event Listener added Card-3
document
  .getElementById('Card3DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card3Money = InnerTextFunction('Card3Money');
    const Title = CardTitleFunction('Card3title');
    const Card3InputMoney = InputValueById('Card3InputMoney');

    const MinusNavbarMoney = NavbarMoneyDetails - Card3InputMoney;
    const AddedCard3Money = Card3Money + Card3InputMoney;

    if (Card3InputMoney <= NavbarMoneyDetails && Card3InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoney;
      document.getElementById('Card3Money').innerText = AddedCard3Money;

      const historyCard3NewFile = document.createElement('div');
      historyCard3NewFile.classList.add(
        'border',
        'w-full',
        'p-5',
        'my-5',
        'rounded-lg'
      );
      const now = new Date();
      const formattedTime = now.toString();

      historyCard3NewFile.innerHTML = `
      <h1 class='font-extrabold text-xl mb-2'> ${Card3InputMoney} Taka is ${Title}</h1>
      <p> Date : ${formattedTime}</p>
      `;

      document
        .getElementById('DonateHistoryList')
        .appendChild(historyCard3NewFile);
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });

// Model Card 3
function ModelThree() {
  const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
  const Card3Money = InnerTextFunction('Card3Money');
  const Card3InputMoney = InputValueById('Card3InputMoney');
  const OutputAddNumber = Card3Money + Card3InputMoney;

  if (OutputAddNumber > Card3Money && Card3InputMoney <= NavbarMoneyDetails) {
    document.getElementById('my_modal_5').showModal();
  }
}

// Two Button
document
  .getElementById('DonationPartBTN')
  .addEventListener('click', function () {
    const DonationAllCartPart = UnhideItem('DonateAllCard');

    const BG_colorAdd = document
      .getElementById('DonationPartBTN')
      .classList.add('bg-[#D2F8A0]');
    const BG_ColorRemove = document
      .getElementById('HistoryPartBTN')
      .classList.remove('bg-[#D2F8A0]');
  });

document
  .getElementById('HistoryPartBTN')
  .addEventListener('click', function () {
    const DonationAllCartPart = UnhideItem('DonateHistory');
    const Footer = document.getElementById('Footer').classList.add('hidden');

    const BG_ColorRemove = document
      .getElementById('DonationPartBTN')
      .classList.remove('bg-[#D2F8A0]');
    const BG_colorAdd = document
      .getElementById('HistoryPartBTN')
      .classList.add('bg-[#D2F8A0]');
  });

// **************************************************************************

// **************************************************************************
