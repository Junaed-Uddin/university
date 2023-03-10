import { useState } from "react";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className={`${
                    isOpen === true
                        ? "mb-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                        : ""
                } `}
            >
                <button
                    className={`${
                        isOpen === false
                            ? "flex items-center justify-between w-full p-4 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-7"
                            : "flex items-center justify-between w-full p-4 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 mb-7"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-semibold text-[16px]">{title}</span>
                    <svg
                        className={`${
                            isOpen ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-500`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && <div className="p-4 pt-0">{children}</div>}
            </div>
        </div>
    );
}

export default Accordion;
