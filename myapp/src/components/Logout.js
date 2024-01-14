// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {

//   const navigate = useNavigate()

//   useEffect(() => {
//     fetch("https://portfoliodb-wj77.onrender.com/logout", {
//       method: 'GET',
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       credentials: 'include'
//     }).then((res) => {
//       if (res.status === 200) {
//         localStorage.removeItem("jwtoken");
//         navigate("/login");
//       } else {
//         throw new Error(res.error);
//       }
//     }).catch((err) => {
//       console.log(err)
//     })
//   })

//   return (<>
//     <h1> Logout </h1>
//   </>)
// }

// export default Logout
