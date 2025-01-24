import React, { useState } from 'react';
//Navigation
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  const [users, setUsers] = useState([]);
  return <AppNavigator users={users} setUsers={setUsers}/>;
}
