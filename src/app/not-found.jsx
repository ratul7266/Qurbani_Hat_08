import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">

        <Image
          src={logo}
          alt="Qurbani Hat Logo"
          className="mx-auto mb-4"
          width={200}
          height={100}
        />

        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
