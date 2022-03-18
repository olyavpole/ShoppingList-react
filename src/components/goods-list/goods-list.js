import './goods-list.css';
import GoodsListItem from '../goods-list-item/goods-list-item';

const GoodsList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(elem => {
        return (
            <GoodsListItem goodname={elem.goodname} 
                        goodprice={elem.goodprice} 
                        checked={elem.checked} 
                        top={elem.top}
                        key={elem.id}
                        onDelete={() => onDelete(elem.id)}
                        onToggleProp={(e) => onToggleProp(elem.id, e.currentTarget.getAttribute('data-toggle'))}/>
        ) // аналогичная запись <GoodsListItem {...elem}/> - это запись с использованием spread оператора, который разворачивает объекты, пока мне непонятно(((, надо повторить его
    })

    return (
        <ul className="goods-list">
            {elements}
        </ul>
    )
}

export default GoodsList;