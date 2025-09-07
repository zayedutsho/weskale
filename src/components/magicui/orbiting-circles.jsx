import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  duration = 20,
  radius = 160,
  iconSize = 40,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <div className="relative w-[400px] h-[400px]">
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              `absolute top-1/2 left-1/2 w-[var(--icon-size)] h-[var(--icon-size)] transform-gpu -translate-x-1/2 -translate-y-1/2 animate-orbit`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
