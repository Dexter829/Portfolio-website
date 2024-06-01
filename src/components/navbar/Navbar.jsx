import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Deepak Dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/deepak-yadav-32614627a/">
            <img src="/linkdin.png" alt="" />
          </a>
          <a href="https://github.com/Dexter829/">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://x.com/journeytosky1">
            <img src="/x.png" alt="" />
          </a>
          <a href="https://deepaks-organization-6.gitbook.io/dex-verse">
            <img src="/gitbooks.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
