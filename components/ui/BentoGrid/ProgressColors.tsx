import { Progress } from "@material-tailwind/react";
 
// Progress.tsx
import React from "react";
import { ProgressColorBarProps } from "@/components/types/types";

const ProgressColorBar: React.FC<ProgressColorBarProps> = ({
    variant = "gradient",
    color = "blue",
    size = "md",
    value = 0,
    label,
    barProps,
    className,
    ...props
}) => {
    return (
            <Progress
            value={50}
            color="lime"
            size="md"
            label="Python"
            variant="gradient" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
    );
};

export default ProgressColorBar;
