function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const profileName = document.querySelector(".profile__name");
  const profileActivity = document.querySelector(".profile__activity");

  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;

  closePopup(popupEditProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

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

function createCard(item) {
  const cardElement = cardsTemplate.cloneNode(true);
  const cardNameElement = cardElement.querySelector(".cards__heading");
  const cardImgElement = cardElement.querySelector(".cards__image");
  cardNameElement.textContent = item.name;
  cardImgElement.alt = item.name;
  cardImgElement.src = item.link;

  const cardPopupNameElement = document.querySelector(".popup__image-caption");
  const cardPopupImgElement = document.querySelector(".popup__card-image");
  cardImgElement.addEventListener("click", () => {
    cardPopupNameElement.textContent = item.name;
    cardPopupImgElement.alt = item.name;
    cardPopupImgElement.src = item.link;
    openPopup(popupCardImage);
  });

  cardElement.querySelector(".cards__delete-icon").addEventListener("click", (event) => {
    event.target.closest(".cards__item").remove();
  });

  cardElement.querySelector(".cards__like-icon").addEventListener("click", (event) => {
    event.target.classList.toggle("cards__like-icon_active");
  });

  return cardElement;
}

function renderCard(name, link) {
  const cardElement = createCard({name, link});
  cardsContainer.prepend(cardElement);
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
  placeNameInput.value = '';
  placeImageUrlInput.value = '';
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

editProfClosBtn.addEventListener("click", () => {
  closePopup(popupEditProfile);
});
addCardClosBtn.addEventListener("click", () => {
  closePopup(popupAddCard);
});
imgClosBtn.addEventListener("click", () => {
  closePopup(popupCardImage);
});
