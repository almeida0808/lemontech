import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1075) {
  const [isDesktop, setIsDesktop] = useState(Window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}
