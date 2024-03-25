import {
  AboutMe,
  Hero,
  Services,
  BookAppointment,
  BeautySolutions,
  ReviewUs,
  Footer,
} from "./components";

function App() {
  return (
    <div className="roboto-regular">
      <Hero />
      <AboutMe />
      <Services />
      <BookAppointment />
      <BeautySolutions />
      <ReviewUs />
      <Footer />
    </div>
  );
}

export default App;
