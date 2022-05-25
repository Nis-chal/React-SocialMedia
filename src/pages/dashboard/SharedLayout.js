import { Navbar, BigSidebar, Recommendation } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <Wrapper>
      <section>
        <div>
          <Navbar />
        </div>

        {/* ----------------------------- MAIN ---------------------------*/}

        <main className="dashboard">
          <div className="container">
            <BigSidebar />
            <Outlet />
            <Recommendation />
          </div>
        </main>
      </section>
    </Wrapper>
  );
};

export default SharedLayout;
