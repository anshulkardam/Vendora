import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div>
            <div>
                Welcome to Auth
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout