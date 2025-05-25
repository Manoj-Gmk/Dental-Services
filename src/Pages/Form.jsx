import { useState } from "react";
import axios from "axios";
function Form() {
  const initialstate = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };
  const [values, setValues] = useState(initialstate);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setValues(initialstate);
  };
  return (
    <>
      <form className="Form-container" onSubmit={handleSubmit}>
        <h2 className="form-heading">Send Us a Message</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="fullname"
          value={values.fullname}
          onChange={handleInput}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your mail"
          name="email"
          value={values.email}
          onChange={handleInput}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          placeholder="Enter the subject of you message"
          name="subject"
          value={values.subject}
          onChange={handleInput}
          required
        />
        <label>Message</label>

        <textarea
          rows={6}
          placeholder="Type your message here..."
          name="message"
          value={values.message}
          onChange={handleInput}
        ></textarea>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
