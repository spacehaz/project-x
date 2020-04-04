import React from "react";

const FullStar = (props) => {
  return (
    <svg width={14} height={14} fill="none" {...props}>
      <path
        d="M7.453.281l1.89 3.827 4.224.615a.505.505 0 01.28.862L10.79 8.56l.722 4.208a.506.506 0 01-.734.532L7 11.318l-3.778 1.985a.506.506 0 01-.733-.533l.721-4.205L.153 5.588a.505.505 0 01.28-.861l4.224-.618L6.547.282a.506.506 0 01.906 0z"
        fill={props.fill || "#FFCF5C"}
      />
    </svg>
  )
}

export default FullStar