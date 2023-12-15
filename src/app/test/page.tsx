import Image from "next/image";
import { css } from "../../../styled-system/css";

export default function Home() {
  return <main className={mainSecond}></main>;
}

const main = css({ width: "100%", height: "100vh", backgroundColor: "blue" });

const mainSecond = css({
  width: "100%",
  height: "100vh",
  bg: "yellow",
});
