import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ResumeRevamp",
    img: "https://images.pexels.com/photos/5598289/pexels-photo-5598289.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Automated Resume Screener: This online application uses Python modules such as NLTK and Scikit-learn to evaluate resumes. It helps to automate the first screening process by categorizing resumes based on relevant abilities and expertise for specific employment positions.",
    link: "https://github.com/Dexter829/Resume-Predictor"
  },
  {
    id: 2,
    title: "InterviewAce",
    img: "https://www.ttnews.com/sites/default/files/styles/article_full_width_image/public/2023-09/iTECH-Dysart-1200.jpg",
    desc: "Developed an innovative web application leveraging AI to generate realistic interview questions and answers; enhanced user preparation and increased interview success rates by 45% through personalized video recording capabilities.",
    link:"https://ai-mock-interview-dex.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-mock-interview-dex.vercel.app%2Fdashboard"
  },
  {
    id: 3,
    title: "Notiefy",
    img: "https://i.pinimg.com/originals/33/cb/5c/33cb5cfb09577bb78bfa6e75311f04b8.jpg",
    desc: "This Node.js application provides a comprehensive solution for managing records with full CRUD (Create, Read, Update, Delete) functionality. Built using Express.js as the web framework and MongoDB as the database, it offers a robust and scalable backend for managing data.",
  },
  {
    id: 4,
    title: "Stock Price Prediction",
    img: "https://analyticsindiamag.com/wp-content/uploads/2020/03/SBI-Stock-Prediction.png",
    desc: "The LSTM-based RNN model is a powerful deep learning model that processes sequential input by efficiently memorizing patterns over time. This model was created using PyTorch, a famous open-source machine learning framework",
    link: "https://github.com/Dexter829/Price-Prediction-using-RNN-LSTM"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
