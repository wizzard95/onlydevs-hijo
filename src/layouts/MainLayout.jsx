import { Outlet } from "react-router-dom";


export const MainLayout = () => {
    return(
        <div className="h-screen bg-amber-300 text-black">
            <span>MainLayout</span>
            <Outlet />
        </div>
    )
}