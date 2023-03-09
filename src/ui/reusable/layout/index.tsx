import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useScreenSize from "@/hooks/useScreenSize";

type layoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: layoutProps) {
  const { width } = useScreenSize();

  return (
    <div>
      {width >= 1024 ? (
        <DesktopNav>{children}</DesktopNav>
      ) : (
        <MobileNav>{children}</MobileNav>
      )}
    </div>
  );
}

export default Layout;
