import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <div className="flex-center">
            <img
              src="/images/nakpro-logo.png"
              alt="Nakpro"
              className="md:w-24 w-16 opacity-90"
            />
          </div>
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
          <p className="text-center text-milk md:text-lg font-paragraph font-medium px-5 max-w-3xl mx-auto">
            Nakpro® – The parent brand redefining nutrition. Our flagship
            product Spylt Milk blends energy, protein & taste for a healthier
            lifestyle.
          </p>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink2.png"
            className="absolute inset-0 w-full h-full object-contain opacity-90"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-contain mix-blend-lighten opacity-90"
          />
        )}

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-7"></div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <button className="newsletter-btn" aria-label="Subscribe">
                <img src="/images/arrow.svg" alt="Subscribe" className="w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
