import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({isOpen, onClose}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    const onValueName = (e) => {
        setName(e.target.value)
    };

    const onValueTitle = (e) => {
        setTitle(e.target.value)
    };

    return (
       <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            isOpen={isOpen}
            onClose={onClose}
        >
            <label className="popup__form-field">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="popup__input popup__input_type_name" 
                    required
                    placeholder="Введите имя" 
                    autoComplete="off" 
                    minLength={2} 
                    maxLength={40}
                    value={name}
                    onChange={onValueName}/>
                <span  
                    className="popup__input-error" 
                    id="name-error">
                </span>
            </label>
            <label className="popup__form-field">
                <input 
                    type="text" 
                    name="about" 
                    id="about" 
                    className="popup__input popup__input_type_job" 
                    required
                    placeholder="Введите профессию" 
                    autoComplete="off" 
                    minLength={2} 
                    maxLength={200}
                    value={title}
                    onChange={onValueTitle}/>
                <span className="popup__input-error" id="about-error">
                </span>
            </label>

        </PopupWithForm>     
    )
}

export default EditProfilePopup;