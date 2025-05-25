import "./FAQ.css";
function FAQ() {
  return (
    <>
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="container">
        <div className="FAQ-container">
          <h3 className="questions">1. What are your clinic hours?</h3>
          <p className="para">
            <strong>Answer-</strong> We are open Monday to Saturday from 9 AM to
            6 PM.
          </p>
        </div>
        <div className="FAQ-container">
          <h3 className="questions">2. How do I book an appointment?</h3>
          <p className="para">
            <strong>Answer-</strong> You can call us directly or use our
            website's contact form to schedule.
          </p>
        </div>

        <div className="FAQ-container">
          <h3 className="questions">
            3. How often should I visit the dentist?
          </h3>
          <p className="para">
            {" "}
            <strong>Answer-</strong>It is recommended to visit the dentist every
            six months for a routine check-up and cleaning.
          </p>
        </div>
        <div className="FAQ-container">
          <h3 className="questions">
            4. Can I visit the dentist during pregnancy?
          </h3>
          <p className="para">
            <strong>Answer-</strong>Yes, dental check-ups are safe and
            recommended during pregnancy, especially in the second trimester.
          </p>
        </div>

        <div className="FAQ-container">
          <h3 className="questions">5. Do you accept dental insurance?</h3>
          <p className="para">
            <strong>Answer-</strong> Yes, we accept most major dental insurance
            plans. Please contact us to confirm your coverage.
          </p>
        </div>
        <div className="FAQ-container">
          <h3 className="questions">6. What services do you offer?</h3>
          <p className="para">
            <strong>Answer-</strong> We offer a full range of services including
            cleanings, fillings, root canals, crowns, teeth whitening, braces,
            and more.
          </p>
        </div>
      </div>
    </>
  );
}

export default FAQ;
