    import React from 'react';

    function Modal({ closeModal, original_title }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-96 text-center">
            <div className="flex justify-end">
            <button 
                className="text-gray-500 hover:text-red-500" 
                onClick={() => closeModal(false)}
            >
                ✖
            </button>
            </div>
            <h2 className="text-xl font-bold mb-4 text-white">Movie Added!</h2>
            <p className="text-white">"{original_title}" has been added to your card.</p>
            <div className="mt-6 flex justify-center gap-4">
            <button 
                className="px-4 py-2 text-gray-200  text-sm font-medium  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => closeModal(false)}
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
    }

    export default Modal;
