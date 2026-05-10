import ShaderBackground from "@/components/shader-background";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";


function AppLayout() {
    return (
        <div className="min-h-screen w-full flex flex-col relative">
    
        <ShaderBackground />

        <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        


        <main className="w-full flex-1">
            <Outlet/>
        </main>

        
        <Pagination /> 
        </div>
        </div>
    )
    
}

export default AppLayout;