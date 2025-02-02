import { currency } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convert = (
  type: "primary" | "secondary",
  amount: number,
  { primary, secondary }: { primary: currency; secondary: currency },
) => {
  if (!["primary", "secondary"].includes(type)) {
    throw TypeError(`Invalid type ${type}`);
  }

  if (typeof amount !== "string") {
    throw TypeError(`amount is not a string.`);
  }

  if (primary.currency.trim() !== "USD") {
    throw TypeError(`primary curreny is not USD.`);
  }

  let usd = 1;
  let input = parseFloat(amount);

  if (type === "primary") {
    usd = input / parseFloat(primary.mid_zwl);
    if (secondary.currency.trim() === "USD") {
      return usd.toFixed(2);
    }
    return (parseFloat(secondary.mid_rate) * usd).toFixed(2);
  }

  usd = input / parseFloat(secondary.mid_rate);
  return (usd * parseFloat(primary.mid_zwl)).toFixed(2);
};
