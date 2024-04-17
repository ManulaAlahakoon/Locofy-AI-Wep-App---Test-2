import { useEffect } from "react";
import { useCookies } from 'react-cookie';

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const [ cookies,setCookie,removeCookie ] = useCookies(null)
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const authtoken = cookies.AuthToken

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {authtoken && <Route path="/property-details" element={<PropertyDetails />} />}
      {authtoken && <Route path="/" element={<Homepage />} />}
      {!authtoken && <Route path="/sign-up-page" element={<SignUpPage />} />}
      {!authtoken && <Route path="/sign-in-page" element={<SignInPage />} />}
    </Routes>
  );
}
export default App;
