import * as React from "react";

function SvgSearch(props) {
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
        d="M6.6 11.113a4.513 4.513 0 119.027 0 4.513 4.513 0 01-9.027 0zm8.234 4.852a6.113 6.113 0 111.131-1.131l2.799 2.798a.8.8 0 11-1.132 1.131l-2.798-2.798z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgSearch;
