import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] w-full flex items-center bg-accent justify-center">
            <div className="flex flex-col gap-4 text-center">
                <h3 className="font-bold text-4xl">404</h3>
                <p>Oops! Page not found</p>
                <Link to="/" className="underline text-blue-400">Return to Home</Link>
            </div>
        </div>
    )
}
export default NotFound
