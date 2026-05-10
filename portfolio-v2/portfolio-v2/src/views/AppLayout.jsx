import ShaderBackground from "@/components/shader-background";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";


function AppLayout() {
    return (
        <div className="min-h-screen w-full">
    


        <NavBar />
        <ShaderBackground />


        <main className="w-full">
            <Outlet/>
        </main>
        </div>
    )
    
}

export default AppLayout;