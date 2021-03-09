import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    bussiness_name: "",
    email: "",
    phone: "",
    bot_test: "",
  });
  const formatPhoneNum = (num) => {
    if (num.length < data.phone.length) {
      return num.length === 1 ? "" : num;
    } else if (num.length === 1) {
      num = "(" + num;
    } else if (num.length === 4) {
      num += ")";
    } else if (num.length === 8) {
      num += "-";
    }
    return num;
  };
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
      bussiness_name: "",
      email: "",
      phone: "",
      bot_test: "",
    });
  };
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const onSubmit = async (evt, data) => {
    evt.preventDefault();
    try {
      if (data.bot_test === "") throw "Invalid form submission";
      if (!isValidEmail(data.email)) throw "Valid email address required";
      let res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      res = await res.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      resetForm();
    }
  };
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
          <label className="mb-0.5">Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Scott West"
          />
          <label className="mb-0.5">Business</label>
          <input
            type="text"
            className="form-input"
            name="bussiness_name"
            value={data.bussiness_name}
            onChange={handleChange}
            placeholder="Awesome Business LLC"
          />
          <label className="mb-0.5 hidden">Bot Test</label>
          <input
            type="text"
            className="form-input hidden"
            name="bot_test"
            value={data.bot_test}
            onChange={handleChange}
          />
          <label className="mb-0.5">Email</label>
          <input
            className="form-input"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <label className="mb-0.5">Phone</label>
          <input
            className="form-input"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="555-555-5555"
          />
          <button
            type="submit"
            className="rounded py-1 bg-blue-900 text-yellow font-bold w-1/2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
