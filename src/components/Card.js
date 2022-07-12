
const Card = ({card}) => {
    return(
        <template className="card">
            <li className="elements__item">
            <img className="elements__item-img" />
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
    )
};

export default Card;