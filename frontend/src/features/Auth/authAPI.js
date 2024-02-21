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
      localStorage.setItem("token", JSON.stringify(data));
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
        const error = await response.text();
        reject({error});
      }
    } catch (error) {
      reject( {error} );
    }
  });
}

export function getUsers() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:'include',
    });
    if (response.ok) {
      const data = await response.json();
      resolve({data});
    }
  });
}
