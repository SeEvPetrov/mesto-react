import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_edit">
        <div className="popup__container">
          <button type="button" className="popup__button-close"></button>
          <form
            action="#"
            name="formEdit"
            className="popup__form form-edit"
            novalidate
          >
            <fieldset className="popup__form-set">
              <h2 className="popup__title">Редактировать профиль</h2>
              <label className="popup__form-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="popup__input popup__input_type_name"
                  required
                  placeholder="Введите имя"
                  autocomplete="off"
                  minlength="2"
                  maxlength="40"
                />
                <span className="popup__input-error" id="name-error"></span>
              </label>
              <label className="popup__form-field">
                <input
                  type="text"
                  name="about"
                  id="about"
                  className="popup__input popup__input_type_job"
                  required
                  placeholder="Введите профессию"
                  autocomplete="off"
                  minlength="2"
                  maxlength="200"
                />
                <span className="popup__input-error" id="about-error"></span>
              </label>
              <button
                type="submit"
                className="popup__submit popup__submit_type_edit"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      {/* модальное окно с добавлением карточки */}
      <div className="popup popup_add">
        <div className="popup__container">
          <button type="button" className="popup__button-close"></button>
          <form
            action="#"
            name="formAdd"
            className="popup__form form-add"
            novalidate
          >
            <fieldset className="popup__form-set">
              <h2 className="popup__title">Новое место</h2>
              <label className="popup__form-field">
                <input
                  type="text"
                  name="name"
                  id="title"
                  className="popup__input popup__input_type_title"
                  required
                  placeholder="Название"
                  autocomplete="off"
                  minlength="2"
                  maxlength="30"
                />
                <span className="popup__input-error" id="title-error"></span>
              </label>
              <label className="popup__form-field">
                <input
                  type="url"
                  name="link"
                  id="link"
                  className="popup__input popup__input_type_url"
                  required
                  placeholder="Ссылка на картинку"
                  autocomplete="off"
                />
                <span className="popup__input-error" id="link-error"></span>
              </label>
              <button
                type="submit"
                className="popup__submit popup__submit_type_add"
              >
                Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      {/* <!--модальное окно для увеличения картинки  --> */}
      <div className="popup popup_zoom">
        <div className="popup__container-photo">
          <button type="button" className="popup__button-close"></button>
          <figure className="popup__image">
            <img src="#" alt="фото" className="popup__zoom-image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      {/* <!-- Модальное окно удаления карточки при клике --> */}
      <div className="popup popup_confirm-delete">
        <div className="popup__close-container">
          <button
            aria-label="Закрыть"
            className="popup__button-close"
            type="button"
          ></button>
          <form className="popup__form" name="form-confirm-delete">
            <h2 className="popup__title-close">Вы уверены?</h2>
            <button
              className="popup__submit popup__submit_close"
              type="submit"
              id="delete-button"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Модальное окно загрузки аватара пользователя --> */}
      <div className="popup popup_add-avatar">
        <div className="popup__container">
          <button
            className="popup__button-close"
            type="button"
            aria-label="Кнопка закрытия карточки"
          ></button>
          <form
            action="#"
            className="popup__form edit-avatar"
            name="editAvatar"
            novalidate
          >
            <fieldset className="popup__form-set">
              <h2 className="popup__title">Обновить аватар</h2>
              <label className="popup__form-field">
                <input
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  autocomplete="off"
                  className="popup__input popup__input_type_card-link"
                  id="reference"
                  required
                />
                <span
                  className="popup__input-error"
                  id="reference-error"
                ></span>
              </label>
              <button
                type="submit"
                className="popup__submit popup__submit_type_avatar"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      {/* <!-- заготовленая карточка --> */}
      <template className="card">
        <li className="elements__item">
          <img className="elements__item-img" alt="" />
          <button type="button" className="elements__item-delete"></button>
          <div className="elements__description">
            <h2 className="elements__item-title"></h2>
            <div className="elements__like_container">
              <button type="button" className="elements__item-like"></button>
              <span className="elements__quantity-like">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
