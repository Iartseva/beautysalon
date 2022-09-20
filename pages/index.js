import Popup from '../scripts/components/Popup.js';
import {buttonSignUp, buttonMore, buttonComplex, buttonEducation, buttonVIP, buttonImage,
selectorPopupImage, selectorPopupRequest,
popupImg, popupCapture} from '../scripts/utils/data.js';


//попап картинки
const popupImage = new Popup(selectorPopupImage);

buttonImage.addEventListener('click', (evt) => {
  popupImg.src = evt.target.src;
  popupImage.open();
});

popupImage.setEventListeners();

//попап записи
const popupRequest = new Popup(selectorPopupRequest);

buttonSignUp.addEventListener('click', () => {
  popupRequest.open();

});

popupRequest.setEventListeners();
