import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {filter: 'all-elems', label: 'Все покупки'},
        {filter: 'top-elems', label: 'Самые важные'},
        {filter: 'checked-elems', label: 'Уже купили'},
        {filter: 'not-checked-elems', label: 'Осталось купить'}
    ]

    const buttons = buttonsData.map(({filter, label}) => {

        const active = props.filter === filter;

        const btnClasses = active ? 'btn active' : 'btn';

        return (
            <button 
                className={btnClasses}
                type="button"
                key={filter}
                onClick={() => props.onUpdateFilter(filter)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btns">
            {buttons}
        </div>
    )
}

export default AppFilter;