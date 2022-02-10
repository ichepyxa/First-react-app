import './employees-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-item">
            <span className="list-item__label">Vasya Pupkin</span>
            <input 
                type="text"
                className="list-item__input"
                defaultValue="1000$" />
            <div className="list-item__btns">
                <button 
                    type="button"
                    className="btn-cookie">
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    className="btn-trash">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;