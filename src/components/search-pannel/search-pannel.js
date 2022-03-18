import { Component } from 'react';

import './search-pannel.css'

class SearchPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: ''
        }
    }

    onUpdateInput = (e) => {
        const line = e.target.value;

        this.setState({
            line: line
        })

        const {onUpdateSearch} = this.props;
        onUpdateSearch(line);
    }

    render() {

        return (
            <input 
            type="text"
            className="search-input"
            placeholder="Найти покупку"
            onChange={this.onUpdateInput}
            value={this.state.line}/>
        )
    }

}

export default SearchPannel;