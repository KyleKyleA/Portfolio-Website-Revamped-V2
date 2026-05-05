import ShaderBackground from "@/components/shader-background";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";


function AppLayout() {
    return (
        <>
        <header className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Kyle Angeles</span>      
        </header>



        <NavBar />
        <ShaderBackground />


        <main className="w-full">
            <Outlet/>
        </main>
        </>
    )
    
}

export default AppLayout;