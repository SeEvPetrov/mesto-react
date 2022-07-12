import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
};

const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
};

const handleAddPlaceClick = () => {
  setIsAddPlacePopupOpen(true);
};

const closeAllPopups = () => {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
};

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
      <Footer />
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}/>
      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}/>
      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
