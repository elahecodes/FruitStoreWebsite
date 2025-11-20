import React from 'react';

const sliderBanner = ({items , btnPosition , NumsOfItems , width , direction , isImage}) => {
    return (
        <div>
            <div className='container-main overflow-hidden w-full h-auto border'>
                <div className='slides-container'>
                {NumsOfItems.map((item , index)=>(
                    isImage ?(
                    <img key={index} src={item.slide} alt='' />
                ) 
                :
                (<div key={index} className='slide'></div>

               ))
                )}
                </div>
            </div>
        </div>
    );
};

export default Sliders;