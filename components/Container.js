import React, { forwardRef } from "react";

let Container = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div ref={ref} className={`mx-auto flex flex-col ${className}`}>
      {children}
    </div>
  );
});

export default Container;
