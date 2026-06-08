// OrderForm.jsx
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { selectCarts } from "../../redux/cart/selector";
import styles from "./OrderForm.module.css";
import { checkoutCart } from "../../redux/cart/operation";

const OrderSchema = Yup.object().shape({
  name: Yup.string().min(2, "En az 2 karakter").required("Ad zorunludur"),
  email: Yup.string().email("Geçerli bir email girin").required("Email zorunludur"),
  phone: Yup.string().required("Telefon zorunludur"),
  address: Yup.string().min(10, "En az 10 karakter").required("Adres zorunludur"),
  paymentMethod: Yup.string().required("Ödeme yöntemi seçiniz"),
});

const OrderForm = () => {
  const carts = useSelector(selectCarts);

  const dispatch = useDispatch()

  // Total hesapla: quantity * price toplamı
  const calculateTotal = () => {
    return carts.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price);
    }, 0).toFixed(2);
  };

  const initialValues = useMemo(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.quantity * parseFloat(item.price);
    }, 0).toFixed(2);

    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "cash",
      totalPrice: total,
    };
  }, [carts]);

  const handleSubmit = (values) => {
    dispatch(checkoutCart(values))
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={OrderSchema}
      >
        {({ values }) => (
          <Form className={styles.form}>

            {/* Shipping Info */}
            <div className={styles.section}>
              <h2 className={styles.title}>Enter shipping info</h2>
              <p className={styles.subtitle}>
                Enter your delivery address where you get the product. You can also
                send any other location where you send the products.
              </p>

              <div className={styles.grid}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Name</label>
                  <Field name="name" placeholder="Enter text" className={styles.input} />
                  <ErrorMessage name="name" component="span" className={styles.error} />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Email</label>
                  <Field name="email" type="email" placeholder="Enter text" className={styles.input} />
                  <ErrorMessage name="email" component="span" className={styles.error} />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Phone</label>
                  <Field name="phone" placeholder="Enter text" className={styles.input} />
                  <ErrorMessage name="phone" component="span" className={styles.error} />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Address</label>
                  <Field name="address" placeholder="Enter text" className={styles.input} />
                  <ErrorMessage name="address" component="span" className={styles.error} />
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            {/* Payment Method */}
            <div className={styles.section}>
              <h2 className={styles.title}>Payment method</h2>
              <p className={styles.subtitle}>
                You can pay us in a multiple way in our payment gateway system.
              </p>

              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <Field type="radio" name="paymentMethod" value="cash" className={styles.radioInput} />
                  <span className={`${styles.customRadio} ${values.paymentMethod === "cash" ? styles.checked : ""}`} />
                  Cash On Delivery
                </label>

                <label className={styles.radioLabel}>
                  <Field type="radio" name="paymentMethod" value="bank" className={styles.radioInput} />
                  <span className={`${styles.customRadio} ${values.paymentMethod === "bank" ? styles.checked : ""}`} />
                  Bank
                </label>
              </div>
              <ErrorMessage name="paymentMethod" component="span" className={styles.error} />
            </div>

            <hr className={styles.divider} />

            {/* Order Details */}
            <div className={styles.section}>
              <h2 className={styles.title}>Order details</h2>
              <p className={styles.subtitle}>
                Shipping and additionnal costs are calculated based on values you have entered.
              </p>

              <div className={styles.totalBox}>
                <span className={styles.totalLabel}>Total:</span>
                <span className={styles.totalAmount}>৳ {calculateTotal()}</span>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Place order
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;