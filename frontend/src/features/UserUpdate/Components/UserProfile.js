import React, { useState } from "react";
import { UpdateProfileAsync, userProfile } from "../UserUpdateSlice";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const profile = useSelector(userProfile);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("myimage", image);

    dispatch(UpdateProfileAsync(formData));
  };
  return (
    <main className="container mx-auto max-w-screen-lg h-full">
      {/* file upload modal */}
      <article
        aria-label="File Upload Modal"
        className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
      >
        <section className="md:h-full overflow-auto p-8 w-full h-full flex flex-col">
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;
                <span>files anywhere or</span>
              </p>
              <input
                name="myimage"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
              <button
                id="button"
                className="mt-2 rounded-sm px-3 py-1 bg-blue hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              >
                Upload a file
              </button>
            </header>
          </form>
        </section>
      </article>
    </main>
  );
};

export default UserProfile;
