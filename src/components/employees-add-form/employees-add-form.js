import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h2>Добавьте нового сотрудника</h2>
            <form className="add-form">
                <input 
                    type="text" 
                    className="add-form-input"
                    placeholder="Как его зовут?" />
                <input 
                    type="number" 
                    className="add-form-input"
                    placeholder="З/П в ;?" />

                <button 
                    type="submit"
                    className="btn btn--outline">
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;