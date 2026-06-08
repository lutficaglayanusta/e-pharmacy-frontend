import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
          <div className="container">
              <div className={styles.layout}>
                  <h1>Your medication delivered</h1>
                    <p>Say goodbye to all your healthcare worries with us</p>
              </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
