import { ButtonHTMLAttributes } from "react";
import {cva} from "class-variance-authority"
const classes = cva("border h-12 rounded-full px-6 font-medium", {
 variants: {
    variant: {
        primaria: "bg-lime-400 text-neutral-950 border-lime-400",
        secondaria: "border-white text-white bg-transparent"
    },
 },
});
   


export default function Butao(
    props: {
        variant: "primaria" | "secondaria";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const {variant, className, ...otherProps} = props;
    return (
        <button
        className={classes({
            variant,
            className,
        })}
        {...otherProps}
        />
    )
}