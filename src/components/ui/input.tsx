import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "inline-flex h-8 w-full items-center justify-center rounded-none text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ",

        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        underline: "border-b focus-visible:border-b-zinc-800 text-zinc-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
// export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"
    return (
      <Comp
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
