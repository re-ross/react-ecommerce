import {
  Announcement,
  Categories,
  Footer,
  Newsletter,
  Navbar,
  Products,
  Slider,
} from "../components";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
