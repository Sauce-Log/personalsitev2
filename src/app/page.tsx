import Image from "next/image";
import { navFont, mainFont } from "@/app/layout";

export default function Home() {
  return (
    <div
      className="item-container"
      style={{ fontFamily: mainFont.style.fontFamily }}
    >
      <p style={{ fontWeight: 700, fontSize: "48px" }}>Hello World</p>
    </div>
  );
}
