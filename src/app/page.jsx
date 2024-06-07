
import CategoryList from "@/Components/CategoryList/CategoryList";
import Featured from "@/Components/Featured/Featured";
import CardList from "@/Components/CardList/CardList";
import Menu from "@/Components/Menu/Menu";
import styles from "./homepage.module.css";
import Link from "next/link";
export default function Home() {
  return (
  <div className={styles.container}>
  <Featured />
  <CategoryList />
  <div className={styles.container}>
  <CardList />
  <Menu />
  </div>

  
  </div>
  );
}
