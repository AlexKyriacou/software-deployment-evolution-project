"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col space-y-3">
          <MobileLink
            key={"/"}
            href={"/"}
            onOpenChange={setOpen}
            className="py-2"
          >
            <Image
              src={"/logo.png"}
              alt="Flourish & Flow"
              width={50}
              height={50}
              className="mr-5 dark:invert"
            />
          </MobileLink>
          <MobileLink
            key={"/about-us"}
            href={"/about-us"}
            onOpenChange={setOpen}
          >
            About Us
          </MobileLink>
          <MobileLink
            key={"/services"}
            href={"/services"}
            onOpenChange={setOpen}
          >
            Services
          </MobileLink>
          <MobileLink key={"/faqs"} href={"/faqs"} onOpenChange={setOpen}>
            FAQs
          </MobileLink>
          <MobileLink key={"/media"} href={"/media"} onOpenChange={setOpen}>
            Media
          </MobileLink>
          <MobileLink
            key={"/contact-us"}
            href={"/contact-us"}
            onOpenChange={setOpen}
          >
            Contact Us
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
