import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookIdResponseContext } from "../ContextAPI/ContextShare";

function CardsRow({ book }) {
  // console.log(book);
  const { BookIdResponse, setbookIdResponse } = useContext(BookIdResponseContext);
  const navigate = useNavigate()
  const handleCard = () =>{
    setbookIdResponse(book._id)
    navigate(`/bookdetails/${book._id}`)
  }
  return (
    <>
      <button className="btn-block text-left" onClick={handleCard}>
        <div>
          <div className="bg-white md:p-5 p-2.5 flex justify-around items-center md:mx-25 mx-2.5 mt-2 rounded-2xl hover:scale-105">
            <div className="w-full flex justify-center">
              <img
                src={`${book.image}`}
                className="md:w-40 w-20 md:h-50 h-25 border-1"
                alt=""
              />
            </div>
            <div className="w-full md:text-lg">
              <h1>Id </h1>
              <h2>Title </h2>
              <h3>Author </h3>
              <h4>Description </h4>
            </div>
            <div className="w-full md:text-lg">
              <h1>: {book.bookid}</h1>
              <h2>: {book.title.slice(0,20)}...</h2>
              <h3>: {book.author.slice(0,20)}...</h3>
              <h4>: {book.description.slice(0,20)}...</h4>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default CardsRow;
