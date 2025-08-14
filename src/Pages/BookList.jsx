import React from "react";
import AddNewBook from "../Components/AddNewBook";
import ViewBook from "../Components/ViewBook";

function BookList() {
  const user = localStorage.getItem("username")
  // console.log(user);
  const token = localStorage.getItem("token")
  
  return (
    <>
      <div>
        <div className=" flex justify-between m-5">
          {token&&<AddNewBook />}
          <h1 className="m-2 md:text-2xl text-lg">
            Wellcome{" "}
            <span className=" text-red-600">
              <i class="fa-regular fa-user fa-xl"></i> {user?`${user}`:"User"}
            </span>{" "}
          </h1>
        </div>
        <div>
          <ViewBook/>
        </div>
      </div>
    </>
  );
}

export default BookList;
