import { useEffect, useState } from 'react';
import FileUpload from './FileUpload.jsx';
import { useParams } from 'react-router-dom';

export default function SendTask({ setTaskInfo }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [answerText, setAnswerText] = useState({ userId: 143, message: '' });
    const params = useParams();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.modal')) {
            closeModal();
        }
    };

    const handleSendAnswer = async () => {
        try {
            const formData = new FormData();
            formData.append('answer', JSON.stringify(answerText));
            selectedFiles.forEach((file) => {
                formData.append('files', file);
            });

            const response = await fetch(
                `http://185.84.162.160:8080/api/v1/tasks/${params.id}/answers`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to send answer');
            }

            const result = await response.json();
        } catch (error) {
            console.error('Error sending answer:', error);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <button
                className="bg-[#526ED3] text-white rounded-xl px-2 h-11 font-extrabold hover:bg-[#6C86E2] transition-colors duration-200 flex items-center text-[15px]"
                onClick={openModal}
            >
                Сдать задание
            </button>
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center"
                    onClick={handleOutsideClick}
                >
                    <div className="bg-white px-6 py-9 w-[600px] rounded-[24px] modal">
                        <h2 className="text-[28px] font-extrabold mb-4 text-[#191C30]/90">
                            Сдать задание
                        </h2>
                        <p className="text-[15px] font-medium text-[#191C30]/90">
                            Прикрепите файл с заданием
                        </p>
                        <form className="mt-8" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <FileUpload
                                    setSelectedFiles={setSelectedFiles}
                                    selectedFiles={selectedFiles}
                                />
                            </div>
                            <div className="mb-4 flex flex-col items-start">
                                <label
                                    htmlFor="textInput"
                                    className="text-[13px] text-[#1B1F3B]/65"
                                >
                                    Комментарий
                                </label>
                                <textarea
                                    id="textInput"
                                    placeholder="Напишите комментарий, если это необходимо"
                                    value={answerText.message}
                                    onChange={(e) =>
                                        setAnswerText({
                                            ...answerText,
                                            message: e.target.value,
                                        })
                                    }
                                    rows="4"
                                    className="focus:outline-[#526ED3] w-full mt-1 border border-[#E0E0E0] rounded-[12px] h-[140px] shadow-md resize-none overflow-auto p-4 text-[15px] placeholder:text-[15px] placeholder:text-[#1B1F3B]/65 placeholder:font-medium"
                                    cols="50"
                                />
                            </div>
                            <div className="flex gap-2 justify-end">
                                <button
                                    onClick={closeModal}
                                    className="border border-[#526ED3] text-[#526ED3]
                                    rounded-xl px-2 h-11 font-extrabold
                                    hover:bg-[#6C86E2]
									hover:text-white transition-colors
                                    duration-200 flex items-center text-[15px]"
                                >
                                    Отмена
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSendAnswer}
                                    className="bg-[#526ED3] text-white rounded-xl px-2 h-11 font-extrabold hover:bg-[#6C86E2] transition-colors duration-200 flex items-center text-[15px]"
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
