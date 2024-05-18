import React, { useRef } from 'react';

export default function SearchInput() {
    const inputRef = useRef(null);

    const handleIconClick = () => {
        // При нажатии на иконку поиска устанавливаем фокус на поле ввода
        inputRef.current.focus();
    };

    return (
        <div>
            <div className="relative shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
                {/* <img
                    src="./images/search.svg"
                    role="presentation"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-text"
                    alt="hint-icon"
                    onClick={handleIconClick}
                /> */}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-text"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 8.29583 12.5892 9.49572 11.8907 10.4765L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.4765 11.8907C9.49572 12.5892 8.29583 13 7 13ZM7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                        fill="#1B1F3B"
                        fillOpacity="0.4"
                    />
                </svg>
                <input
                    ref={inputRef}
                    placeholder="Поиск"
                    type="text"
                    className="h-8 w-[225px] bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl placeholder:text-[13px] placeholder:text-[#1B1F3B]/65 pl-8 placeholder:font-semibold  focus:outline-[#526ED3] focus:outline-2 pr-1.5 text-[#191C30]/90 text-[13px] font-semibold"
                />
            </div>
        </div>
    );
}
