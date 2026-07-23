import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ productID }) => {
  const [rating, setRaring] = useState(0);

  useEffect(()=>{
    const saveRating = localStorage.getItem(`Rating${productID}`)
    if (saveRating) {
        setRaring(Number(saveRating))
    }
  },[productID]);
  
  const handelClick = (value) => {
    setRaring(value)
    localStorage.setItem(`Rating-${productID}`, value);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar className={`cursor-pointer hover:text-yellow-400 ${star<= rating ? 'text-yellow-400': 'text-neutral-500'}`} key={star} onClick={() => handelClick(star)} />

      ))}
    </div>
  );
};

export default Rating;