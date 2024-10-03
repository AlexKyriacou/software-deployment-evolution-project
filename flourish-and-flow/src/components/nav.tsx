import * as React from "react";
import { ModeToggle } from "@/components/nav/mode-toggle";
import { MainNav } from "@/components/nav/main-nav";
import Link from "next/link";
import Image from "next/image";

export default async function Nav() {
  return (
    <div className="border-b">
      <div className="mx-auto max-w-[1400px]">
        <div className="ml-auto flex h-16 items-center px-4">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Image
              src={"/logo.png"}
              alt="Flourish & Flow"
              width={50}
              height={50}
              className="mr-5 dark:invert"
            />
          </Link>
          <MainNav />
          <div className="ml-auto flex space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
