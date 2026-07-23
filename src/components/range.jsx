import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { formatPrice } from "../helper/functions";

const PriceRange = () => {
  const [values, setValues] = useState([100000, 10000000]);

  return (
    <div>
      <Range
        step={10}
        min={100000}
        max={10000000}
        rtl={true}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="w-11/12 mx-auto h-10 flex items-center"
          >
            <div
              ref={props.ref}
              className="w-full h-2 rounded-full"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#e5e7eb", "#ffa500", "#e5e7eb"],
                  min: 100000,
                  max: 10000000,
                  rtl: true,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;

          return (
            <div
              key={key}
              {...restProps}
              className="h-5 w-5 rounded-full bg-orange border-2 border-white shadow-md"
            />
          );
        }}
      />

      <div className="border bg-white h-8 rounded-md border-neutral-100 flex justify-center mt-4 items-center gap-2">
        <span className="text-xs text-neutral-800">
          {formatPrice(values[0])}
        </span>
        <span className="text-xs">تومان</span>
        <span className="text-xs text-neutral-800">
          {formatPrice(values[1])}
        </span>
        <span className="text-xs">تومان</span>
      </div>
    </div>
  );
};

export default PriceRange;
