import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllusersAppoinmentsAsync,
  Allappoinments,
  Toatls,
  UpdateUserAppoinmentsAsync,
} from "../adminSlice";
const AllUsersAppoinment = () => {
  const [page, setpage] = useState(1);
  const Allappoinment = useSelector(Allappoinments);
  const totalAppoinments = useSelector(Toatls);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const totalpages = Math.ceil(totalAppoinments / 3);
  const dispatch = useDispatch();
  useEffect(() => {
    const pagination = { _page: page, _limit: 3 };
    dispatch(GetAllusersAppoinmentsAsync(pagination));
  }, [dispatch, page, editableOrderId]);
  const handlePage = (page) => {
    setpage(page);
  };
  const handleEdit = (appoinment) => {
    setEditableOrderId(appoinment._id);
  };

  const handleUpdate = (e, appoinment) => {
    const update = { ...appoinment, status: e.target.value };
    dispatch(UpdateUserAppoinmentsAsync(update));
    setEditableOrderId(-1);
  };
  const handleColor = (status) => {
    switch (status) {
      case "cancled":
        return "text-white bg-red";
      case "dispatch":
        return "bg-[#0866FF] text-white";
      case "pending":
        return "bg-[yellow] text-black";
      case "approved":
        return "bg-[green] text-white";
      default:
        return "";
    }
  };
  return (
    <div>
      <section className="mx-auto  py-4">
        <div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray">
                    <thead className="bg-[gray] w-full ">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          <span>S.N</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          <span>Doctors</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Patients
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Message
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Appoinment Created Time:
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-md text-gray-700 font-bold"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Allappoinment?.map((appoinment, index) => (
                        <tr>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 bg-[#545b54] text-blue">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={null}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {appoinment.doctorID?.username}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {appoinment.doctorID?.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4 bg-[#b9d387]">
                            <div className="text-lg text-gray-900 text-blue font-medium ">
                              {appoinment.userID?.username}
                            </div>
                            <div className="text-sm text-gray-900 ">
                              {appoinment.userID?.email}
                            </div>
                            <div className="text-sm text-gray-900 ">
                              {appoinment.userID?.phone}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {appoinment?.message}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            {/*  */}
                            <td className="py-3 px-6 text-center">
                              {appoinment._id == editableOrderId ? (
                                <select
                                  onChange={(e) => handleUpdate(e, appoinment)}
                                >
                                  <option value="pending">Pending</option>
                                  <option value="dispatch">Dispatch</option>
                                  <option value="cancled">Cancled</option>
                                  <option value="approved">Approved</option>
                                </select>
                              ) : (
                                <span
                                  className={` items-center rounded-full flex justify-center ${handleColor(
                                    appoinment.status
                                  )} px-2 text-sm font-semibold `}
                                >
                                  {appoinment.status}
                                </span>
                              )}
                            </td>
                          </td>

                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {appoinment.createdAt
                              ? new Date(
                                  appoinment.createdAt
                                ).toLocaleTimeString()
                              : null}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {appoinment.appointmentDate}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {appoinment.role}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            <span
                              className="cursor-pointer"
                              onClick={() => handleEdit(appoinment)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-center pt-6 ">
            <div className="fixed bottom-2 flex">
              <div
                onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
                className="mx-1 flex relative text-white cursor-pointer bg-blue items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                <span className="hidden lg:block">&larr; Previous</span>
                <span className="block lg:hidden">&larr;</span>
              </div>
              {[...Array(totalpages)].map((_, index) => (
                <p
                  onClick={(e) => handlePage(index + 1)}
                  className={`${
                    index + 1 == page ? "bg-blue text-white" : ""
                  } cursor-pointer mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105`}
                >
                  {index + 1}
                </p>
              ))}
              <div>
                <button
                  disabled={page + 4 >= totalAppoinments}
                  onClick={(e) =>
                    handlePage(page < totalAppoinments ? page + 1 : page)
                  }
                  className={`mx-1 ${
                    page + 4 >= totalAppoinments
                      ? " bg-red cursor-not-allowed"
                      : ""
                  } relative flex cursor-pointer items-center rounded-md border border-gray-400 px-3 py-1 text-white bg-blue hover:scale-105`}
                >
                  <span className="hidden lg:block">Next &rarr;</span>
                  <span className="block lg:hidden">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsersAppoinment;
