import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t py-5">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <Link href="/public">
          <Image
            src={"/logo.png"}
            alt="Flourish & Flow"
            width={50}
            height={50}
            className="mb-3 dark:invert"
          />
        </Link>
        <p className="mb-3 text-center text-sm text-muted-foreground sm:text-left">
          &copy; {new Date().getFullYear()} Flourish & Flow. All rights
          reserved.
        </p>
        <nav className="flex space-x-4 sm:mt-0">
          <Link
            href="/legal"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
