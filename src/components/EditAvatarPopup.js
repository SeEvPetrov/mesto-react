import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup=({isOpen, onClose}) => {
    return(
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            textBtn="Обновить"
            isOpen={isOpen}
            onClose={onClose}
        >
            <label className="popup__form-field">
                <input 
                    type="url" 
                    name="link" 
                    placeholder="Ссылка на картинку" 
                    className="popup__input popup__input_type_card-link" 
                    id="reference" 
                    required />
                <span 
                    className="popup__input-error" 
                    id="reference-error"></span>
            </label>
        </PopupWithForm>
    )
};

export default EditAvatarPopup;