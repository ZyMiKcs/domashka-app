import NavigationMenuTeacher from '../../features/teacher/NavigationMenuTeacher.jsx';

export default function OverlayTeacher({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-full">
                <aside className="basis-[236px] bg-[#F6F6F6] flex flex-col items-end py-8 pl-6">
                    <NavigationMenuTeacher />
                </aside>
                <main className="flex-grow overflow-y-auto bg-[#F6F6F6]">
                    {children}
                </main>
            </div>
        </div>
    );
}
