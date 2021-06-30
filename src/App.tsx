import { useState, useEffect } from 'react';
import axios from 'axios'

import {Container} from './style/index'

interface Data {
  name: string,
  username: string,
  email: string,
  id: number,
  address: {
    city: string
  }
}

export const App: React.FC = () => {

  const [lists, setList] = useState<Data[]>([])

  useEffect(() => {
    axios.get<Data[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => setList(response.data))
  }, [])

  return (
   <Container>
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Email</th>
           <th>City</th>
         </tr>
       </thead>

       <tbody>
          {lists.map(list => 
          <tr key={list.id}>
            <td>{list.name}</td>
            <td>{list.username}</td>
            <td>{list.email}</td>
            <td>{list.address.city}</td>
          </tr>
          )}
       </tbody>
     </table>
   </Container>
  );
}