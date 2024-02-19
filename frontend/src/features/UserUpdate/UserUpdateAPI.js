export function UpdateProfile(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/api/updateprofile`, {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
        },
        body: formData,
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
