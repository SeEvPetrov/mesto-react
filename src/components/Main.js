import avatar from '../images/image.jpg';

function Main() {

    const onHandleEditAvatarClick = () => {
        document.querySelector('.profile__edit-avatar').addEventListener('click', () => {
            document.querySelector('.popup_add-avatar').classList.add('popup_opened');
        })
    }
    
    return(
        <main>
      <section class="profile">
        <div class="profile__container">
          <button class="profile__edit-avatar"
                onClick={onHandleEditAvatarClick}>
            <img src={avatar} alt="" class="profile__avatar" />
          </button>
          <div class="profile__info">
            <div class="profile__personal">
              <h1 class="profile__name">Жак-Ив Кусто</h1>
              <button type="button" class="profile__edit-button"></button>
            </div>
            <p class="profile__job">Инженер-проектировщик</p>
          </div>
        </div>
        <button type="button" class="profile__add-button"></button>
      </section>
      <section class="elements">
        <ul class="elements__list">

        </ul>
      </section>
    </main>
    )
}

export default Main;