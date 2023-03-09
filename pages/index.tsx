import Head from "next/head";
import styles from "../styles/Home.module.css";
import { userStorageAdapter } from "src/services/storageAdapter";
import Layout from "@/reusable/layout";

export default function Home() {
  const storage = userStorageAdapter();
  const userName = storage.user.userName;

  return (
    <div className={styles.container}>
      <Head>
        <title>IceBlogs v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          Welcome aboard <b>{userName}</b>
        </div>
      </Layout>
    </div>
  );
}
