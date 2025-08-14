import React, { useContext, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { addBookAPI } from "../Services/allAPI"
import { AddBookResponseContext } from "../ContextAPI/ContextShare";

function AddNewBook() {
  const [bookData, setBookData] = useState({
    bookid: "",
    title: "",
    author: "",
    description: "",
    image: "",
  });
  const { AddBookResponse, setAddBookResponse } = useContext(AddBookResponseContext)
  // console.log(bookData);

  const handleAdd = async() => {
    console.log(bookData);
    const { bookid, title, author, description, image } = bookData;
    if (!bookid || !title || !author || !description || !image) {
      toast.warning(" fill the missing fields")
    }else{
      try{
        const result = await addBookAPI(bookData);
        // console.log(result);
        if(result.status == 200){
           toast.success("Book added successfully")
           setBookData(result.data);
           setAddBookResponse(result.data);
           handleClose()
        } else {
          toast.warning(result.response.data);
          handleClose()
        }
      }catch(err){
        toast.error(err)
      }
    }
  };

  const handleClose = () => {
    setBookData({
      bookid: "",
      title: "",
      author: "",
      description: "",
      image: "",
    });
  };

  return (
    <>
      <div>
        <div className="flex">
          <h1 className="m-1 md:text-2xl text-lg">Add New Book</h1>
          <button
            className="btn btn-success"
            onClick={() =>
              document.getElementById("my_modal_addbook").showModal()
            }
          >
            <i class="fa-solid fa-plus fa-xl"></i>
          </button>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_addbook" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Add New Book</h3>
            <form>
              <input
                type="text"
                placeholder="Book Id"
                className="input input-success mt-10 btn-block"
                onChange={(e) =>
                  setBookData({ ...bookData, bookid: e.target.value })
                }
                value={bookData.bookid}
              />
              <input
                type="text"
                placeholder="Title"
                className="input input-success mt-5 btn-block"
                onChange={(e) =>
                  setBookData({ ...bookData, title: e.target.value })
                }
                value={bookData.title}
              />
              <input
                type="text"
                placeholder="Author"
                className="input input-success mt-5 btn-block"
                onChange={(e) =>
                  setBookData({ ...bookData, author: e.target.value })
                }
                value={bookData.author}
              />
              <textarea
                placeholder="Description"
                className="textarea textarea-success mt-5"
                onChange={(e) =>
                  setBookData({ ...bookData, description: e.target.value })
                }
                value={bookData.description}
              ></textarea>
              <input
                type="text"
                placeholder="Image"
                className="input input-success mt-5 btn-block"
                onChange={(e) =>
                  setBookData({ ...bookData, image: e.target.value })
                }
                value={bookData.image}
              />
              <img
                src={bookData.image}
                className="w-30 h-40 border-1 mt-3"
                alt=""
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

export default AddNewBook;
