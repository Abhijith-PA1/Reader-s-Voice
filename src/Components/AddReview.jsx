import React, { useContext, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { addReviewAPI } from "../Services/allAPI";
import { AddReviewResponseContext, BookIdResponseContext } from "../ContextAPI/ContextShare";

function AddReview() {
  const username = localStorage.getItem("username");
  const [reviewData, setReviewData] = useState({
    username,
    review: "",
    rating: "",
  });
  const { BookIdResponse, setbookIdResponse } = useContext(
    BookIdResponseContext
  );
  const { AddReviewResponse, setAddReviewResponse } = useContext(AddReviewResponseContext);

  // console.log(username);
  const handleAdd = async () => {
    // console.log(reviewData);
    const { review, rating, username } = reviewData;
    if (!review || !rating || !username) {
      toast.warning(" fill the missing fields");
    } else {
      try {
        const result = await addReviewAPI(BookIdResponse, reviewData);
        console.log(result);
        if (result.status == 200) {
          toast.success("Review added successfully");
          setReviewData(result.data);
          setAddReviewResponse(result.data);
          handleClose();
        } else {
          toast.warning(result.response.data);
          handleClose();
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };
  const handleClose = () => {
    setReviewData({ review: "", rating: "" });
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap">
          <h1 className="m-1 md:text-2xl text-lg">Add Review</h1>
          <button
            className="btn btn-success"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <i class="fa-solid fa-plus fa-xl"></i>
          </button>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Add Review</h3>
            <h3 className="text-red-400">
              <i className="fa-regular fa-circle-user fa-lg m-1"></i>
              {username}
            </h3>
            <form>
              <textarea
                placeholder="Review"
                className="textarea textarea-success mt-5 btn-block"
                onChange={(e) =>
                  setReviewData({ ...reviewData, review: e.target.value })
                }
                value={reviewData.review}
              ></textarea>
              <input
                type="number"
                placeholder="rating out of (0-5)"
                className="input input-success mt-5 btn-block"
                min={0}
                max={5}
                onChange={(e) =>
                  setReviewData({ ...reviewData, rating: e.target.value })
                }
                value={reviewData.rating}
              />
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn md:my-5 my-2" onClick={handleClose}>
                  Close
                </button>
                <button
                  className="btn md:m-5 m-2 btn-success"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default AddReview;
