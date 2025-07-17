import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WLight1 from "./pages/WLight1";
import MarkAnthonyPage from "./pages/MarkAnthony"; // <--- THÊM DÒNG NÀY
import CompetitionPage from "./pages/Competition";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

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
        title = "Home"; // Có thể đặt title cho trang chủ
        metaDescription = "Welcome to the main page.";
        break;
      // THÊM CASE CHO TRANG MỚI
      case "/mark-anthony":
        title = "Mark Anthony";
        metaDescription = "Information about Mark Anthony.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WLight1 />} />
      <Route path="/mark-anthony" element={<MarkAnthonyPage />} />
      <Route path="/competition" element={<CompetitionPage />} />
    </Routes>
  );
}
export default App;