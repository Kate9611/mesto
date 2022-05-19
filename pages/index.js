//кнопка редактировать профиль
const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup_type_edit')
const closePopupButton = document.querySelector('.popup__close')
const titleElement = document.querySelector('.profile__title')
const nameFieldElement = document.querySelector('.popup__input_type_name')
const subtitleElement = document.querySelector('.profile__subtitle')
const descriptionElement = document.querySelector('.popup__input_type_description')
const buttonElement = document.querySelector('.popup__form')
const addButton = document.querySelector('.profile__add-button')
const popup1 = document.querySelector('.popup popup_type_photo')
//console.log(editButton)
//console.log(popup)
//console.log(closePopupButton)
function openPopup(){
    popup.classList.add('popup_open')
    nameFieldElement.value = titleElement.textContent;
    descriptionElement.value = subtitleElement.textContent;
}
function closePopup(){
    popup.classList.remove('popup_open')
}
function butSubmit(event){
    event.preventDefault();
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = descriptionElement.value;
    closePopup(popup)
}
editButton.addEventListener('click', openPopup)
closePopupButton.addEventListener('click', closePopup)
buttonElement.addEventListener('submit', butSubmit)