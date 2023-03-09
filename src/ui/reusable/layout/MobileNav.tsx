import React from "react";

type mobileLayoutProps = {
  children: React.ReactNode;
};
function MobileNav({ children }: mobileLayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default MobileNav;
