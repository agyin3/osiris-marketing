import Head from "next/head";
import Header from "../components/Header";
import FSBackground from "../components/FSBackground";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";
import Details from "../components/Details";
import data from "../data.json";
import Services from "../components/Services";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faGlobe,
  faLaptop,
  faLock,
  faChalkboardTeacher,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Footer from "../components/Footer";

library.add(faLaptop, faGlobe, faCode, faSearch, faLock, faChalkboardTeacher);

export default function Home() {
  useEffect(async () => {
    let testing = async () => {
      let res = await fetch("/api/hello");
      res = await res.json();
      console.log(res);
    };
    testing();
  }, []);
  return (
    <div className="bg-image bg-homepage-hero text-white text-roboto">
      <Head>
        <title>Osiris Marketing Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container shadow-2xl mx-auto font-roboto">
        <FSBackground
          overlay="bg-black"
          image="bg-homepage-hero"
          height="h-full"
          classes="flex items-center section-wrapper"
        >
          <Container className="md:flex-row">
            <div className="md:w-1/2 mb-5 md:mb-0 flex-grow flex-shrink">
              <h1 className="text-yellow font-farro text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8">
                Osiris Marketing Group
              </h1>
              <p className="font-bold text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 lg:mb-8">
                Get a custom website tailored to fit your business needs
              </p>
              <p className="font-light text-xl md:text-2xl lg:text-2xl">
                Count on our amazing team to build you the site of your dreams
                and get you found on Google
              </p>
            </div>
            <div className="md:w-1/2 flex-grow flex-shrink flex justify-end">
              <ContactForm />
            </div>
          </Container>
        </FSBackground>
        {data.details.map((deet) => (
          <Details
            details={{
              bg: deet.bg,
              title: deet.title,
              text: deet.text,
              image: deet.image,
            }}
            classes={deet.classes}
          />
        ))}
        <Services services={data.services} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
