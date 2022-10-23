import {
  Categories,
  SaludoUser,
  ScrollToTopButton,
  Footer,
  Spinner,
  Banner,
} from "./components";
import { useFetchUsers } from "./customHooks";

export default function App() {
  const { user, isLoading } = useFetchUsers();

  return (
    <>
      <Banner />
      <main>
        {isLoading ? <Spinner /> : <SaludoUser greetings={user} />}

        <Categories />
        <ScrollToTopButton />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
