import Link from "next/link";
import { forwardRef } from "react";

function MobileNav({}, ref) {
  return (
    <nav
      ref={ref}
      className={`mobile-nav fixed flex top-0 w-full z-20 justify-center items-center h-[100vh] bg-white text-green overflow-hidden`}
      style={{ clipPath: "circle(0% at 100% 0%)" }}
    >
      <div className="flex flex-col gap-10 text-5xl">
        <Link href={"#about"}>About</Link>
        <Link href={"#projects"}>Projects</Link>
      </div>
    </nav>
  );
}

export default forwardRef(MobileNav);
