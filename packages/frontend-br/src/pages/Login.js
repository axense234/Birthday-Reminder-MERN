// Components
import Footer from "../components/Footer";
import FormScheme from "../components/Others/FormScheme";
import Navbar from "../components/Navbar";
// Global Contexxt
import { useGlobalContext } from "../context";

const LoginForm = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <FormScheme type='login' />;
  }
  return (
    <>
      <Navbar />
      <FormScheme type='login' />
      <Footer />
    </>
  );
};

export default LoginForm;
