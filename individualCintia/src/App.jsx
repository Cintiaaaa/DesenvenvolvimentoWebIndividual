import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  const [slidePerView, setSlidePerview] = useState(2);
  const data = [
    {
      id: "1",
      image: "../src/assets/amy2.png",
    },
    {
      id: "2",
      image: "../src/assets/Amy.webp",
    },
    {
      id: "3",
      image: "../src/assets/hole.png",
    },
    {
      id: "4",
      image: "../src/assets/lana.png",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1);
      } else {
        setSlidePerview(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <Swiper slidePerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Esta página não existe!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
