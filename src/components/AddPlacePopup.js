import PopupWithForm from "./PopupWithForm";

const AddPlacePopup =({ isOpen, onClose })=> {
    return (
        <PopupWithForm
            title="Новое место"
            name="add"
            textBtn="Создать"
            isOpen={isOpen}
            onClose={onClose}
        >
            <label className="popup__form-field">
                <input 
                    type="text" 
                    name="name" 
                    id="title" 
                    className="popup__input popup__input_type_title" 
                    required
                    placeholder="Название" 
                    autoComplete="off" 
                    minLength={2}
                    maxLength={30} />
                <span 
                    className="popup__input-error" 
                    id="title-error">
                </span>
            </label>
            <label className="popup__form-field">
                <input 
                    type="url" 
                    name="link" 
                    id="link" 
                    className="popup__input popup__input_type_url" 
                    required
                    placeholder="Ссылка на картинку" 
                    autoComplete="off" />
                <span 
                    className="popup__input-error" 
                    id="link-error">
                </span>
            </label>
        </PopupWithForm>
    )
};

export default AddPlacePopup;