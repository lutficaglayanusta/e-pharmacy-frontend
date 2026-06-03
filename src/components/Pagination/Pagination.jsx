import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}) => {
  const getPaginationPages = () => {
    const pages = [];
    const siblingCount = 1; // Sayı yanında kaç sayfa gösterilecek
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // İlk sayfalar
    if (leftSiblingIndex > 1) {
      pages.push(1);
      if (leftSiblingIndex > 2) {
        pages.push("...");
      }
    }

    // Mevcut ve civar sayfalar
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    // Son sayfalar
    if (rightSiblingIndex < totalPages) {
      if (rightSiblingIndex < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPaginationPages();

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
      >
        ‹ Önceki
      </button>

      <div className={styles.paginationPages}>
        {pages.map((page, idx) => (
          <button
            key={idx}
            className={`${styles.pageBtn} ${
              page === currentPage ? styles.active : ""
            } ${page === "..." ? styles.dots : ""}`}
            onClick={() => {
              if (page !== "...") {
                onPageChange(page);
              }
            }}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.paginationBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
      >
        Sonraki ›
      </button>
    </div>
  );
};

export default Pagination;
