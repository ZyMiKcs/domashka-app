import React from 'react';

export default function Notification({ count }) {
    return (
        <button className="relative">
            <img
                src="./images/notification.svg"
                alt="notification-icon"
                className="w-4 h-4"
            />
            {count > 0 && (
                <span className="absolute top-0 left-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[13px]">
                    {count}
                </span>
            )}
        </button>
    );
}
