const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('#edit-profile');
const popupAddCard = document.querySelector('#add-card');

const popupCardImage = document.querySelector('.popup__overlay');

const addCardButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelectorAll('.popup__closing-button');
const saveButton = document.querySelector('.popup__save-button');

const popupForm = popupEditProfile.querySelector('.popup__form[name="edit_form"]')
const activityInput = popupEditProfile.querySelector('input[name="activity"]');
const nameInput = popupEditProfile.querySelector('input[name="name"]');

const profileInfo = document.querySelector('.profile__info');
