import React, { useEffect } from "react";
import { getUserAppointmentsAsync, userAppoinment } from "../appoinmentSlice";
import { useDispatch, useSelector } from "react-redux";

const Appoinments = () => {
  const dispatch = useDispatch();
  const Appoinmnet = useSelector(userAppoinment);
  useEffect(() => {
    dispatch(getUserAppointmentsAsync());
  }, []);
  const handleChange = (status) => {
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
    <>
      <section className="mx-auto w-full max-w-7xl  py-4">
        {Appoinmnet.length > 0 ? (
          <div>
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto md:overflow-hidden sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[gray] ">
                        <tr>
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
                            Time
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
                            EDIT
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {Appoinmnet?.map((appoinment) => (
                          <tr key={appoinment._id}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={appoinment.image}
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
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900 ">
                                {appoinment.message}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span
                                className={`inline-flex rounded-full ${handleChange(
                                  appoinment.status
                                )}  px-2 text-xs font-semibold `}
                              >
                                {appoinment?.status}
                              </span>
                            </td>

                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              {appoinment?.appointmentTime}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              {appoinment?.appointmentDate}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              {appoinment?.role}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-6">
              <div className="mx-1 flex text-white bg-blue items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
                <span className="hidden lg:block">&larr; Previous</span>
                <span className="block lg:hidden">&larr;</span>
              </div>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                1
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                2
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                3
              </a>
              <a
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
              >
                4
              </a>
              <a className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-white bg-blue hover:scale-105">
                <span className="hidden lg:block">Next &rarr;</span>
                <span className="block lg:hidden">&rarr;</span>
              </a>
            </div>
          </div>
        ) : (
          <p>You have no Any Booked Appoinment yet</p>
        )}
      </section>
    </>
  );
};

export default Appoinments;
