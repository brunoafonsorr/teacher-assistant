import { Poppins, Archivo, Margarine } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});
