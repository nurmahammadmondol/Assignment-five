// Dom & Event Listener added Card-1
document
  .getElementById('Card1DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card1Money = InnerTextFunction('Card1Money');
    const Card1InputMoney = InputValueById('Card1InputMoney');

    const MinusNavbarMoneyCard1 = NavbarMoneyDetails - Card1InputMoney;
    const AddedCard1Money = Card1Money + Card1InputMoney;

    if (Card1InputMoney <= NavbarMoneyDetails && Card1InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoneyCard1;
      document.getElementById('Card1Money').innerText = AddedCard1Money;
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });

// ***************************************************************

// Dom & Event Listener added Card-2
document
  .getElementById('Card2DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card2Money = InnerTextFunction('Card2Money');
    const Card2InputMoney = InputValueById('Card2InputMoney');

    const MinusNavbarMoney = NavbarMoneyDetails - Card2InputMoney;
    const AddedCard2Money = Card2Money + Card2InputMoney;

    if (Card2InputMoney <= NavbarMoneyDetails && Card2InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoney;
      document.getElementById('Card2Money').innerText = AddedCard2Money;
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });

// ***************************************************************

// Dom & Event Listener added Card-2
document
  .getElementById('Card3DonateNowBTN')
  .addEventListener('click', function () {
    const NavbarMoneyDetails = InnerTextFunction('NavbarMoneyDetails');
    const Card3Money = InnerTextFunction('Card3Money');
    const Card3InputMoney = InputValueById('Card3InputMoney');

    const MinusNavbarMoney = NavbarMoneyDetails - Card3InputMoney;
    const AddedCard3Money = Card3Money + Card3InputMoney;

    if (Card3InputMoney <= NavbarMoneyDetails && Card3InputMoney > 0) {
      document.getElementById('NavbarMoneyDetails').innerText =
        MinusNavbarMoney;
      document.getElementById('Card3Money').innerText = AddedCard3Money;
    } else {
      alert("Error ! You don't have this amount in your account");
    }
  });
