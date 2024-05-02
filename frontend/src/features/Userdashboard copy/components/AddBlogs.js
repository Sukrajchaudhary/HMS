import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateBlogAsync, Blogs } from "../adminSlice";
import toast from "react-hot-toast";

const AddBlogs = () => {
  const dispatch = useDispatch();
  const Blog = useSelector(Blogs);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState(null);
  const handelFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handletitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handeldescriptionChnage = (e) => {
    setdescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    dispatch(CreateBlogAsync(formData));
  };

  useEffect(() => {
    if (Blog) {
      toast.success(Blog?.message);
    }
  }, [Blog]);
  return (
    <div>
      <>
        {/* component */}
        <div className="flex items-center justify-center ">
          <div className="mx-auto w-full  bg-blue">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="py-6 px-9"
              enctype="multipart/form-data"
            >
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Enter Your Title:
                </label>
                <input
                  onChange={handletitleChange}
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                  Upload File/Image
                </label>
                <div className="mb-8">
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <input
                      type="file"
                      className="outline-none h-[200px] "
                      onChange={handelFileChange}
                    />
                    {/* <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div> */}
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="descriptions"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Enter Descriptions:
                </label>
                <textarea
                  onChange={handeldescriptionChnage}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter descriptions..........."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button
                  disabled={
                    title === null || description === null || image === null
                  }
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  POST BLOG
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddBlogs;
