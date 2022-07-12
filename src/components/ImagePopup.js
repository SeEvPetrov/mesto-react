
const ImagePopup = () => {
    return (
        <div className="popup popup_zoom">
            <div className="popup__container-photo">
            <button type="button" className="popup__button-close"></button>
            <figure className="popup__image">
                <img src="#" alt="фото" className="popup__zoom-image" />
                <figcaption className="popup__caption"></figcaption>
            </figure>
            </div>
        </div>
    )
}

export default ImagePopup;
