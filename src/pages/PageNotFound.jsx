import { useEffect  } from "react";
import { Link } from "react-router-dom";

import PageNotFoundImage from "../assets/images/pagenotfound.png";

const PageNotFound = () => {
  return (
    <main>
     <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
            <div className="max-w-lg">
              <img className="rounded" src={ PageNotFoundImage } alt="404 Page Not Found"/></div>
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <button className="flex bg-blue-600 px-6 py-2 rounded mx-auto text-white font-bold cursor-pointer">Back To Users</button>
            </Link>
          </div>
        </section>
    </main>
  )
}

export default PageNotFound
