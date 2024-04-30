import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
import ClipLoader from "react-spinners/ClipLoader";

const Search = () => {

const [search, setSearch] = useState('')
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

const url = "https://reqres.in/api/users/";

useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    }
    fetchMovies();
  }, [url]);

console.log(users);

  const handleSearch = (event) => {
    event.preventDefault();
    const id = event.target.value;
    setSearch(id);
    // event.target.reset();
    console.log(search);
  }

  return (
    <main>
      {
        loading ? (
          <ClipLoader
          color={"0000ff"}
          loading={loading}
          size={30}
          data-testid="loader"
        />
        ) : (
          <>
            <section className="py-7">
              <span className='text-2xl dark:text-gray-50 '>Search/ </span>
              <Link to="/" className='text-2xl font-bold text-blue-600'>Home</Link>
                <div className="relative mt-8 mb-4">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <form >
                      <input onChange={handleSearch} value={search} type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user by id" autoComplete="off" />
                      </form>
                    </div>
                <p className="text-3xl text-gray-700 dark:text-white">
                  Result
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
              <div className="flex justify-start flex-wrap">
                  {
                  users
                  .filter((item) => search.toString().toLowerCase() === '' ? item : item.id.toString().toLowerCase().includes(search))
                  .map((user) => (
                      <Card key={user.id} user={user}/>
                    ))
                  }
              </div>
            </section>
          </>
        )
      }
    </main>
  )
}

export default Search
