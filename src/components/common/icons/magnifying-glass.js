import React from "react";

const MagnifyingGlass = (props) => {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M19.054 18.046a.712.712 0 11-1.008 1.008l-3.42-3.42a.712.712 0 111.008-1.008l3.42 3.42zM8.29 15.842a7.553 7.553 0 110-15.105 7.553 7.553 0 010 15.105zm0-1.425a6.128 6.128 0 100-12.255 6.128 6.128 0 000 12.255zM4.775 7.72a.475.475 0 11-.95 0A3.895 3.895 0 017.72 3.825a.475.475 0 010 .95A2.945 2.945 0 004.775 7.72z"
        fill={props.fill || "#3F3356"}
      />
    </svg>
  );
}

export default MagnifyingGlass