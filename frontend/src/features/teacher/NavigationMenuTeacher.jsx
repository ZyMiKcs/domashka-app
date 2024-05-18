import { NavLink } from 'react-router-dom';
import '../../index.css';

export default function NavigationMenuTeacher() {
    return (
        <nav>
            <ul className="flex flex-col gap-1">
                <li className="flex flex-col justify-center">
                    <NavLink
                        to="/dashboard/teacher"
                        className="flex gap-2 items-center h-11 w-[204px] hover:bg-[#000000]/5 px-2 rounded-lg cursor-pointer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-[#1B1F3B]/40"
                        >
                            <path d="M1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H20C20.7957 2 21.5587 2.31607 22.1213 2.87868C22.6839 3.44129 23 4.20435 23 5V15C23 15.7957 22.6839 16.5587 22.1213 17.1213C21.5587 17.6839 20.7957 18 20 18H13V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V18H4C3.20435 18 2.44129 17.6839 1.87868 17.1213C1.31607 16.5587 1 15.7956 1 15V5C1 4.20435 1.31607 3.44129 1.87868 2.87868ZM20 16C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V15C3 15.2652 3.10536 15.5196 3.29289 15.7071C3.48043 15.8946 3.73478 16 4 16H20Z" />
                        </svg>
                        <h4 className="text-[15px] text-[#191C30]/90 font-medium">
                            Главная
                        </h4>
                    </NavLink>
                </li>
                <li className="flex flex-col justify-center">
                    <NavLink
                        to="/tasks/teacher"
                        className="flex gap-2 items-center h-11 w-[204px] hover:bg-[#000000]/5 px-2 rounded-lg cursor-pointer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-[#1B1F3B]/40"
                        >
                            <path d="M18 3.87866C17.7026 3.87866 17.4174 3.9968 17.2071 4.20709L4.90299 16.5112L4.37439 18.6256L6.48877 18.097L18.7929 5.79288C18.897 5.68875 18.9796 5.56514 19.036 5.42909C19.0923 5.29305 19.1213 5.14724 19.1213 4.99998C19.1213 4.85273 19.0923 4.70692 19.036 4.57087C18.9796 4.43483 18.897 4.31121 18.7929 4.20709C18.6888 4.10296 18.5652 4.02037 18.4291 3.96402C18.2931 3.90767 18.1473 3.87866 18 3.87866ZM15.7929 2.79288C16.3783 2.20751 17.1722 1.87866 18 1.87866C18.4099 1.87866 18.8158 1.9594 19.1945 2.11626C19.5732 2.27312 19.9173 2.50303 20.2071 2.79288C20.497 3.08272 20.7269 3.42681 20.8837 3.8055C21.0406 4.1842 21.1213 4.59008 21.1213 4.99998C21.1213 5.40988 21.0406 5.81576 20.8837 6.19446C20.7269 6.57316 20.497 6.91725 20.2071 7.20709L7.70713 19.7071C7.57897 19.8352 7.41839 19.9262 7.24256 19.9701L3.24256 20.9701C2.90178 21.0553 2.54129 20.9555 2.29291 20.7071C2.04453 20.4587 1.94468 20.0982 2.02988 19.7574L3.02988 15.7574C3.07384 15.5816 3.16476 15.421 3.29291 15.2929L15.7929 2.79288ZM11 20C11 19.4477 11.4477 19 12 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H12C11.4477 21 11 20.5523 11 20Z" />
                        </svg>
                        <h4 className="text-[15px] text-[#191C30]/90 font-medium">
                            Задания
                        </h4>
                    </NavLink>
                </li>
                {/* <li className="flex flex-col justify-center">
                    <NavLink
                        to="/subjects/teacher"
                        className="flex gap-2 items-center h-11 w-[204px] hover:bg-[#000000]/5 px-2 rounded-lg cursor-pointer"
                    >
                        <svg
                            id="subjects"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-[#1B1F3B]/40"
                        >
                            <path
                                d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h4 className="text-[15px] text-[#191C30]/90 font-medium">
                            Предметы
                        </h4>
                    </NavLink>
                </li> */}

                <li className="flex flex-col justify-center">
                    <NavLink
                        to="/dashboard"
                        className="flex gap-2 items-center h-11 w-[204px] hover:bg-[#000000]/5 px-2 rounded-lg cursor-pointer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-[#1B1F3B]/40"
                        >
                            <path d="M12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3ZM7.05025 7.05025C8.36301 5.7375 10.1435 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36301 7.05025 7.05025ZM11.4402 9.8007C11.6439 9.68095 11.8834 9.63717 12.1162 9.67713C12.3491 9.71709 12.5603 9.8382 12.7123 10.019C12.8644 10.1998 12.9476 10.4286 12.9471 10.6649V10.667C12.9471 10.8026 12.8321 11.0417 12.3923 11.3349C12.2029 11.4611 12.0064 11.5601 11.8533 11.6282C11.7782 11.6616 11.717 11.686 11.6769 11.7013C11.6569 11.7089 11.6425 11.7141 11.6344 11.717L11.6274 11.7195C11.1056 11.8954 10.8241 12.4605 10.9985 12.9834C11.1732 13.5073 11.7395 13.7904 12.2635 13.6156L12.2647 13.6152L12.2661 13.6148L12.2694 13.6136L12.2783 13.6106L12.3047 13.6013C12.3259 13.5938 12.3544 13.5834 12.3891 13.5702C12.4584 13.5438 12.5535 13.5057 12.6658 13.4557C12.8877 13.3571 13.1912 13.206 13.5018 12.9989C14.0618 12.6255 14.946 11.8653 14.9471 10.6691C14.9486 9.96036 14.6991 9.27394 14.2429 8.73154C13.7866 8.18915 13.153 7.82581 12.4545 7.70594C11.7559 7.58607 11.0375 7.7174 10.4265 8.07666C9.8155 8.43592 9.35145 8.9999 9.11658 9.66863C8.93358 10.1897 9.20764 10.7605 9.72872 10.9435C10.2498 11.1265 10.8206 10.8524 11.0036 10.3314C11.0819 10.1084 11.2366 9.92046 11.4402 9.8007ZM12.0001 14.334C11.4478 14.334 11.0001 14.7817 11.0001 15.334C11.0001 15.8863 11.4478 16.334 12.0001 16.334H12.0071C12.5594 16.334 13.0071 15.8863 13.0071 15.334C13.0071 14.7817 12.5594 14.334 12.0071 14.334H12.0001Z" />
                        </svg>
                        <h4 className="text-[15px] text-[#191C30]/90 font-medium">
                            Перейти на студента
                        </h4>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
