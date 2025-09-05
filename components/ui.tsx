import { ReactNode } from "react";
import { cn } from "../lib/utils";

export function Section({ id, className, children }:{id?:string, className?:string, children:ReactNode}) {
  return <section id={id} className={cn("container-max py-12 sm:py-16", className)}>{children}</section>;
}

export function Button({ variant='primary', className, children }:{variant?:'primary'|'secondary'|'ghost', className?:string, children:ReactNode}) {
  const styles = {
    primary: "bg-secondary text-white hover:opacity-90",
    secondary: "bg-primary text-white hover:opacity-90",
    ghost: "border border-primary text-primary hover:bg-primary/5"
  }[variant];
  return <button className={cn("rounded-full px-5 py-2.5 text-sm font-semibold transition", styles, className)}>{children}</button>;
}
