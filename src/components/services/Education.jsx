import { useRef } from "react";
import "./education.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="education"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on solving the problem
          <br /> and moving forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Can create Unique</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>To every</motion.b> Problem.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2><u>B.tech 4th Year</u></h2>
          <p>
            I'm a final-year B.Tech student specializing in web development and data analysis, with a strong proficiency in Python, JavaScript, and React. My technical skills include working with libraries such as Streamlit, Pandas, and NLTK, which I utilize for creating dynamic web applications and conducting comprehensive data analyses. Additionally, I have a keen interest in deep learning, further enhancing my capability to develop innovative solutions in the tech field.
            ,<br /><br /><br /><br />
            Curretnly pursuing my B.tech from Kalinga Institute of Industrial University Bhubaneswar, Odisha.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
