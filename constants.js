const popupEditProfile = document.querySelector('#edit-profile');
const popupAddCard = document.querySelector('#add-card');

const popupCardImage = document.querySelector('.popup__overlay');

const addCardButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const editProfClosBtn = document.querySelector('#editprofclos-btn');
const addCardClosBtn = document.querySelector('#addcardclos-btn');
const imgClosBtn = document.querySelector('#imageclos-btn');

const profileForm = popupEditProfile.querySelector('.popup__form[name="edit_form"]')
const activityInput = popupEditProfile.querySelector('input[name="activity"]');
const nameInput = popupEditProfile.querySelector('input[name="name"]');

const profileInfo = document.querySelector('.profile__info');
