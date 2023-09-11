import classnames from "classnames"
import { twMerge } from "tailwind-merge"

export const classNames = (...args: Parameters<typeof classnames>) => twMerge(classnames(args))
