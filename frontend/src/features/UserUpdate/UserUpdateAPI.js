export function UpdateProfile(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/api/updateprofile`, {
        method: "POST",
        body: formData,
        headers:{
          "token":localStorage.getItem("token")
        }
      });

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      }
    } catch (error) {
      reject(error);
    }
  });
}
