import './app-filter.css'

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonData = [
        {name: "all", label: "Все сотрудники"},
        {name: "increase", label: "На повышение"},
        {name: "salary", label: "З/П больше 1000$"},
        {name: "like", label: "Лучшие сотрудники"}
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn search-filter-btn" : "btn search-filter-btn search-filter-btn--outline";

        return (
            <button 
                onClick={() => onFilterSelect(name)}
                className={clazz}
                type="button"
                key={name}>
                {label}
            </button>
        );
    });

    return (
        <div className="search-filter">
            {buttons}
        </div>
    );
}

export default AppFilter;