import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const UserDetail = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://reqres.in/api/users/${params.id}`);
      const json = await response.json();
      setUser(json.data);
      // setTimeout(() => {
        setLoading(false);
      // }, 2000)
      console.log(user);
    }
    fetchUser();
  }, [params.id]);
  return (
    <main>
      <span className='text-2xl dark:text-gray-50 '>User detail/ </span>
      <Link to="/" className='text-2xl font-bold text-blue-600'>Home</Link>
        {
          loading ? (
            <ClipLoader
            color={"0000ff"}
            loading={loading}
            size={30}
            data-testid="loader"
          />
          ) : (
          
            <section className="flex flex-col flex-wrap py-5">
              <div className="user_detail-card">
                <div className="bg-custom"></div>
                <div className="detail_txt max-w-sm shadow-lg dark:bg-gray-900 bg-white">
                  <img className="object-cover" src={user.avatar} alt="Profile Image" />
                  <div className="flex justify-center gap-4 font-bold text-3xl dark:text-white">
                    <span>{user.first_name}</span>
                    <span>{user.last_name}</span>
                  </div>
                  <p className="text-center dark:text-white text-xl mt-2 pb-4 border-b-2 dark:border-gray-400">{user.email}</p>
                  <h1 className="text-center dark:text-white mt-6 text-2xl font-bold">00{user.id}</h1>
                </div>
                </div>
                <Link to="/">
                  <button className="flex bg-blue-600 px-6 py-2 rounded mx-auto text-white font-bold cursor-pointer">Go Back</button>
                </Link>
              </section>
          )
        }
    </main>
  )
}

export default UserDetail
