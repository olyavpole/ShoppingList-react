import { Component } from 'react';

import './app-header.css';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {totalAmmount, restAmmount, allPrice} = this.props
    
        return (
            <div className="app-header">
                <h1 className="app-header__title">Список покупок</h1>
                <h2 className="app-header__subtitle">Всего покупок: {totalAmmount}</h2>
                <h2 className="app-header__subtitle">Осталось купить: {restAmmount}</h2>
            </div>
        )
    }
}

export default AppHeader;