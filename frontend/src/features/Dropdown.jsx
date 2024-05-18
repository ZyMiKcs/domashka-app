import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ defaultOption, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ id: '', title: '' });
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-fit" ref={dropdownRef}>
            <button
                className={`border border-[#E0E0E0] rounded-xl text-[13px] font-medium pl-3 pr-2 flex items-center gap-1 focus:outline-[#526ED3] focus:outline-2 h-8 ${
                    isOpen ? 'border-2 border-[#526ED3]' : ''
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption.title || defaultOption}
                {/* <img
                    src="./images/dropdownArrow2.svg"
                    alt="dropdown-arrow"
                    className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                /> */}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.29289 5.29289C3.68342 4.90237 4.31658 4.90237 4.70711 5.29289L8 8.58579L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L8.70711 10.7071C8.31658 11.0976 7.68342 11.0976 7.29289 10.7071L3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289Z"
                        fill="#191C30"
                        fillOpacity="0.9"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute bg-white border rounded-xl mt-1 py-2 text-[13px] w-fit text-nowrap z-10">
                    <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                            handleOptionClick({ id: -1, title: 'Предмет' })
                        }
                    >
                        Не выбрано
                    </li>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
