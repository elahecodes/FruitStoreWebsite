import React from 'react';

const login = () => {
    return (
        <div className='flex justify-center items-center'>
            <form className='w-1/3 h-[60%] flex flex-col gap-2' action="">
                <input className='w-full h-12 bg-neutral-200' type="text" />
                <input className='w-full h-12 bg-neutral-200' type="text" />
                
            </form>
        </div>
    );
};

export default login;