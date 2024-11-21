"use client";
import {
  useGetUserQuery,
  useUpdateUserRoleMutation,
} from "@/Redux/Features/auth/Auth-api-slice";
import Loading from "@/app/loading";
import cToastify from "@/shared/Toastify/Toadtify";
import CButton from "@/utils/CButton/CButton";
import CCard from "@/utils/CCard/CCard";
import CSkeleton from "@/utils/CSkelleton/CSkelleton";
import { errorAlert } from "@/utils/alert-function";
import React, { useEffect } from "react";

const UsersList = () => {
  const { isLoading, data, error, refetch } = useGetUserQuery({});
  const [
    updateUserRole,
    {
      isLoading: roleUpdateLoading,
      isSuccess: roleUpdateSuccess,
      data: rollUpdateData,
      isError: rollUpdateIsError,
      error: rollUpdateError,
    },
  ] = useUpdateUserRoleMutation();

    //showing success message
    useEffect(() => {
      if (roleUpdateSuccess) {
        cToastify({
          type: "success",
          message: "User Role Updated Successful",
        });
        refetch();
      }
    }, [roleUpdateSuccess, refetch]);
  
    //showing error message
    useEffect(() => {
      if (rollUpdateIsError) {
        cToastify({
          type: "warn",
          message: rollUpdateError?.data?.message,
        });
      }
    }, [rollUpdateIsError, rollUpdateError]);

  const handleUserRole =async (role: string, id: string) => {
    const updatedData={
      id,
      info:{
        updatedRole: role
      }
    }
    try {
      await updateUserRole(updatedData)?.unwrap();
    } catch (err: any) {
      errorAlert({
        text: err?.data?.error || "Something Went wrong",
      });
    }
  };

  return (
    <main>
      <CCard title="Users OF ESTRELLA">
        {isLoading && <CSkeleton />}
        {data?.result && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                    User Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.result.map((user: any, index: number) => (
                  <tr
                    key={user._id}
                    className={index % 2 !== 0 ? "bg-gray-100" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0{user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-4">
                      {user.role === "CUSTOMER" && (
                        <CButton
                          variant="solid"
                          className=" text-black"
                          onClick={() => handleUserRole("ADMIN", user._id)}
                        >
                          Make Admin
                        </CButton>
                      )}
                      {user.role === "ADMIN" && (
                        <CButton
                          variant="solid"
                          className="bg-indigo-600 text-white"
                          onClick={() => handleUserRole("CUSTOMER", user._id)}
                        >
                          Make Customer
                        </CButton>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CCard>
    </main>
  );
};

export default UsersList;
