import { Card } from '../components';



const UserList = ({users}) => {

  return (
    <main className="">
      <section className="max-w-7xl mx auto pt-16">
        <div className="flex justify-start flex-wrap">
          {
            users.map((user) => (
              <Card key={user.id} user={user}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default UserList
