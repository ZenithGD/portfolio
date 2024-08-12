import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditional Tailwind classname merging utility function.
 * This function originally comes from the shadcn/ui library and serves as a
 * simple utility function for merging conditionally-rendered classes and solve
 * potential conflicts in the Tailwind styling.
 * 
 * @example cn("bg-gray text-black", { "text-blue font-bold" : isPrimary })
 * @param inputs The list of classname strings and conditionally rendered classes
 * @returns 
 */
export function cn(...inputs: ClassValue[])
{
    return twMerge(clsx(inputs))
}