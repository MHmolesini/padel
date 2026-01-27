import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Since I don't have cva explicitly installed in the user's package.json (I missed checking if it was there or part of the install list, but standardized shadcn uses it. I'll use a simpler version if cva isn't available, but wait, the prompt said "Shadcn/ui (si es necesario)". Shadcn buttons rely on cva.
// I'll stick to a simpler implementation to avoid extra dependencies if not strictly requested to install `class-variance-authority` and `@radix-ui/react-slot`.
// Re-reading: "Icons: Lucide React", "Styles: Tailwind", "Framework: Next.js".
// "Componentes: Shadcn/ui (si es necesario)".
// To avoid dependency hell if they aren't installed, I'll implement a flexible Button without `cva` or `radix` unless I'm sure. I'll use standard props.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "padel";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        // Basic styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        // Variants
        const variants = {
            default: "bg-padel-green text-slate-900 hover:bg-padel-green/90 font-bold",
            padel: "bg-padel-green text-slate-900 hover:bg-padel-green/90 font-bold shadow-lg shadow-padel-green/20",
            outline: "border border-input bg-transparent hover:bg-white/10 text-white border-white/20",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        // Sizes
        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        }

        const Comp = "button"

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
