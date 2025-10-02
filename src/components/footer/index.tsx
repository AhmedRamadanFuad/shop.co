import Footer from "./Footer";
import Newsletter from "./Newsletter";

function FooterSection() {
  return (
    <section>
      <div className="translate-y-1/2">
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default FooterSection;
