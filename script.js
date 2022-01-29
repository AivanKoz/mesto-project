const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('#edit-profile');
const popupAddCard = document.querySelector('#add-card');

const addCardButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelectorAll('.popup__closing-button');
const saveButton = document.querySelector('.popup__save-button');

const popupForm = popupEditProfile.querySelector('.popup__form[name="edit_form"]')
const activityInput = popupEditProfile.querySelector('input[name="activity"]');
const nameInput = popupEditProfile.querySelector('input[name="name"]');

const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileActivity = profileInfo.querySelector('.profile__activity');

const placeCards = [
  {
    name: 'Мурманск',
    link: './vendor/images/murmansk.jpg'
  },
  {
    name: 'Кировск',
    link: './vendor/images/kirovsk.jpg'
  },
  {
    name: 'Кумертау',
    link: './vendor/images/kumertau.jpg'
  },
  {
    name: 'Омск',
    link: './vendor/images/omsk.jpg'
  },
  {
    name: 'Самара',
    link: './vendor/images/samara.jpg'
  },
  {
    name: 'Старокозьмодемьяновское',
    link: './vendor/images/starokozmodemianovskoe.jpg'
  }
  ];

  const nameCard = placeCards.name;
  const linkCard = placeCards.link;

//Карточки при загрузке

const cardsContainer = document.querySelector('.cards__list');
const cardsTemplate = document.querySelector('#cards-template').content.querySelector('.cards__item');

function renderCard (nameCard, linkCard) {

  const cardElement = cardsTemplate.cloneNode(true);
  
  const cardNameElement = cardElement.querySelector('.cards__heading');
  const cardImgElement = cardElement.querySelector('.cards__image');
  cardNameElement.textContent = nameCard;
  cardImgElement.alt = nameCard;
  cardImgElement.src = linkCard;

  const cardButtonDelete = cardElement.querySelector('.cards__delete-icon');
  cardButtonDelete.addEventListener('click', (event) => {
    event.target.closest ('.cards__item').remove();
  })

  const cardLikeIcon = cardElement.querySelector('.cards__like-icon');
  cardLikeIcon.addEventListener('click', (event) => {
    event.target.classList.toggle ('cards__like-icon_active');
  })

  cardsContainer.append(cardElement);
}

placeCards.forEach(function (item) {
  renderCard(item.name, item.link);
 });

 popupAddCard.addEventListener ('submit', (event) => {
  event.preventDefault();

  const placeNameInput = event.target.querySelector('#place-name-input');
  const placeName = placeNameInput.value;
  const placeImageUrlInput = event.target.querySelector('#img-url-input');
  const placeImage = placeImageUrlInput.value;

  renderCard(placeName, placeImage);

  closePopup(popupAddCard);
})


function openPopup(popup) {
  popup.classList.add("popup_opened");  
}
function closePopup(popup) {
  popup.classList.remove("popup_opened")  
}

editButton.addEventListener('click', () => {
  openPopup(popupEditProfile)
});
addCardButton.addEventListener('click', () => {
  openPopup(popupAddCard)
});

closePopupButton[0].addEventListener('click', (evt) => {
  closePopup(popupEditProfile)
});
closePopupButton[1].addEventListener('click', () => {
  closePopup(popupAddCard)
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileActivity.textContent = activityInput.value;

    popupEditProfile.classList.remove("popup_opened");  
}
  







