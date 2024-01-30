import "./App.scss";
import { Header, Navbar, Content, Footer } from "./layouts";
import {
  Attribution,
  FooterLinksList,
  HeaderCTA,
  Heading,
  Logo,
} from "./components";

function App() {
  const linkItems = {
    product: [
      "overview",
      "pricing",
      "marketplace",
      "features",
      "intergrations",
    ],
    company: ["about", "team", "blog", "careers"],
    connect: ["contact", "newsletter", "linkedIn"],
  };
  return (
    <>
      <Header>
        <Navbar navItems={linkItems} />
        <Heading />
        <HeaderCTA />
      </Header>
      <Content />
      <Footer>
        <Logo />
        <FooterLinksList linkItems={linkItems} />
        <Attribution />
      </Footer>
    </>
  );
}

export default App;
