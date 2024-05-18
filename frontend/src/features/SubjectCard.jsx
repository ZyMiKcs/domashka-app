export default function SubjectCard({ name }) {
    return (
        <div className="min-w-[296px] grow h-[156px] shadow-md rounded-[12px] border-2 border-[#EDEDED] flex flex-col items-center justify-center">
            <h3 className="text-[19px] text-[#191C30] font-extrabold text-wrap p-6">
                {name}
            </h3>
        </div>
    );
}
