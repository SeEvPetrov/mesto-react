import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import ConfirmPopup from "./ConfirmPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: "Гружу...", avatar: "мое фото", about: "еще чуть чуть"});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleConfirmDeleteClick = () => {
    setIsConfirmPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsConfirmPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onConfirmClick={handleConfirmDeleteClick}
      />
      </CurrentUserContext.Provider>
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ConfirmPopup 
        isOpen={isConfirmPopupOpen} 
        onClose={closeAllPopups} 
      />
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />
    </div>
  );
}

export default App;
