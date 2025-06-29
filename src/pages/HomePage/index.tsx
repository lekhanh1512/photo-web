import { useEffect, useRef, useState } from "react";
import "./style.css"; // Import your CSS styles
import Service from "./components/Service";

const ImageGrid = () => {
  return (
    <div className="max-w-full mx-auto px-4 pb-4 mt-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4">
        <div className="w-full aspect-auto overflow-hidden md:col-span-2 lg:col-span-1">
          <img
            alt="Couple on beach, man carrying woman facing each other with ocean background"
            className="w-full h-96 object-cover fade-in"
            src="bia1.jpg"
          />
        </div>
        <div className="w-full aspect-auto overflow-hidden md:col-span-2 md:col-start-3 lg:col-span-1">
          <img
            alt="Couple kissing outside white house, man in navy suit, woman in white dress"
            className="w-full h-96 object-cover fade-in"
            src="bia2.jpg"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="w-full aspect-auto overflow-hidden md:col-span-2 md:col-start-5 lg:col-span-1">
          <img
            alt="Pregnant woman and man embracing on rocks by ocean with sunset lighting"
            className="w-full h-96 object-cover fade-in"
            src="bia3.jpg"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="w-full aspect-auto overflow-hidden md:col-span-3 md:row-start-2 lg:col-span-1 lg:-row-start-1">
          <img
            alt="Newborn baby with headband being held by parents with green plant background"
            className="w-full h-96 object-cover fade-in"
            src="bia4.jpg"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="w-full aspect-auto overflow-hidden sm:row-start-3 sm:col-span-2 md:col-span-3 md:row-start-2 md:col-start-4 lg:col-span-1 lg:-row-start-1">
          <img
            alt="Family with man, woman, and baby outdoors smiling with trees background"
            className="w-full h-96 object-cover fade-in"
            src="bia5.jpg"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
    </div>
  );
};

interface OverlaySectionProps {
  title: string;
  description: string;
}

const OverlaySection = ({ title, description }: OverlaySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ngưng theo dõi sau khi hiện
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative bg-[#b1977c] w-full h-72 flex flex-col justify-center items-center overflow-hidden px-4"
    >
      <h1 className="text-white text-4xl sm:text-5xl font-normal tracking-wide uppercase z-10 font-playfair">
        {title}
      </h1>
      <p
        className={`text-white text-2xl sm:text-3xl mt-5 z-10 font-pacifico fade-in-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {description}
      </p>

      {/* CSS trong JSX (nếu không dùng file CSS ngoài) */}
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

const InfomationSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) setTextVisible(true);
            if (entry.target === imageRef.current) setImageVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="max-w-full mx-auto px-4 bg-white text-[#533822] min-h-[70vh] flex items-center justify-center">
      <main className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-20 relative py-5">
        <section
          ref={textRef}
          className={`flex flex-col max-w-xl w-full fade-in-up ${
            textVisible ? "visible" : ""
          }`}
        >
          <p className="text-lg font-normal mb-2 font-playfair">
            Lê Khang Photographer
          </p>
          <h1 className="curved-text script-font text-5xl leading-[1.1] font-normal mb-1 font-pacifico items-center ">
            Hello,
          </h1>
          <h2 className="text-5xl font-light uppercase tracking-wide mb-12 font-playfair">
            Lorem ipsum
          </h2>
          <p className="text-xs leading-5 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            aliquam tortor dolor, ac rutrum sem ullamcorper at. Nullam posuere
            cursus velit eu tincidunt. Vestibulum sit amet turpis orci. Ut
            bibendum mi vel venenatis rhoncus. Curabitur iaculis sapien nec
            scelerisque faucibus. Quisque commodo, libero eu commodo vehicula,
            ex erat dapibus tortor, ut placerat mauris ex id magna. Maecenas
            euismod fermentum mollis. Vestibulum accumsan arcu eu urna
            tincidunt, nec aliquam metus suscipit. Vestibulum blandit nulla eget
            eleifend ullamcorper. Proin ac bibendum dolor. Mauris sapien sapien,
            iaculis sit amet imperdiet vel, vulputate et nulla.
          </p>
          <p className="text-xs leading-5 mb-16">
            Proin mattis, eros in interdum ullamcorper, ligula turpis porta
            metus, rutrum malesuada diam felis sit amet nisi. Sed consequat enim
            id placerat vestibulum. Quisque fermentum lectus diam, et placerat
            libero commodo in. Integer metus felis, porta ut urna at, rutrum
            eleifend nulla. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Etiam pharetra ligula in
            rhoncus bibendum. Aliquam porta, sapien eget mollis vulputate, odio
            tortor fringilla arcu, a interdum leo elit ac purus. Vivamus eu
            iaculis leo. Ut vestibulum venenatis neque, at rhoncus dui
            ullamcorper ac.
          </p>
          <p className="script-font text-2xl mb-6">
            Let’s create something beautiful!
          </p>
          <div className="flex gap-6 max-w-xs">
            <button className="bg-[#533822] text-white text-xs tracking-widest py-4 px-8 uppercase font-serif font-light hover:bg-[#b38d73] transition-colors duration-300 w-full">
              Tìm hiểu thêm
            </button>
            <button className="bg-[#533822] text-white text-xs tracking-widest py-4 px-8 uppercase font-serif font-light hover:bg-[#b38d73] transition-colors duration-300 w-full">
              Các dịch vụ
            </button>
          </div>
        </section>

        <section
          ref={imageRef}
          className={`relative flex flex-col items-center justify-center max-w-md w-full fade-in-up ${
            imageVisible ? "visible" : ""
          }`}
        >
          <img
            alt="Woman smiling"
            className="shadow-xl border border-gray-200 mb-6 w-full max-w-[400px] object-cover p-1 text-gray-400 drop-shadow-[2px_2px_3px] mix-blend-normal"
            height="600"
            loading="lazy"
            src="info1.jpg"
            width="400"
          />
          <img
            alt="Woman with camera"
            className="shadow-2xl border border-gray-200 absolute bottom-0 right-0 max-w-[250px] w-full p-1 text-gray-400 drop-shadow-[2px_2px_3px] mix-blend-normal"
            height="350"
            loading="lazy"
            src="info2.jpg"
            style={{ transform: "translate(20%, 20%)" }}
            width="250"
          />
          <img
            alt="Palm illustration"
            className="pointer-events-none absolute bottom-0 left-0 w-[300px] opacity-20 select-none"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/f8b9bc32-85ad-4d8f-7ebb-c73ccf6657af.jpg"
            style={{ zIndex: -1 }}
            width="300"
          />
        </section>
      </main>

      {/* CSS cho hiệu ứng fade-in-up */}
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }
          .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <ImageGrid />
      <OverlaySection
        title="THỜI GIAN SẼ LUÔN ĐẾN RỒI ĐI"
        description="nhưng kỉ niệm thì sẽ luôn còn mãi..."
      />{" "}
      <InfomationSection />
      <OverlaySection
        title="HÃY THAM KHẢO"
        description="các dịch vụ của chúng tôi"
      />
      <Service />
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
