import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPannel from '../search-pannel/search-pannel';
import AppFilter from '../app-filter/app-filter';
import './app.css';
import GoodsList from '../goods-list/goods-list';
import GoodsAddForm from '../goods-add-form/goods-add-form';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {goodname: "кефир", goodprice: 70, checked: true, top: true, id: 1},
                {goodname: "молоко", goodprice: 80, checked: false, top:  false, id: 2},
                {goodname: "рыба", goodprice: 200, checked: false, top: false, id: 3},
                {goodname: "кекс", goodprice: 100, checked: false, top: false, id: 4},
                {goodname: "авокадо", goodprice: 200, checked: false, top: false, id: 5},
            ],
            maxId: 6,
            line: '',
            filter: 'all-elems'
        }
    }

    addItem = (name, price) => {
        this.setState(({data, maxId}) => {

            const newItem = {goodname: name, goodprice: price, checked: false, top: false, id: maxId}
            const newArr = [...data, newItem];

            return {
                data: newArr,
                maxId: maxId + 1
            }

        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            const newArr =  data.filter(elem => elem.id !== id)

            return {
                data: newArr
            }

        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                if (elem.id === id) {
                   return {...elem, [prop]: !elem[prop]}
                }

                return elem;
            })
        }))
    }

    onUpdateSearch = (line) => {
        this.setState({
            line: line
        })
    }

    searchLine = (elems, line) => {
        if (line.length === 0) {
            return elems;
        }

        return elems.filter(elem => {
            return elem.goodname.indexOf(line) > -1
        })
    }

    onUpdateFilter = (filter) => {
        this.setState({
            filter: filter
        })        
    }

    filterGoods = (elems, filter) => {

        switch (filter) {
            case 'all-elems':
                return elems;
            case 'top-elems':
                return elems.filter(elem => elem.top);
            case 'checked-elems':
                return elems.filter(elem => elem.checked);
            case 'not-checked-elems':
                return elems.filter(elem => !elem.checked);
            default:
                return elems;
        }

    }

    render() {

        const {data, line, filter} = this.state;
        const goodsAmmount = data.length;

        const visibleData = this.filterGoods(this.searchLine(data, line), filter);

        const alreadyBoughtGoods = data.filter(elem => {
            if (elem.checked) {
                return elem;
            }
        })

        const restAmmount = goodsAmmount - alreadyBoughtGoods.length;

        return (
            <div className='app'>
                <div className="app__inner">
                    <AppHeader title="Список покупок"
                                totalAmmount={goodsAmmount}
                                restAmmount={restAmmount}/>
                    <GoodsAddForm onAdd={this.addItem}/>
                    <GoodsList data={visibleData}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp}/>
                    <div className="search-pannel">
                        <AppFilter filter={filter}
                                onUpdateFilter={this.onUpdateFilter}/>
                        <SearchPannel onUpdateSearch={this.onUpdateSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;