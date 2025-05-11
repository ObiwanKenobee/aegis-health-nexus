
import React from 'react';

interface ThermometerProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const Thermometer = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: ThermometerProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      <path d="M12 9v5" />
    </svg>
  );
};

export default Thermometer;
