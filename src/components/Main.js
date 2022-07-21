import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onConfirmClick,
}) {
  
  const [cards, setCards] = useState([]);
  const userInfo = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <button className="profile__edit-avatar" onClick={onEditAvatar}>
            <img 
              src={userInfo.avatar} 
              alt="" 
              className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__personal">
              <h1 className="profile__name">{userInfo.name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userInfo.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            const id = card._id;
            return (
              <Card
                key={id}
                card={card}
                onConfirmClick={onConfirmClick}
                onCardClick={onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
