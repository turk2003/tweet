import "@/styles/globals.css";
import Navbar from "@/component/nvabar";
import { Itim } from "next/font/google";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={"h-full " + itim.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
