import Dropdown from '../features/Dropdown.jsx';
import SearchInput from '../features/SearchInput.jsx';
import MyDatePicker from '../features/MyDatePicker.jsx';

let subjectOptions = [
    {
        id: 1,
        title: 'База данных',
    },
    {
        id: 2,
        title: 'Программирование',
    },
    {
        id: 3,
        title: 'Метрология',
    },
];

let teachersOptions = [
    {
        id: 1,
        title: 'Титов Ю.П.',
    },
    {
        id: 2,
        title: 'Ткачев О.А.',
    },
    {
        id: 3,
        title: 'Грабовский М.Н.',
    },
];

let statusOptions = [
    {
        id: 1,
        title: 'Принято',
    },
    {
        id: 2,
        title: 'Новое',
    },
    {
        id: 3,
        title: 'На проверке',
    },
    {
        id: 4,
        title: 'Скоро дедлайн',
    },
];

export default function SortTasksWidget() {
    return (
        <div className="flex mt-7 justify-between z-40">
            <div className="flex items-center gap-2">
                <Dropdown defaultOption={'Предмет'} options={subjectOptions} />
                <Dropdown
                    defaultOption={'Преподаватель'}
                    options={teachersOptions}
                />
                <Dropdown defaultOption={'Статус'} options={statusOptions} />
                {/* <MyDatePicker /> */}
            </div>
            <SearchInput />
        </div>
    );
}
