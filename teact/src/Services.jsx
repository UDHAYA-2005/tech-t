import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <motion.h2 
        className="services-title"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>

      <div className="services-container">
        <motion.div 
          className="service-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>UI/UX Design</h3>
          <p>We create intuitive, engaging, and visually appealing interfaces.</p>
        </motion.div>

        <motion.div 
          className="service-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Web Development</h3>
          <p>We build custom, functional, and responsive websites.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
