
export function getallDoctors() {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/doctor`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "token":localStorage.getItem("token")
      },
    
    });
    if (response.ok) {
      const data = await response.json();
      resolve({data});
    }
  });
}
// getDoctors byID
export function getDoctorsById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/doctor/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "token":localStorage.getItem("token")
      },
    });
    if (response.ok) {
      const data = await response.json();
      resolve({data});
    }
  });
}
