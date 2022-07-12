import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";

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
    </div>
  );
}

export default App;
