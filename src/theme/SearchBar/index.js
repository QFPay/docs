import React from "react";
import SearchBar from "@theme-original/SearchBar";
import styles from "./styles.module.css";

export default function SearchBarWrapper(props) {
  return (
    <div className={styles.container}>
      <SearchBar {...props} />

      <button
        id="kapa-search-trigger"
        type="button"
        className={styles.askAiBtn}
        aria-label="Ask AI"
      >
        ✨ Ask AI
      </button>
    </div>
  );
}