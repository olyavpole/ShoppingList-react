import './goods-list-item.css'

const GoodsListItem = (props) => {
    const {goodname, goodprice, onDelete, onToggleProp, checked, top} = props;

    let classNames = "goods-list-item";

    if (checked) {
        classNames += " checked";
    }

    if (top) {
        classNames += " star";
    }

    return (
        <li className={classNames}>
            <i className="fas fa-star"></i>
            <span className="goods-list-item__label"
                    onClick={onToggleProp}
                    data-toggle="top">
                {goodname}
            </span>
            <input type="text" className="goods-list-item__input"
            defaultValue={goodprice + ' руб'} />
            <div className="goods-list-item__icons">
                <button className="btn btn-check"
                        onClick={onToggleProp}
                        data-toggle="checked">
                    <i className="fas fa-check"></i>
                </button>
                <button className="btn btn-trash"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default GoodsListItem;