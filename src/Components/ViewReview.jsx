import React, { useContext, useEffect, useState } from "react";
import AddReview from "./AddReview";
import { getReviewAPI } from "../Services/allAPI";
import {
  AddReviewResponseContext,
  BookIdResponseContext,
} from "../ContextAPI/ContextShare";

function ViewReview() {
  const token = localStorage.getItem("token");
  const [review, setReview] = useState([]);

  // console.log(review);
  const { BookIdResponse, setbookIdResponse } = useContext(
    BookIdResponseContext
  );
  const { AddReviewResponse, setAddReviewResponse } = useContext(
    AddReviewResponseContext
  );

  const getBookById = async () => {
    const result = await getReviewAPI(BookIdResponse);
    console.log(result);
    if (result.status == 200) {
      setReview(result.data.reviews);
    } else {
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    getBookById();
  }, [AddReviewResponse]);

  return (
    <>
      <div>
        <div className="md:m-5 m-2.5 bg-gray-300 md:p-5 p-2">
          {token && <AddReview />}
          <div>
            {review.length > 0 ? (
              review.map((data) => (
                <div className=" bg-white md:my-5 my-2.5 p-2">
                  <h3 className="text-red-400">
                    <i className="fa-regular fa-circle-user fa-lg m-1"></i>
                    {data.username}
                  </h3>
                  <div className=" mt-5 flex text-yellow-300">
                    {[...Array(data.rating)].map((i) => (
                      <i className="fa-solid fa-star fa-sm sm:fa-xl"></i>
                    ))}
                  </div>
                  <p className="my-2">Review:{data.review}</p>
                  <div className="text-xs text-blue-700 flex justify-between flex-wrap">
                    <p>date : {data.updatedAt.slice(0, 10)}</p>
                    <p>time : {data.updatedAt.slice(11, 16)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-red-600">No review yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewReview;
