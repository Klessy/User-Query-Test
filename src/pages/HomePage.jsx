import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import UserList from './UserList';
import ClipLoader from "react-spinners/ClipLoader";


const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [loading, setLoading] = useState(true);
    const url = "https://reqres.in/api/users/";
    
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      }
      fetchUsers();
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  return (
    <section>
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
            <UserList users={currentPosts}/>
            <div className="">
                <Pagination totalPosts = {users.length} 
                postsPerPage = {postsPerPage} 
                setCurrentPage = {setCurrentPage}
                currentPage = {currentPage}
                />
            </div>
          </>
        )
      }
    </section>
  )
}

export default HomePage
