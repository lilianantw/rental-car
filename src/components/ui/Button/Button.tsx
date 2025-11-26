import clsx from "clsx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";
type Size = "large" | "medium" | "small";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className,
  onClick,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[variant],
        styles[variant + size[0].toUpperCase() + size.slice(1)],
        className
      )}
    >
      {children}
    </button>
  );
}
