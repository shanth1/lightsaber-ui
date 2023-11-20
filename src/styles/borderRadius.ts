type TBorderRadius = "none" | "sm" | "md" | "lg" | "full";

export const getCustomClassName = (
    borderRadius?: TBorderRadius,
    className?: string
): string => {
    let customClassName: string = "";

    switch (borderRadius) {
        case "none":
            customClassName = "border-radius-none";
            break;
        case "sm":
            customClassName = "border-radius-sm";
            break;
        case "md":
            customClassName = "border-radius-md";
            break;
        case "lg":
            customClassName = "border-radius-lg";
            break;
        case "full":
            customClassName = "border-radius-full";
            break;
        default:
            break;
    }

    customClassName += " " + className;

    return customClassName;
};
