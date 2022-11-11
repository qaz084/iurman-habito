import {
  Categories,
  SaludoUser,
  ScrollToTopButton,
  Footer,
 
  Banner,
} from "./components";


export default function App() {


  return (
    <>
      <Banner />
      <main>
       <SaludoUser  />

        <Categories />
        <ScrollToTopButton />
      </main>

      <Footer />
    </>
  );
}
