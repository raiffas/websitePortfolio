import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={require(src)}
      alt={alt}
      {...restProps}
    //  loading={"lazy"}
    />
  );
};
export { Img };
