
import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="search-filter">
            <button 
                className="btn search-filter-btn"
                type="button">
                Все сотрудники
            </button>
            <button 
                className="btn search-filter-btn search-filter-btn--outline"
                type="button">
                На повышение
            </button>
            <button 
                className="btn search-filter-btn search-filter-btn--outline"
                type="button">
                З/П больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;