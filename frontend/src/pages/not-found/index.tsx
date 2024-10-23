import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            <div className="flex justify-center items-center text-3xl font-semibold text-white font-mono">
                Link not Found!
            </div>
            <div
                className="underline text-blue-300 cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </div>
        </div>
    );
};
