import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router"; // 중첩된 라우트를 렌더링하는 데 사용

function Layout() {
  return (
    <div className="todoapp">
      {/* 페이지 상단 헤더 영역 */}
      <Header />

      {/* 중첩된 라우트의 컴포넌트가 렌더링되는 영역 */}
      <Outlet />

      {/* 페이지 하단 푸터 영역 */}
      <Footer />
    </div>
  );
}

export default Layout;
