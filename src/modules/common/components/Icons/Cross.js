import * as React from "react";

function SvgCross(props) {
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
        d="M18.759 6.406a.824.824 0 10-1.165-1.165L12 10.835 6.406 5.241A.824.824 0 105.24 6.406L10.835 12l-5.594 5.594a.824.824 0 001.165 1.165L12 13.165l5.594 5.594a.824.824 0 001.165-1.165L13.165 12l5.594-5.594z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgCross;
