import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/Components/Pagination/Pagination";
import Card from "../Card/Card";

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page,cat);

  const post_per_page = 3;

  const hasPrev = post_per_page * (page - 1) > 0;
  const hasNext = post_per_page * (page - 1) + post_per_page < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};
export default CardList;
