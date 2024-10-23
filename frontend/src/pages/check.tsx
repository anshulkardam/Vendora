import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landingcheck = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                go to auth
                <Button
                    onClick={() => {
                        navigate("/auth/login");
                    }}
                >
                    AUTH
                </Button>
            </div>
            <div>go to not found
            <Button
                    onClick={() => {
                        navigate("/auth/login/ll");
                    }}
                >
                    not found
                </Button>
            </div>
            <div>go to not authorized
            <Button
                    onClick={() => {
                        navigate("/not-authorized");
                    }}
                >
                    not authorized
                </Button>
            </div>
            <div>go to admin
            <Button
                    onClick={() => {
                        navigate("/auth/signup");
                    }}
                >
                    ADMIN
                </Button>
            </div>
        </div>
    );
};

export default Landingcheck;
