// Components
import Footer from "../components/Footer";
import FormScheme from "../components/Others/FormScheme";
import Navbar from "../components/Navbar";
// Global Context
import { useGlobalContext } from "../context";

const RegisterForm = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <FormScheme type='signup' />;
  }
  return (
    <>
      <Navbar />
      <FormScheme type='signup' />
      <Footer />
    </>
  );
};

export default RegisterForm;
