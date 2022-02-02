function formSubmitHandler(evt) {
  evt.preventDefault();

  const profileName = document.querySelector(".profile__name");
  const profileActivity = document.querySelector(".profile__activity");

  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;

  popupEditProfile.classList.remove("popup_opened");
}

popupForm.addEventListener("submit", formSubmitHandler);

const placeCards = [
  {
    name: "Мурманск",
    link: "./vendor/images/murmansk.jpg",
  },
  {
    name: "Кировск",
    link: "./vendor/images/kirovsk.jpg",
  },
  {
    name: "Кумертау",
    link: "./vendor/images/kumertau.jpg",
  },
  {
    name: "Омск",
    link: "./vendor/images/omsk.jpg",
  },
  {
    name: "Самара",
    link: "./vendor/images/samara.jpg",
  },
  {
    name: "Старокозьмодемьяновское",
    link: "./vendor/images/starokozmodemianovskoe.jpg",
  },
];

const cardsContainer = document.querySelector(".cards__list");
const cardsTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".cards__item");

function renderCard(nameCard, linkCard) {
  const cardElement = cardsTemplate.cloneNode(true);

  const cardNameElement = cardElement.querySelector(".cards__heading");
  const cardImgElement = cardElement.querySelector(".cards__image");
  const cardPopupNameElement = document.querySelector(".popup__image-caption");
  const cardPopupImgElement = document.querySelector(".popup__card-image");

  cardNameElement.textContent = nameCard;
  cardImgElement.alt = nameCard;
  cardImgElement.src = linkCard;

  const cardButtonDelete = cardElement.querySelector(".cards__delete-icon");
  cardButtonDelete.addEventListener("click", (event) => {
    event.target.closest(".cards__item").remove();
  });

  const cardLikeIcon = cardElement.querySelector(".cards__like-icon");
  cardLikeIcon.addEventListener("click", (event) => {
    event.target.classList.toggle("cards__like-icon_active");
  });

  cardImgElement.addEventListener("click", () => {
    cardPopupNameElement.textContent = cardNameElement.textContent;
    cardPopupImgElement.alt = cardImgElement.alt;
    cardPopupImgElement.src = cardImgElement.src;
    openPopup(popupCardImage);
  });

  cardsContainer.append(cardElement);
}

placeCards.forEach(function (item) {
  renderCard(item.name, item.link);
});

popupAddCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const placeNameInput = event.target.querySelector("#place-name-input");
  const placeName = placeNameInput.value;
  const placeImageUrlInput = event.target.querySelector("#img-url-input");
  const placeImage = placeImageUrlInput.value;

  renderCard(placeName, placeImage);
  closePopup(popupAddCard);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
});
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

closePopupButton[0].addEventListener("click", () => {
  closePopup(popupEditProfile);
});
closePopupButton[1].addEventListener("click", () => {
  closePopup(popupAddCard);
});
closePopupButton[2].addEventListener("click", () => {
  closePopup(popupCardImage);
});
