import CategoryList from "@/Components/CategoryList/CategoryList";
import Featured from "@/Components/Featured/Featured";
import CardList from "@/Components/CardList/CardList";
import Menu from "@/Components/Menu/Menu";
import styles from "./homepage.module.css";
import Link from "next/link";
export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
