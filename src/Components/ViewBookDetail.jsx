import React, { useContext, useEffect, useState } from "react";
import { getBookByIdAPI } from "../Services/allAPI";
import { BookIdResponseContext } from "../ContextAPI/ContextShare";

function ViewBookDetail() {
  const [book, setBook] = useState([]);
  const { BookIdResponse, setbookIdResponse } = useContext(
    BookIdResponseContext
  );
  // console.log(BookIdResponse);
  // console.log(book);

  const getBookById = async () => {
    const result = await getBookByIdAPI(BookIdResponse);
    // console.log(result);
    if (result.status == 200) {
      setBook(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    getBookById();
  }, []);
  return (
    <>
      <div>
        <div className="md:m-5 m-2.5 bg-base-300">
          <div className="w-full flex justify-center p-5 md:p-10">
            <img src={book.image} className="w-50 h-80" alt="" />
          </div>
          <div className="flex justify-center p-5 md:p-10 ">
            <div>
              <h1 className="md:text-3xl text-2xl text-center m-5">
                {book.title}
              </h1>
              <h2 className="md:text-2xl text-xl text-center m-2">{book.author}</h2>
              <p h2 className="md:text-xl text-lg text-justify">
                {book.description}
              </p>
              <p className="text-center text-red-600 m-4">{book.bookid}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBookDetail;
