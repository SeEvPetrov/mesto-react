
const Card = ({card, onCardClick}) => {

    const handleClick = () => {
        onCardClick(card);
    };

    return(
        <>
            <li className="elements__item">
            <img 
                className="elements__item-img"
                src={card.link}
                alt={card.name}
                onClick={handleClick}/>
            <button 
                type="button" 
                className="elements__item-delete"></button>
            <div className="elements__description">
                <h2 className="elements__item-title">{card.name}</h2>
                <div className="elements__like_container">
                <button 
                    type="button" 
                    className="elements__item-like"></button>
                <span className="elements__quantity-like">{card.likes.length}</span>
                </div>
            </div>
            </li>
        </>
    )
};

export default Card;