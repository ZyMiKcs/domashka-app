import React, { useState, useRef, useEffect } from 'react';

export default function ProfileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div className="flex items-center gap-2.5" onClick={toggleMenu}>
                <img
                    src="./images/avatar.jpg"
                    className="h-8 w-8 rounded-full border border-[#E0E0E0]"
                    alt="avatar"
                />
                <button>
                    <img
                        src="./images/dropdownArrow.svg"
                        className="h-4 w-4 transform transition-transform duration-300 ease-in-out"
                        alt="dropdown-arrow-icon"
                        style={{
                            transform: menuOpen
                                ? 'rotate(-180deg)'
                                : 'rotate(0deg)',
                        }}
                    />
                </button>
            </div>
            {menuOpen && (
                <div
                    className={`absolute top-full right-0 mt-1 bg-white border border-[#E0E0E0] rounded-md shadow-md`}
                >
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Настройки
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Выйти
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
