import React from "react";

const sizeClasses = {
  txtKirangHaerangRegular32: "font-kiranghaerang font-normal",
  txtKirangHaerangRegular130: "font-kiranghaerang font-normal",
  txtJuraRegular32: "font-jura font-normal",
  txtJuraBold32: "font-bold font-jura",
  txtJuraRegular24: "font-jura font-normal",
  txtJuraRegular16: "font-jura font-normal",
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
