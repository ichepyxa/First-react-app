import './app-info.css';

const AppInfo = ({allEmployeesCount, employeesCountWithPremium}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployeesCount}</h2>
            <h2>Премию получат: {employeesCountWithPremium}</h2>
        </div>
    );
}

export default AppInfo;