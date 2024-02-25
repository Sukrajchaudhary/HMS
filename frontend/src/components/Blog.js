import React from "react";
import { useSelector } from "react-redux";
import { blog } from "../features/Userdashboard copy/adminSlice";
export default function Blog() {
  const AllBlogs = useSelector(blog);
  return (
    <div className="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 lg:px-8 ">
    <div className="flex flex-col justify-center items-center">
            <p className="text-blue font-bold text-sm">OUR Recent</p>
            <p className="font-medium text-4xl text-[#000000CC]">
              Blogs
            </p>
          </div>
      <div className="grid md:grid-cols-4  gap-7 mt-4">

        {
          AllBlogs?.map((blog)=>(<article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={blog.image}
            className="absolute inset-0 h-full w-full object-cover filter brightness-50"
          />
        
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-sm text-white/90"> {blog.createdAt?new Date(blog.createdAt).toLocaleTimeString():''}</time>
        
              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">{blog.title}</h3>
              </a>
        
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
               {blog.descriptions}
              </p>
            </div>
          </div>
        </article>))
        }
      {/* {AllBlogs?.map((blog, index) => (
        <div className=" w-[300px] rounded-md border" key={blog._id}>
          <img
            src={blog.image}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
             {blog.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {blog.descriptions}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-[green] px-3 py-1 text-[12px] font-semibold text-white">
               {blog.createdAt? new Date(blog.createdAt).toLocaleTimeString():''}
              </span>
             
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-[black] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>
      ))} */}
      </div>
    </div>
  );
}
