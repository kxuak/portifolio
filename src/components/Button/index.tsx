import "./button.scss"
import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
    variant: string;
    size: "md"|"bg",
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
    variant = 'priamry',
    size = 'md',
     children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames(
        'botao',
        variant,
        size,
    )

  return (
    <button
        className={classes}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button