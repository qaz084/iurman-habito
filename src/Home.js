
import { Categories,Navbar,SaludoUser,ScrollToTopButton,Footer, Spinner} from './components';
import { useFetchUsers } from './customHooks';


export default function App() {

  const {user,isLoading}=useFetchUsers();
 
  return (
    < >
      <Navbar/>
     
      <main>
      {
        isLoading?<Spinner/>:<SaludoUser greetings={user}/>
      }
       
      
        <Categories />
       
        <ScrollToTopButton/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}


