import * as React from "react";
import {
  Dialog as DialogPrimitive,
  DialogTrigger as PrimitiveTrigger,
  DialogContent as PrimitiveContent,
  DialogPortal as PrimitivePortal,
  DialogOverlay as PrimitiveOverlay,
  DialogTitle as PrimitiveTitle,
  DialogDescription as PrimitiveDescription,
} from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils"; // adjust if your utility is elsewhere

const Dialog = DialogPrimitive.Root;

const DialogTrigger = PrimitiveTrigger;

const DialogPortal = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitivePortal> & {
  className?: string;
}) => (
  <PrimitivePortal className={cn(className)} {...props} />
);
DialogPortal.displayName = "DialogPortal";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof PrimitiveOverlay>,
  React.ComponentPropsWithoutRef<typeof PrimitiveOverlay>
>(({ className, ...props }, ref) => (
  <PrimitiveOverlay
    ref={ref}
    className={cn("fixed inset-0 bg-black/50 z-50", className)}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, ...props }, ref) => (
  <PrimitivePortal>
    <DialogOverlay />
    <PrimitiveContent
      ref={ref}
      className={cn(
        "fixed z-50 grid w-full max-w-lg gap-4 border bg-white p-6 shadow-lg rounded-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...props}
    />
  </PrimitivePortal>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof PrimitiveTitle>,
  React.ComponentPropsWithoutRef<typeof PrimitiveTitle>
>(({ className, ...props }, ref) => (
  <PrimitiveTitle
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof PrimitiveDescription>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDescription>
>(({ className, ...props }, ref) => (
  <PrimitiveDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
