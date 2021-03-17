import { useEffect, useRef } from "react";
import Container from "./Container";

export default function DetailsCard({ classes, details }) {
  const bgImageRef = useRef();
  const detailsTextRef = useRef();

  const adjustImageHeight = () => {
    let textContainerHeight = detailsTextRef.current.offsetHeight;
    bgImageRef.current.style.height = textContainerHeight;
  };
  useEffect(() => {
    window.addEventListener("resize", adjustImageHeight);
    console.log(details);
    return () => {
      window.removeEventListener("resize", adjustImageHeight);
    };
  }, []);
  return (
    <div className={`flex ${classes}`}>
      <Container
        ref={detailsTextRef}
        className={`section-wrapper md:w-1/2 flex sm:flex-col items-center ${details.bg}`}
      >
        <h3 className="section-title">{details.title}</h3>
        <p className="text-2xl lg:w-4/5">{details.text}</p>
      </Container>
      <div
        ref={bgImageRef}
        className={`md:w-1/2 bg-image py-36 h-auto ${details.image}`}
      ></div>
    </div>
  );
}
