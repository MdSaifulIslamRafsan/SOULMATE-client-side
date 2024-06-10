import Lottie from "lottie-react";
import about from "../assets/About.json";

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-[1440px]  lg:w-10/12 w-11/12 my-10">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Welcome to SOULMATE!
          </p>
          <p className="mt-5">
            At SOULMATE, we believe that finding the perfect life partner is one
            of the most significant journeys in life. Our mission is to make
            this journey as seamless, joyful, and successful as possible for
            everyone. We have crafted a platform that combines the best of
            technology and human intuition to help you find a partner who truly
            complements you.
          </p>
        </div>
        <div className="flex">
                <div className="">
                  <h4 className="text-lg font-medium leadi ">Our Story</h4>
                  <p className="mt-2 ">
                    Founded in 2022, SOULMATE was born out of the need for a
                    more personalized, secure, and efficient way to find life
                    partners online. Our founders, Liam White, realized the
                    traditional matchmaking methods were outdated and needed a
                    modern touch. With a passion for connecting hearts and a
                    deep understanding of cultural nuances, they created this
                    platform to bridge the gap between technology and human
                    connections.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <h4 className="text-lg font-medium leadi ">Our Vision</h4>
                  <p className="mt-2 ">
                    We envision a world where everyone can find a compatible
                    partner with ease and confidence. By leveraging advanced
                    technologies and fostering a community of genuine
                    individuals, we aim to create a trustworthy and
                    user-friendly environment for matrimonial searches.
                  </p>
                </div>
              </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">Our Values</h4>
                  <ul className="mt-2 list-disc">
                    <li>
                      Integrity: We maintain the highest standards of integrity
                      in all our actions and services.
                    </li>
                    <li>
                      Security: Your safety and privacy are our top priorities.
                      We use cutting-edge security measures to protect your
                      personal information.
                    </li>
                    <li>
                      {" "}
                      Inclusivity: We welcome individuals from all walks of life
                      and believe in the power of diversity. Innovation: We
                      continuously improve our platform with the latest
                      technologies to enhance your experience.
                    </li>
                    <li>
                      Support: Our dedicated support team is always here to help
                      you at every step of your journey.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">What We Offer</h4>
                  <ul className="mt-2 list-disc">
                    <li>
                      Verified Profiles: Each profile undergoes a thorough
                      verification process to ensure authenticity and
                      reliability.
                    </li>
                    <li>
                      Advanced Search Filters: Find potential matches based on
                      your preferences, such as age, occupation, location, and
                      more.
                    </li>
                    <li>
                      {" "}
                      Success Stories: Read inspiring stories of couples who
                      found their perfect match through our platform.
                    </li>
                    <li>
                      Premium Memberships: Enjoy exclusive features and higher
                      visibility with our premium membership plans.
                    </li>
                    <li>
                      Responsive Design: Access our platform seamlessly from any
                      device, be it mobile, tablet, or desktop.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
            
              <div className="ml-4">
                <h4 className="text-lg font-medium leadi ">Join Us</h4>
                <p className="mt-2 ">
                  Join the thousands of happy couples who have found their life
                  partners on SOULMATE. Whether {`you're`}
                  looking for a soulmate, a friend, or a companion, our platform
                  is here to help you every step of the way. Thank you for
                  choosing SOULMATE. We look forward to
                  being a part of your journey towards finding true love and
                  happiness. For any inquiries or support, please feel free to
                  contact us at soulmate01@gmail.com. Warm regards,
                  The SOULMATE Team.
                </p>
              </div>
            </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
          <Lottie animationData={about} loop={true} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
