import "./Contact.css";
import Form from "./Form";
function Contact() {
  return (
    <>
      <h1 className="heading">Contact Us</h1>
      <p className="para">
        If you have any questions or want to book an appointment, feel free to
        reach out using the form below.
      </p>
      <Form />
      <div className="clinic-contact-info" style={{ marginTop: "10px" }}>
        <h1 className="heading">Contact Details</h1>

        <p className="para">
          <strong>Phone:</strong> +91 98XXX XXXXX
        </p>
        <p className="para">
          <strong>Email:</strong> happysmilecare@example.com
        </p>
        <p className="para">
          <strong>Address:</strong> 123 Smile Street, Hyderabad, Telangana,
          India
        </p>
      </div>
      <h1 className="heading">Find Us</h1>
      <div className="map-container" style={{ padding: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.451414829926!2d78.47466027485097!3d17.43426330118274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9775b8fc1e25%3A0x79d5dd6f4a0309e2!2sCharminar!5e0!3m2!1sen!2sin!4v1716483281184!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
