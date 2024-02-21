export function CreateAppoinments(appoinmentInfo) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/api/appoinment/create",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials:'include',
        body: JSON.stringify(appoinmentInfo),
      }
    );
    if (response.ok) {
      const data = await response.json();
      resolve({ data });
    }
  });
}
export function getUserAppointments() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/appoinment/getusersappoinment",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           
          },
          credentials:'include',
        }
      );
      if (response.ok) {
        const data = await response.json();
        resolve({data});
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error); // Handle network errors or other exceptions
    }
  });
}

