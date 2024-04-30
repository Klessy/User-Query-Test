

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1;  i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }
  return (
    <div className="flex flex-row justify-center mt-0 pb-4">
      {
        pages.map((page, index) => {
            return (
                <button onClick={() => setCurrentPage(page)} key={index} 
                className={`dark:text-slate-200 w-12 h-12 font-extrabold mx-2 text-gray-700 border-gray-400 bg-gray-400 transition-all cursor-pointer rounded-sm ${page === currentPage ? 'font-extrabold border-blue-500 bg-blue-500': ''}`}>
                    {page}
                </button>
            )
        })
      }
    </div>
  )
}

export default Pagination
