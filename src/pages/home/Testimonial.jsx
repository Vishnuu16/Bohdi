import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "K. Yuvasri",
    username: "Govt Medical College, Vellore",
    content:
      "A village girl who turned her dream of becoming a doctor into reality through Bohdi Park’s scholarship and coaching. Cleared NEET 2023 with top score.",
    image: "/testi1.jpg",
  },
  {
    id: 2,
    name: "S. Ranjitha",
    username: "Govt Medical College, Chengalpattu",
    content:
      "Despite her family's uncertain daily wages, Ranjitha stayed focused, cracked NEET with our scholarship, and is now becoming a doctor.",
    image: "/testi2.jpg",
  },
  {
    id: 3,
    name: "C. Mokeshwaran",
    username: "Govt Medical College, Thiruvannamalai",
    content:
      "Son of a struggling farmer, Mokeshwaran used every challenge as motivation. With our scholarship, he scored high in NEET and is now a future doctor.",
    image: "/testi1.jpg",
  },
  {
    id: 4,
    name: "S. Kanishka Devi",
    username: "Govt Medical College, Thiruvallur",
    content:
      "Daughter of a tailor, Kanishka studied with dedication for her mother. She cleared NEET with our coaching and is on her path to success.",
    image: "/testi2.jpg",
  },
  {
    id: 5,
    name: "S. Pavithra",
    username: "Govt Medical College, Namakkal",
    content:
      "Parents were daily wage workers, but Pavithra proved financial struggles can't stop dreams. She earned a scholarship and aced NEET.",
    image: "/testi1.jpg",
  },
  {
    id: 6,
    name: "M. Arasu",
    username: "Annai Medical College, Sriperumbudur",
    content:
      "Son of a farmer who fed society, Arasu now aims to serve it medically. With guidance and hard work, he cracked NEET and joined medical college.",
    image: "/testi2.jpg",
  },
  {
    id: 7,
    name: "R. Ezhilarasan",
    username: "Sri Venkateshwara Medical College, Chennai",
    content:
      "From a low-income family, Ezhilarasan never missed a class. His consistent effort helped him secure a top NEET rank.",
    image: "/testi1.jpg",
  },
  {
    id: 8,
    name: "T. Dinega",
    username: "Govt Medical College (2023-2024)",
    content:
      "Fought societal norms that discouraged girls' education. Dinega broke barriers, earned a scholarship, and now inspires others with her NEET success.",
    image: "/testi2.jpg",
  },
];

const Testimonial = () => {
  const [selected, setSelected] = useState(null);
  const swiperRef = useRef(null);

  const handleCardClick = (testimonial) => {
    setSelected(testimonial);
    swiperRef.current?.autoplay?.stop();
  };

  const handleCloseModal = () => {
    setSelected(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div className="bg-[#F9FAFB] text-gray-800 py-20 px-4 text-center">
      <p className="text-orange-500 font-semibold mb-2 text-sm tracking-wide uppercase">
        Testimonial
      </p>
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
        Results & Achievements
      </h2>
      <p className="max-w-xl mx-auto mb-10 text-gray-500">
        Proud Achievements of Bohdi Park <br />
        We take immense pride in our students' outstanding performance in NEET!
        Their hard work, dedication, and our expert guidance have led them to success.
      </p>

      {/* Wrapper with padding to avoid edge clipping */}
      <div className="px-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={40} // Increased space between slides
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="max-w-6xl mx-auto px-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="overflow-visible">
              <div
                onClick={() => handleCardClick(testimonial)}
                className="cursor-pointer flex flex-col justify-between h-[320px] md:h-[260px] mt-16 md:flex-row bg-white rounded-2xl p-6 gap-6 items-center shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-xl border-4 border-green-300"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <p className="font-bold">{testimonial.username}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-24 h-24 object-cover rounded-xl mb-4 mx-auto"
            />
            <h3 className="text-2xl font-bold mb-2 text-center">
              {selected.name}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-4">
              {selected.username}
            </p>
            <p className="text-gray-700">{selected.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
