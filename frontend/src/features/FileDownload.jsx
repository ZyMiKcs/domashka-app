export default function FileDownload({ filePath, name, size }) {
    return (
        <div className="border-t-[2px] py-2 border-[#1B1F3B]/30 flex items-center gap-2 w-fit">
            <a
                href={filePath}
                target="_blank"
                className="flex items-center gap-3 text-[15px] text-[#191C30]/90 font-medium"
            >
                <img src="../images/file.svg" alt="file-icon" />
                {name}
            </a>
            <span className="text-[#1B1F3B]/65 font-medium text-[15px]">
                {size}
            </span>
        </div>
    );
}
