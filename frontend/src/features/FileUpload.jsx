import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FileUpload({ selectedFiles, setSelectedFiles }) {
    const fileInputRef = useRef();
    const params = useParams();

    const handleFileChange = (e) => {
        console.log(Array.from(e.target.files));
        setSelectedFiles(Array.from(e.target.files));
    };

    return (
        <div>
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <button
                className="border border-[#526ED3] border-dashed rounded-[12px] w-full p-4 text-[15px] font-normal text-center align-middle text-[#1B1F3B]/65"
                onClick={(e) => {
                    fileInputRef.current.click();
                    e.preventDefault();
                }}
            >
                <span className="text-[#526ED3]">Выберите файлы</span> или
                перетяните их сюда
            </button>
            {selectedFiles?.length !== 0 && (
                <div className="w-full border border-[#E0E0E0] mt-1 rounded-[12px] max-h-[300px] overflow-y-auto">
                    {selectedFiles?.map((file, index) => (
                        <div
                            className={`${
                                index !== 0 ? 'border-t-[1px]' : ''
                            } p-2.5 border-[#E0E0E0] flex items-center gap-2 `}
                            key={index}
                        >
                            <p className="flex items-center gap-3 text-[15px] text-[#191C30]/90 font-medium">
                                <img src="../images/file.svg" alt="file-icon" />
                                {file.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
