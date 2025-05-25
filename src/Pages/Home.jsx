import FAQ from "../Components/FAQ";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="hero">
        <img className="banner" src="banner.jpg" />
        <div>
          <marquee>
            Brighten Your Smile with Expert Care, Providing gentle and trusted
            dental services for all ages.
          </marquee>
        </div>

        <div>
          <h1 className="heading">Welcome to HappySmileClinic Dental Clinic</h1>

          <p className="para">
            At <strong>HappySmileClinic Dental Clinic</strong>, we believe that
            a healthy smile is the foundation of overall well-being. Located in
            the heart of the city, our clinic offers a warm, welcoming
            environment where your comfort is our top priority.
          </p>
          <p className="para">
            With a team of experienced dentists and advanced dental technology,
            we are committed to providing top-quality care tailored to each
            patient’s needs.
          </p>
          <p className="para">
            Whether it's a routine check-up or a complete smile makeover, we are
            here to make your dental journey smooth and stress-free.
          </p>
          <p className="para">
            <a className="button"> Book your appointment today</a> and take the
            first step toward a healthier, brighter smile!
          </p>
        </div>

        <div>
          <h1 className="heading"> Our Dental Services</h1>
          <p className="para">
            At <strong>HappySmileClinic Dental Clinic</strong>, we offer a wide
            range of dental services designed to meet the needs of every
            patient. Our goal is to provide quality care in a comfortable
            environment using the latest techniques and technology. Here's a
            quick look at what we offer:
          </p>
        </div>

        <div className="animation">
          <h2 className="heading"> General Dentistry</h2>
          <div className="Service-container">
            <img className="image-container" src="General Dentistry.jpg" />
            <div>
              <p className="para">
                We provide routine dental check-ups, cleanings, and cavity
                fillings to maintain overall oral health.
              </p>
              <p className="para">
                Our preventive care helps detect problems early and avoid major
                treatments.
              </p>
              <p className="para">
                Ideal for all age groups, ensuring long-term dental wellness.
              </p>
            </div>
          </div>
        </div>
        <div className="animation">
          <h2 className="heading"> Cosmetic Dentistry</h2>
          <div className="Reverse-container">
            <img
              className="flip-image-container"
              src="Cosmetic Dentistry.jpeg"
            />
            <div>
              <p className="para">
                Enhance your smile with treatments like teeth whitening,
                veneers, and tooth-colored fillings.
              </p>
              <p className="para">
                We focus on aesthetics to improve the shape, color, and
                alignment of your teeth.{" "}
              </p>
              <p className="para">
                Rediscover your confidence with a radiant, natural-looking
                smile.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="animation">
          <h2 className="heading"> Orthodontics (Braces & Aligners)</h2>
          <div className="Service-container">
            <img className="image-container" src="Orthodontics.jpe" />
            <div>
              <p className="para">
                We offer braces and clear aligners to correct crooked teeth and
                bite issues.{" "}
              </p>
              <p className="para">
                Our treatments are tailored for kids, teens, and adults seeking
                a straighter smile.{" "}
              </p>
              <p className="para">
                Enjoy improved appearance, chewing, and long-term dental health.
              </p>
            </div>
          </div>
        </div>
        <div className="animation">
          <h2 className="heading"> Root Canal Treatment</h2>
          <div className="Reverse-container">
            <img className="flip-image-container" src="Root Canal.png" />
            <div>
              <p className="para">
                We save infected or damaged teeth with painless root canal
                procedures.
              </p>
              <p className="para">
                Advanced rotary tools ensure precision, comfort, and faster
                recovery.
              </p>
              <p className="para">
                Preserve your natural tooth and avoid the need for extraction.
              </p>
            </div>
          </div>
        </div>
        <div className="animation">
          <h2 className="heading"> Pediatric Dentistry</h2>
          <div className="Service-container">
            <img className="image-container" src="Pediatric Dentistry.jpg" />
            <div>
              <p className="para">
                We provide gentle, friendly dental care for children of all
                ages.
              </p>
              <p className="para">
                Our goal is to make dental visits fun and stress-free while
                building healthy habits early.
              </p>
              <p className="para">
                Services include cleanings, fluoride treatments, and cavity
                prevention.
              </p>
            </div>
          </div>
        </div>
        <div className="animation">
          <h2 className="heading">Tooth Extraction & Wisdom Tooth Removal</h2>
          <div className="Reverse-container">
            <img className="flip-image-container" src="Tooth Extraction.jpg" />
            <div>
              <p className="para">
                We perform safe and painless tooth extractions, including
                impacted wisdom teeth.
              </p>
              <p className="para">
                Our procedures are done under local anesthesia to ensure maximum
                comfort.
              </p>
              <p className="para">
                Post-extraction care is provided for quick and smooth recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="Appointment">
          <h2 className="heading">Your Healthier Smile Starts Here</h2>
          <p className="para">
            Click below to book your appointment with our expert dentists.
          </p>
          <a href="#contact" className="button" id="btn">
            Book your Appointment Now. . .
          </a>
        </div>
        <FAQ />
      </div>
    </>
  );
}

export default Home;
