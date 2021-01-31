import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/ivica-ivan%C4%8Di%C4%87-9b8987187/")
        }
      >
        LinkedIn
      </div>
    </div>
  );
};
