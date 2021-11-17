import React from 'react';

function Loading() {
    return (
        <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <span className="text-green-500 opacity-75 top-1/3 my-0 mx-auto block relative w-0 h-0">
                <i class="fas fa-circle-notch fa-spin fa-5x"></i>
                <h1 className="text-7xl -ml-20">Loading</h1>
            </span>
        </div>

    );
}

export default Loading;