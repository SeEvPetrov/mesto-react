const PopupWithForm = ({title, name, children, isOpen, onClose, textBtn}) => {
   
    return(
        <div className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
            <div 
                className="popup__container">
                <button 
                    type="button" 
                    className="popup__button-close"
                    onClick={onClose}></button>
                <form 
                    action="#" 
                    name="{name}" 
                    className="popup__form form-edit" 
                    noValidate>
                    <fieldset 
                        className="popup__form-set">
                    <h2 
                        className="popup__title">{title}</h2>
                        {children}
                    <button 
                        type="submit" 
                        className="popup__submit popup__submit_type_edit">{textBtn}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;