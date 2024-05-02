// Register users
export function CreateUsers(userdata) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(" http://localhost:8080/api/register", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {
        "content-type": "application/json",
      },
      credentials:'include'
    });
    if (response.ok) {
      const data = await response.json();
      resolve({ data });
    } else {
      const error = await response.json();
      reject(error);
    }
  });
}
// User signup

export function LoginUsers(userinfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/api/Login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials:'include',
        body: JSON.stringify(userinfo),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", JSON.stringify(data));
        resolve({data});
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject( {error} );
    }
  });
}
// get users
export function getUsers() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token":localStorage.getItem("token")
      },
    
    });
    if (response.ok) {
      const data = await response.json();
      resolve({data});
    }
  });
}
// Request for password-reset-link

export function ResetPassword(email){
  return new Promise(async(resolve,reject)=>{
    try {
      const response= await fetch("http://localhost:8080/api/reset-password-request",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(email)
      })
      if(response.ok){
        const data= await response.json();
        resolve(data)
      }
      else{
        const error= await response.json();
        reject(error)
      }
    } catch (error) {
      reject(error.message)
    }
  })
}

// ResePassword
export function ResetNewPassword(data){
  return new Promise(async(resolve,reject)=>{
    try {
      const resonse = await fetch("http://localhost:8080/api/reset-password",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      if(resonse.ok){
        const data= await resonse.json();
        resolve(data)
      }
      else{
        const error= await resonse.json();
        reject(error)
      }
    } catch (error) {
      reject(error.message)
    }
  })
}