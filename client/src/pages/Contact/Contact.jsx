import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import coverImg from "../../assets/contact/banner.jpg";

const Contact = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss || Contact Us</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="contact us"
        subtitle="Would you like to try a dish?"
      />
        </div>
    );
};

export default Contact;