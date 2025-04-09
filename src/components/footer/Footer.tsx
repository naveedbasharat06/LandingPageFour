import { motion } from "framer-motion";
import {
  FacebookFilled,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Divider } from "antd";
import "./Footer.css";
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="footer_main">
      <footer className=" text-white pt-12 pb-8 px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2"
        >
          {/* Elixir logo & social links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <img
              src="	https://elixirautomation.com/wp-content/uploads/2025/01/PNG-3-1.png"
              alt="elixir logo"
              className="w-[158px]"
            />
            <ul className="flex flex-row mt-4 ml-1 items-center">
              {[
                <FacebookFilled />,
                <TwitterCircleFilled />,
                <YoutubeFilled />,
              ].map((link) => (
                <li className="">
                  <a
                    href={`./${link}`}
                    className="text-4xl text-center p-1.5 mt-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Useful Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[21px] font-bold mb-4 relative inline-block">
              Useful Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-2">
              {["Home", "Our Services", "Trusted Partners", "Our Team"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`./${link}`}
                      className="hover:text-blue-400 text-sm text-[#ffffff] transition-colors duration-300 flex items-center pb-1.5"
                    >
                      <span className="text-[#B34B98] mr-2"> → </span> {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[21px] font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Client Invoicing",
                "Inbox Management",
                "Project Management",
                "Email Marketing",
                "Client Onboarding",
              ].map((service) => (
                <li key={service}>
                  <a
                    href={`./${service}`}
                    className="hover:text-blue-400 text-sm text-[#ffffff] transition-colors duration-300 flex items-center pb-1.5"
                  >
                    <span className="text-[#B34B98] mr-2"> → </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[21px] font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <PhoneOutlined className="text-[#B34B98] mt-1 mr-3 text-lg" />
                <div>
                  <p className="font-medium text-sm text-[#ffffff] pb-1">
                    786-501-3797
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailOutlined className="text-[#B34B98] mt-1 mr-3 text-lg" />
                <div>
                  <p className="font-medium text-sm text-[#ffffff]">
                    mychal@elixirautomation.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
      <Divider className="bg-gray-700 my-5" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-white text-sm md:flex justify-between max-w-7xl px-1.5 mx-auto pb-3"
      >
        <p>
          © {new Date().getFullYear()} Elixir Automation. All rights reserved
        </p>
        <p className="flex text-sm justify-evenly gap-5">
          {" "}
          <span>Cookies policy</span> <span>Privacy policy</span>{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
