import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Timer from './Components/Codes/Timer';
import TimeTable from './Components/Codes/TimeTable';
import PassCheck from './Components/Codes/passcheck';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <h1>Welcome to my Website $User</h1>
      <Timer/>
      <TimeTable/>
      <PassCheck/>
      {/* <h1>Welcome to my Website $User</h1> */}
    </div>
  );
}

// export default App;


// // App.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const App = () => {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState('');
//   const [formData, setFormData] = useState({ name: '', rollno: '', sub: '', dept: '', section: '' });
  
//   // Fetch all student data
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/'); // Adjust port if needed
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Post new student data
//   const addStudent = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/post', formData);
//       setData([...data, response.data]); // Add new entry to the list
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   // Login and get token
//   const login = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', { username: 'testUser' });
//       setToken(response.data.accessTokenis); // Store the token
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   // Update student data
//   const updateStudent = async (id) => {
//     try {
//       const updatedData = { ...formData, sub: 'Updated Subject' }; // Sample updated data
//       const response = await axios.patch(`http://localhost:3000/${id}`, updatedData);
//       setData(data.map((d) => (d._id === id ? response.data : d)));
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   // Delete student data
//   const deleteStudent = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setData(data.filter((d) => d._id !== id));
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Student Data</h1>
//       <button onClick={login}>Login</button>
//       {data.map((student) => (
//         <div key={student._id}>
//           <h3>{student.name}</h3>
//           <p>Roll No: {student.rollno}</p>
//           <button onClick={() => updateStudent(student._id)}>Update</button>
//           <button onClick={() => deleteStudent(student._id)}>Delete</button>
//         </div>
//       ))}
//       <h2>Add New Student</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Roll No"
//         onChange={(e) => setFormData({ ...formData, rollno: e.target.value })}
//       />
//       <button onClick={addStudent}>Add Student</button>
//     </div>
//   );
// };

export default App;
