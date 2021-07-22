import * as React from "react";

function SvgWarning(props) {
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
        d="M11.284 4.442l-7.199 14.4A.8.8 0 004.801 20h14.398a.8.8 0 00.715-1.158l-7.199-14.4a.8.8 0 00-1.43 0zm.078 7.352h1.274v3.398h-1.274v-3.398zm0 4.53h1.274v1.132h-1.274v-1.132z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgWarning;
