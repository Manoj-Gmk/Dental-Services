import "./Services.css";
function Services() {
  return (
    <>
      <h1 className="heading">Our Dental Services</h1>

      <p className="para">
        At <strong>SmileHaven Dental Clinic</strong>, we offer a full range of
        services tailored to every age and need. Whether you're looking for
        preventive care or advanced treatments, our team is here to help you
        smile with confidence.
      </p>
      <div className="services-info">
        <div className="service-block animation">
          <p>
            <strong id="head"> General-Dentistry</strong>
          </p>

          <div className="card">
            <img src="./services1.jpg" alt="Service Image" />
            <h4>Description:</h4>
            We offer routine check-ups, dental cleanings, cavity fillings, and
            preventive treatments. Early detection and care ensure a healthy
            smile for life.
          </div>
        </div>

        <div className="service-block animation">
          <p>
            <strong id="head"> Cosmetic-Dentistry</strong>
          </p>
          <div className="card">
            <img src="./services2.jpg" height={225} alt="Service Image" />
            <h4>Description:</h4>
            Transform your smile with teeth whitening, veneers, tooth-colored
            fillings, and cosmetic reshaping. Let your smile reflect your
            confidence.
          </div>
        </div>

        <div className="service-block animation">
          <p>
            <strong id="head"> Pediatric-Dentistry</strong>
          </p>
          <div className="card">
            <img src="./services3.jpg" alt="Service Image" />
            <h4>Description:</h4>
            Specialized care for children in a friendly, stress-free
            environment. We focus on building trust while teaching good oral
            habits early.
          </div>
        </div>

        <div className="service-block animation">
          <p>
            <strong id="head">Root Canal Treatment</strong>
          </p>
          <div className="card">
            <img src="./services4.jpg" alt="Service Image" />
            <h4>Description:</h4>
            We save damaged or infected teeth with pain-free root canal
            procedures using advanced rotary systems for precision and comfort.
          </div>
        </div>

        <div className="service-block animation">
          <p>
            <strong id="head"> Orthodontics</strong>
          </p>
          <div className="card">
            <img src="./services5.png" height={225} alt="Service Image" />
            <h4>Description:</h4>
            Get straight, aligned teeth with modern braces or invisible aligners
            like clear trays. Suitable for teens and adults alike.
          </div>
        </div>

        <div className="service-block animation">
          <p>
            <strong id="head">Tooth-Extraction</strong>
          </p>
          <div className="card">
            <img src="./services6.jpg" alt="Service Image" />
            <h4>Description:</h4>
            We perform simple and surgical tooth removals, including impacted
            wisdom teeth, under local anesthesia for safe recovery.
          </div>
        </div>
        <div className="service-block animation">
          <p>
            <strong id="head"> Dental Implants</strong>{" "}
          </p>
          <div className="card">
            <img src="./services7.jpg" height={225} alt="Service Image" />
            <h4>Description:</h4>
            Permanent replacement for missing teeth using titanium posts that
            integrate with the jawbone. Dental implants look and function like
            natural teeth.
          </div>
        </div>
        <div className="service-block animation">
          <p>
            <strong id="head">Gum Treatment</strong>
          </p>
          <div className="card">
            <img src="./services8.jpg" alt="Service Image" />
            <h4>Description:</h4>
            Treatment for gum diseases like gingivitis and periodontitis. We
            focus on preserving gum health and preventing tooth loss through
            deep cleaning and laser-assisted care.
          </div>
        </div>
        <div className="service-block animation">
          <p>
            <strong id="head"> Smile Make over</strong>
          </p>
          <div className="card">
            <img src="./services9.jpg" alt="Service Image" />
            <h4>Description:</h4>
            Customized smile transformation using a combination of cosmetic and
            restorative procedures like veneers, crowns, bridges, and whitening.
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
