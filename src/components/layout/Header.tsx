"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/[0.88] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-16">
        <Logo size={22} />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[15px] font-semibold transition-colors hover:text-coral-text",
                  active ? "text-coral-text" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>

          {/* Mobile menu */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-surface focus-visible:outline-2 lg:hidden"
              >
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm" />
              <Dialog.Content
                className="on-ink fixed inset-0 z-[70] flex flex-col bg-ink text-paper"
                aria-label="Site menu"
              >
                <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
                  <Logo size={22} variant="light" />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="inline-flex size-11 items-center justify-center rounded-full text-paper hover:bg-ink-surface focus-visible:outline-2"
                    >
                      <X aria-hidden="true" className="size-6" />
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                <nav
                  aria-label="Mobile"
                  className="flex flex-1 flex-col gap-2 px-5 pt-6 sm:px-8"
                >
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="font-heading text-3xl font-extrabold tracking-tight text-paper transition-colors hover:text-coral"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/volunteer"
                    onClick={closeMenu}
                    className="font-heading text-3xl font-extrabold tracking-tight text-paper transition-colors hover:text-coral"
                  >
                    Volunteer
                  </Link>
                </nav>
                <div className="px-5 pb-10 sm:px-8">
                  <Button asChild variant="primary-dark" size="lg" className="w-full">
                    <Link href="/donate" onClick={closeMenu}>
                      Donate
                    </Link>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
