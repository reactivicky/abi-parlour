import {
  AboutMe,
  Hero,
  Services,
  BookAppointment,
  BeautySolutions,
  ReviewUs,
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
    </div>
  );
}

export default App;
