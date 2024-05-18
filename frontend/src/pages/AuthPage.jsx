import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
    const [showHint, setShowHint] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6]">
            <main className="flex flex-col items-center justify-center min-h-[80vh] bg-[#F6F6F6]">
                <img
                    src="./images/logo.svg"
                    alt="Logo"
                    className="w-[167px] h-[167px]"
                />
                <h1 className="text-4xl font-extrabold text-[#191C30]/90 mb-[52px]">
                    Добро пожаловать в Домашку!
                </h1>
                <div className="relative hover:shadow-md transition-shadow duration-300 rounded-xl">
                    <input
                        placeholder="Введите код"
                        type="text"
                        className="h-[56px] w-[320px] bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl placeholder:text-[15px] placeholder:text-[#1B1F3B]/65 pl-4 placeholder:font-semibold  focus:outline-[#526ED3] focus:outline-2 pr-12 text-[#191C30]/90 text-[15px] font-semibold"
                    />
                    <img
                        src="./images/hint.svg"
                        role="presentation"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                        alt="hint-icon"
                        onMouseEnter={() => setShowHint(true)}
                        onMouseLeave={() => setShowHint(false)}
                    />
                    {showHint && (
                        <div className="absolute bottom-full left-[90%] mb-2 bg-white p-2 rounded shadow-md text-[15px]">
                            Введите код приглашения
                        </div>
                    )}
                </div>
                <Link
                    to="/dashboard"
                    className="w-[320px] h-[44px] bg-[#526ED3] hover:bg-[#6C86E2] focus:bg-[#6C86E2] transition-colors duration-200 text-white rounded-xl font-bold mt-8 text-[15px] active:bg-[#314692] disabled:opacity-60 focus:outline-[#526ED3] focus:outline-2 flex items-center justify-center"
                >
                    Далее
                </Link>
            </main>
        </div>
    );
}
