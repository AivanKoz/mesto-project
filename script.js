const popup = document.querySelector('.popup');

const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__closing-button');
const profileInfo = document.querySelector('.profile__info');
const saveButton = document.querySelector('.popup__save-button');

const popupForm = popup.querySelector('.popup__form[name="edit_form"]')
const activityInput = document.querySelector('input[name="activity"]');
const nameInput = document.querySelector('input[name="name"]');

const profileName = profileInfo.querySelector('.profile__name');
const profileActivity = profileInfo.querySelector('.profile__activity');

const initialCards = [
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

editButton.addEventListener('click', function openPopup() {
    popup.classList.add('popup_opened');
  });

closePopupButton.addEventListener('click', function closePopup() {
    popup.classList.remove('popup_opened');
  });
 
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileActivity.textContent = activityInput.value;

    popup.classList.remove("popup_opened");  
}
  
popupForm.addEventListener('submit', formSubmitHandler);




