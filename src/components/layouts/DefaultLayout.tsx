import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBtn from "./SideBtn";
import Toolbar from "./Toolbar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
    
      <Header />

      <div className="flex ">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <main>
            {/* Dynamic Route Content */}
            <Outlet />
            {/* <SideBtn /> */}
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
