import React from "react";
import SearchBar from "@theme-original/SearchBar"; // keeps the local search plugin behaviour
import styles from "./styles.module.css";

export default function SearchBarWrapper(props) {
  return (
    <div className={styles.wrap}>
      <SearchBar {...props} />
      <button
  id="kapa-search-trigger"
  type="button"
  className={styles.kapaBtn}
  aria-label="Ask AI"
  title="Ask AI"
>
  ✨ <span className={styles.label}>Ask&nbsp;AI</span>
</button>
    </div>
  );
}