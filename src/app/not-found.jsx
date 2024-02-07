import Link from "next/link";

const NotFound = () => {
    return (
        <div>
        <h1>404 - Not Found</h1>
        <p>Page not found</p>
        <Link href="/">Return home</Link>
        </div>
    );
}

export default NotFound;