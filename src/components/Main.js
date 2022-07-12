import avatar from '../images/image.jpg';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    
    return(
        <main>
          <section className="profile">
            <div className="profile__container">
              <button className="profile__edit-avatar"
                      onClick={onEditAvatar}>
                <img  src={avatar} 
                      alt="" 
                      className="profile__avatar" />
              </button>
              <div className="profile__info">
                <div className="profile__personal">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button type="button" 
                          className="profile__edit-button"
                          onClick={onEditProfile}></button>
                </div>
                <p className="profile__job">Инженер-проектировщик</p>
              </div>
            </div>
            <button type="button" 
                    className="profile__add-button"
                    onClick={onAddPlace}></button>
          </section>
          <section className="elements">
            <ul className="elements__list">

            </ul>
          </section>
        </main>
    )
}

export default Main;