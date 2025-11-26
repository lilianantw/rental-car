import styles from "./LoadMoreButton.module.css";

type Props = {
  loading: boolean;
  onClick: () => void;
};

export default function LoadMoreButton({ loading, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : "Load more"}
    </button>
  );
}
