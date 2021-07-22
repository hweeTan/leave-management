import * as React from "react";

function SvgCheckCircle(props) {
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
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm3.413-9.706a.6.6 0 10-.847-.85l-3.855 3.838-1.275-1.29a.6.6 0 00-.853.843l1.698 1.719a.6.6 0 00.85.003l4.282-4.263z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgCheckCircle;
