import React from "react";

const sizeClasses = {
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtRubikRegular14: "font-normal font-rubik",
  txtRubikSemiBold36: "font-rubik font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtRubikMedium20: "font-medium font-rubik",
  txtRubikSemiBold16: "font-rubik font-semibold",
  txtRubikMedium24: "font-medium font-rubik",
  txtRubikRegular16: "font-normal font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
