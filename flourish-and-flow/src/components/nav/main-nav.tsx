"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faqs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/media" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Media
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
