// getallusers Appoinments
export function GetAllusersAppoinments(pagination) {
  return new Promise(async (resolve, reject) => {
    let query = "";
    for (let key in pagination) {
      query += `${key}=${pagination[key]}&`;
    }
    const response = await fetch(
      "http://localhost:8080/api/admin/allappoinments?" + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:'include'
      }
    );
    if (response.ok) {
      const data = await response.json();
      const TotalAppoinment = await response.headers.get("x-total-count");
      resolve({ data: { Allappoinmnet: data, total: TotalAppoinment } });
    }
  });
}
// createBlog

export function CreateBlog(blogInfo) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "http://localhost:8080/api/admin/blog/create",
      {
        method: "POST",
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body: blogInfo,
      }
    );
    if (response.ok) {
      const data = await response.json();
      resolve({ data });
    }
  });
}
// Gets All Blogs
export function GetsAllBlogs(){
  return new Promise(async(resolve,reject)=>{
    const response= await fetch('http://localhost:8080/api/admin/blog',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include'
    })
    if(response.ok){
      const data= await response.json();
      resolve({data})
    }
  })
}
// Create Doctor Account
export function CreateDoctorAccount(doctorInfo) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/api/doctor/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorInfo),
    });
    if (response.ok) {
      const data = await response.json();
      resolve({ data, message: "Account Create SuccessFully !" });
    }
  });
}
// Update Users Appoinments;
export function UpdateUserAppoinments(update){
  return new Promise(async(resolve)=>{
   const response= await fetch('http://localhost:8080/api/appoinment/update/'+update._id,{
    method:"PATCH",
    headers:{
      'Content-Type':'application/json'
    },
    credentials:'include',
    body:JSON.stringify(update)
   })
   if(response.ok){
    const data =response.json();
    resolve({data})
   }
  })
}