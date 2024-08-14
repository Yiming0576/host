interface MagicButtonProps {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  otherClasses?: string;
  handleClick?: () => void;
}

interface TextSectionProps {
  title: string;
  description: string;
}

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}
interface FloatingNavProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
}

interface BentoGridProps {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}

export type Variant = "solid" | "striped";
export type Color = "blue" | "red" | "green" | "amber" | "teal" | "indigo" | "purple" | "pink";
export type Size = "sm" | "md" | "lg";
export type Value = number;
export type Label = string | React.ReactNode;
export type BarProps = React.ComponentProps<"div">;

interface ProgressColorBarProps{
    variant?: Variant;
    color?: Color;
    size?: Size;
    value?: Value;
    label?: Label;
    barProps?: BarProps;
    className?: string;
}

export type { MagicButtonProps, TextSectionProps, TextGenerateEffectProps, FloatingNavProps, BentoGridItemProps, BentoGridProps, ProgressColorBarProps };
