import * as React from "react";

function SvgCheckboxChecked(props) {
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
        d="M9 4a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5V9a5 5 0 00-5-5H9zm1.5 9.19l4.72-4.72a.75.75 0 011.06 1.06l-5.25 5.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgCheckboxChecked;
