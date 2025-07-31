import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserSignUp = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "http://localhost:5002/register",
          values
        );
        console.log("Registration successful:", response.data);
        resetForm();
      } catch (err) {
        console.error("Registration error:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleUpdate = async () => {
    console.log(formik.values);
    try {
      const response = await axios.patch(
        "http://localhost:5002/update",
        formik.values
      );
      console.log("Update successful:", response.data);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="firstname"
            placeholder="Firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            type="text"
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div>{formik.errors.firstname}</div>
          ) : null}

          <input
            name="lastname"
            placeholder="Lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            type="text"
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div>{formik.errors.lastname}</div>
          ) : null}

          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="text"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <input
            name="address"
            placeholder="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            type="text"
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          Register
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          disabled={formik.isSubmitting}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserSignUp;
