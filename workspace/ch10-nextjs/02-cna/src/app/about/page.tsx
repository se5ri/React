import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About 페이지입니다.", // 검섹엔진 최적화를 위해 사용
};

export default function AboutPage() {
  return <h1>About</h1>;
}
