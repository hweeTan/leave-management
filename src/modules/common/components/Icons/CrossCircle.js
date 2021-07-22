import * as React from "react";

function SvgCrossCircle(props) {
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
        d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zM8.47 15.53a.75.75 0 010-1.06L10.94 12 8.47 9.53a.75.75 0 011.06-1.06L12 10.94l2.47-2.47a.75.75 0 111.06 1.06L13.06 12l2.47 2.47a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 01-1.06 0z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgCrossCircle;
