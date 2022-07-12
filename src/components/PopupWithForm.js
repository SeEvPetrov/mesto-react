const PopupWithForm = ({title, name, children}) => {
    return(
        <div className={`popup popup_${name}`}>
            <div 
                className="popup__container">
                <button 
                    type="button" 
                    className="popup__button-close"></button>
                <form 
                    action="#" 
                    name="{name}" 
                    className="popup__form form-edit" 
                    novalidate>
                    <fieldset 
                        className="popup__form-set">
                    <h2 
                        className="popup__title">{title}</h2>
                        {children}
                    <button 
                        type="submit" 
                        className="popup__submit popup__submit_type_edit">Сохранить</button>
                    </fieldset>
                </form>
            </div>
  </div>
    )
}

export default PopupWithForm;