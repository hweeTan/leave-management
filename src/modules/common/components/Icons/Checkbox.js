import * as React from "react";

function SvgCheckbox(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5.5H9A3.5 3.5 0 005.5 9v6A3.5 3.5 0 009 18.5h6a3.5 3.5 0 003.5-3.5V9A3.5 3.5 0 0015 5.5zM9 4a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5V9a5 5 0 00-5-5H9z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgCheckbox;
