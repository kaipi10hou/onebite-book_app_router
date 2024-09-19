"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  console.log("홈컴포넌트 실행");
  useEffect(() => {});
  return <div className={styles.page}>인덱스페이지</div>;
}
