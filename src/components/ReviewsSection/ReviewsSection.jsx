import { useSelector } from "react-redux";
import styles from "./ReviewsSection.module.css";
import { selectReview } from "../../redux/reviews/selector";

const ReviewsSection = () => {
  const reviews = useSelector(selectReview);

  return (
    <section>
      <div className="container">
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review._id}>
              <h4>{review.name}</h4>
              <p>{review.testimonial}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReviewsSection;
