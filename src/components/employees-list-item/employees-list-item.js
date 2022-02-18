import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, increase, like, onChangeInput}) => {
    let classNames = "list-item";
    if (increase) {
        classNames += " increase";
    }

    if (like) {
        classNames += " like";
    }

    return (
        <li className={classNames}>
            <span 
                className="list-item__label" 
                onClick={onToggleProp} 
                data-toggle="like">
                {name}
            </span>
            <input 
                type="text"
                className="list-item__input"
                defaultValue={salary + '$'} 
                onChange={(e) => onChangeInput(name, e.value)}/>
            <div className="list-item__btns">
                <button 
                    type="button"
                    className="btn-cookie"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    className="btn-trash"
                    onClick={() => onDelete()}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;