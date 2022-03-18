import {Component} from 'react';

import './goods-add-form.css';

class GoodsAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, price} = this.state;
        const {onAdd} = this.props;

        onAdd(name, price);

        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        const {name, price} = this.state;

        let inputClassNames = 'input';

        if (name.length <= 1) {
            inputClassNames += ' red'
        }

        if (price.length <= 0) {
            inputClassNames += ' red'
        }

        return (
            <div className="goods-add-form">
                <h3 className="goods-add-form__title">Добавьте покупку</h3>
                <form className="add-form"
                        onSubmit={this.onSubmit}>
                    <input type="text" 
                        className={inputClassNames}
                        placeholder='Ваша покупка'
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                        required/>
                    <input type="number" 
                        className={inputClassNames}
                        placeholder='Ее стоимость'
                        name="price"
                        value={price}
                        onChange={this.onValueChange}
                        required/>
                    <button className="btn"
                            type='submit'
                            >
                                Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default GoodsAddForm;