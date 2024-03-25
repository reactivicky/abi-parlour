import {
  AboutMe,
  Hero,
  Services,
  BookAppointment,
  BeautySolutions,
} from "./components";

function App() {
  return (
    <div className="roboto-regular">
      <Hero />
      <AboutMe />
      <Services />
      <BookAppointment />
      <BeautySolutions />
    </div>
  );
}

export default App;
