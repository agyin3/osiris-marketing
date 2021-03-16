import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import formatPhoneNum from "../utilites/formatPhoneNumber";
import validate from "../utilites/validate";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    business_name: "",
    email: "",
    phone: "",
    bot_test: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "phone" && value.length === 14) {
      setData({ ...data });
    } else {
      setData({
        ...data,
        [name]: name === "phone" ? formatPhoneNum(value.trim()) : value.trim(),
      });
    }
  };
  const resetForm = () => {
    setData({
      name: "",
      business_name: "",
      email: "",
      phone: "",
      bot_test: "",
    });
  };
  const postFormData = async (data) => {
    try {
      if (!data.bot_test === "") throw "Invalid form submission";
      let res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      res = await res.json();
    } catch (e) {
      console.log(e);
    } finally {
      resetForm();
      setIsSubmitting(false);
    }
  };
  const onSubmit = async (evt, data) => {
    evt.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(data));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      postFormData(data);
    } else {
      setIsSubmitting(false);
    }
  }, [errors]);
  return (
    <div className="bg-white text-black md:w-4/5 justify-self-end p-5 md:p-8 rounded-lg">
      <p className="section-title mb-3">Let's Chat Now</p>
      <p className="text-lg lg:text-xl mb-3">
        Enter your info for a callback so we can discuss the best solution for
        your business.
      </p>
      <div>
        <form
          onSubmit={() => onSubmit(event, data)}
          className="flex flex-col font-bold"
        >
          <label className="form-label">
            Name &#x2a;
            <input
              type="text"
              className={`form-input ${errors.name ? "form-error" : ""}`}
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Scott West"
            />
            {errors.name && <p className="form-error-text">{errors.name}</p>}
          </label>
          <label className="form-label">
            Business &#x2a;
            <input
              type="text"
              className={`form-input ${
                errors.business_name ? "form-error" : ""
              }`}
              name="business_name"
              value={data.business_name}
              onChange={handleChange}
              placeholder="Awesome Business LLC"
            />
            {errors.business_name && (
              <p className="form-error-text">{errors.business_name}</p>
            )}
          </label>
          <label className="mb-0.5 hidden">Bot Test</label>
          <input
            type="text"
            className="form-input hidden"
            name="bot_test"
            value={data.bot_test}
            onChange={handleChange}
          />
          <label className="form-label">
            Email &#x2a;
            <input
              className={`form-input ${errors.email ? "form-error" : ""}`}
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <p className="form-error-text">{errors.email}</p>}
          </label>
          <label className="form-label">
            Phone
            <input
              className={`form-input ${errors.phone ? "form-error" : ""}`}
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="555-555-5555"
            />
            {errors.phone && <p className="form-error-text">{errors.phone}</p>}
          </label>
          <button
            type="submit"
            className="rounded py-1 bg-blue-900 text-yellow font-bold md:w-1/2 mt-3"
          >
            {isSubmitting ? (
              <FontAwesomeIcon
                icon={["fas", "spinner"]}
                height="1.5rem"
                width="1.5rem"
                className="text-cream mx-auto py-1 spinner"
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
