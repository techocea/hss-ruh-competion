import Navbar from "../common/Navbar.tsx";
import Footer from "../common/Footer.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div> {/* Don't nest main inside main */}
            <Navbar/>
            <main className="min-h-screen bg-white">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout
