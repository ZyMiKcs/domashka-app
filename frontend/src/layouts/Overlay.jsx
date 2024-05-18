import NavigationMenu from '../features/NavigationMenu.jsx';
import Notification from '../features/Notification.jsx';
import ProfileMenu from '../features/ProfileMenu.jsx';
import SearchInput from '../features/SearchInput.jsx';

export default function Overlay({ children }) {
    return (
        <div className="flex flex-col h-screen">
            {/* <header className="relative bg-white h-16 flex justify-between items-center shadow-md">
                <img
                    src="./images/logo.svg"
                    className="ml-5 w-16 h-16"
                    alt="logo"
                />
                <div className="flex gap-8 mr-8">
                    <SearchInput />
                    <Notification count={1} />
                    <ProfileMenu />
                </div>
            </header> */}
            <div className="flex h-full">
                <aside className="basis-[236px] bg-[#F6F6F6] flex flex-col items-end py-8 pl-6">
                    <NavigationMenu />
                </aside>
                <main className="flex-grow overflow-y-auto bg-[#F6F6F6]">
                    {children}
                </main>
            </div>
        </div>
    );
}
