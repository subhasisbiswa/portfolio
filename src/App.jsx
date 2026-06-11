import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiMui,
  SiSocketdotio,
  SiVite,
} from "react-icons/si";


/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "Hotel Listing Website",
    desc: "Modern futuristic developer portfolio with premium animations and glassmorphism UI.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Express",
      "MongoDB",
      "Node.js",
      
    ],
    live: "https://wanderlust-2-wzgk.onrender.com",
    github: "https://github.com/yourgithub/portfolio",
  },

  {
    title: "Realtime VideoCall App",
    desc: "Realtime chatting platform using Socket.io with authentication and live messaging.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    live: "https://webrtc-8aiq.onrender.com",
    github: "https://github.com/yourgithub/chatapp",
  },

  {
    title: "E-Commerce Platform",
    desc: "Full MERN stack ecommerce website with payment integration and admin dashboard.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    live: "https://yourecommerce.com",
    github: "https://github.com/yourgithub/ecommerce",
  },
];

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  // gmailgave 
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }
  } catch (err) {
    alert("Server Error");
  }
};


  // nodemailerend

  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-gradient-to-br from-black via-[#071300] to-black">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-lime-300/10 blur-[120px]" />
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-lime-400 font-bold text-xl">
            Creative Developer
          </h1>

          <div className="hidden md:flex gap-4">
            {["Home", "About", "Education", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-2xl glass neon-hover transition"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden scroll-mt-24"
      >
        
        {/* Rotating Glow */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="rotating-glow"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black drop-shadow-[0_0_25px_rgba(163,255,18,0.4)]"
        >
          Creative
          <span className="text-lime-400"> Developer</span>
        </motion.h1>

        <p className="mt-4 text-gray-400 text-lg tracking-[5px]">
          SUBHASIS BISWAL
        </p>

        <p className="mt-6 max-w-2xl text-gray-300">
          MERN Stack Developer creating futuristic and scalable web
          applications with premium user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          
          {/* View Projects Button */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-lime-300 to-lime-500 text-black font-semibold shadow-[0_0_25px_rgba(163,255,18,0.5)] hover:scale-105 transition"
          >
            View Projects
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-lime-400 hover:bg-lime-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>

        {/* Skills Slider */}{/* Skills Slider */}
<div className="w-full overflow-hidden mt-16">
  <div className="marquee flex gap-6">

    {[
      { name: "React", icon: <FaReact className="text-cyan-400" /> },

      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-sky-400" />,
      },

      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-300" />,
      },

      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-400" />,
      },

      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },

      {
        name: "Express",
        icon: <SiExpress className="text-gray-300" />,
      },

      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
      },

      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },

      {
        name: "Python",
        icon: <FaPython className="text-yellow-400" />,
      },
{
  name: "Oracle",
  icon: "🗄️",
},
      {
        name: "Material UI",
        icon: <SiMui className="text-blue-400" />,
      },

      {
        name: "Socket.io",
        icon: <SiSocketdotio className="text-white" />,
      },

      {
        name: "Vite",
        icon: <SiVite className="text-purple-400" />,
      },

      // duplicate for smooth infinite marquee

      { name: "React", icon: <FaReact className="text-cyan-400" /> },

      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-sky-400" />,
      },

      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-300" />,
      },

      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-400" />,
      },

      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },

      {
        name: "Express",
        icon: <SiExpress className="text-gray-300" />,
      },

      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
      },

      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
    ].map((skill, index) => (
      <div
        key={index}
        className="px-6 py-3 rounded-2xl glass neon-hover whitespace-nowrap flex items-center gap-3 text-lg"
      >
        <span className="text-2xl">
          {skill.icon}
        </span>

        <span>{skill.name}</span>
      </div>
    ))}
  </div>
</div>
</section>
      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section
        id="about"
        className="py-24 px-6 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-5xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(163,255,18,0.5)]">
            About <span className="text-lime-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Problem Solving",
              "Frontend Development",
              "Backend Development",
              "Responsive Design",
              "API Integration",
              "Performance Optimization",
            ].map((item) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={item}
                className="p-8 rounded-3xl glass neon-hover transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Building clean and scalable modern applications.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section
        id="education"
        className="py-24 px-6 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-5xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(163,255,18,0.5)]">
            Education
          </h2>

          <div className="space-y-6">
            {[
              {
                degree: "MCA",
                college: "Your MCA College Name",
                year: "2023 - 2025",
                desc: "Master of Computer Applications with focus on MERN Stack and Software Development.",
              },

              {
                degree: "Bachelor Degree",
                college: "Your Graduation College",
                year: "2018 - 2021",
                desc: "Completed graduation with strong interest in programming and Physics.",
              },

              {
                degree: "12th Science",
                college: "Shanti Institute Of Management And Studies",
                year: "2016 - 2018",
                desc: "Science stream.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl glass neon-hover"
              >
                <h3 className="text-2xl font-semibold text-lime-400">
                  {edu.degree}
                </h3>

                <p className="text-gray-400 mt-2">
                  {edu.college} • {edu.year}
                </p>

                <p className="mt-4 text-gray-300">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="py-24 px-6 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-5xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(163,255,18,0.5)]">
            Featured <span className="text-lime-400">Projects</span>
          </h2>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="block rounded-3xl overflow-hidden glass neon-hover transition"
                >
                  
                  {/* Project Image */}
                  <div className="h-52 bg-gradient-to-br from-lime-400/20 via-black to-lime-900/20 flex items-center justify-center text-2xl font-bold text-lime-400">
                    {project.title}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-gray-400">
                      {project.desc}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-lime-400/10 text-lime-300 text-sm border border-lime-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                      
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-lime-300 to-lime-500 text-black font-semibold shadow-[0_0_20px_rgba(163,255,18,0.4)] hover:scale-105 transition"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl border border-white/20 hover:border-lime-400 hover:text-lime-400 transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
<section
  id="contact"
  className="py-24 px-6 scroll-mt-24"
>
  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold mb-12">
      Contact <span className="text-lime-400">Me</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-3xl glass neon-hover"
      >

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-white/10"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-white/10"
          required
        />

        <textarea
          rows="5"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-white/10"
          required
        />

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-lime-300 to-lime-500 text-black font-bold"
        >
          Send Message
        </button>

      </form>

      <div className="flex flex-col justify-center gap-6">

        <div className="p-6 rounded-3xl glass neon-hover">

          <p className="text-gray-400">
            Email
          </p>

          <h3 className="text-2xl font-bold mt-2">
            subhasisbiswal66@gmail.com
          </h3>

        </div>

        <div className="flex gap-4">

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl glass neon-hover flex items-center justify-center"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl glass neon-hover flex items-center justify-center"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl glass neon-hover flex items-center justify-center"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://twitter.com/YOUR_TWITTER_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl glass neon-hover flex items-center justify-center"
          >
            <FaTwitter size={22} />
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        <p>
          © 2026 Subhasis Biswal • Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;