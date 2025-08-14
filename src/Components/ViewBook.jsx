import React, { useContext, useEffect, useState } from "react";
import CardsRow from "./CardsRow";
import CardsCol from "./CardsCol";
import { getAllBookAPI } from "../Services/Allapi";
import { AddBookResponseContext } from "../ContextAPI/ContextShare";

function ViewBook() {
  const [rowCol, setRowCol] = useState(true);
  const [ books, setBooks ] = useState([]);
  const { AddBookResponse, setAddBookResponse } = useContext(AddBookResponseContext)
  // console.log(books);
  
  const handleRowCol = () => {
    if (rowCol == true) {
      setRowCol(false);
    } else {
      setRowCol(true);
    }
  };

  const getAllBooks = async() => {
    const result = await getAllBookAPI()
    // console.log(result);
    if(result.status == 200){
      setBooks(result.data)
    }else{
      console.log(result.response.data);
    }
  }

  useEffect(()=>{
    getAllBooks()
  },[AddBookResponse])

  return (
    <>
      <div className="bg-base-300 m-5 h-auto">
        <button
          onClick={handleRowCol}
          className="btn hover:bg-black hover:text-white m-5 btn-outline"
        >
          {rowCol ? (
            <i class="fa-solid fa-table fa-xl"></i>
          ) : (
            <i class="fa-solid fa-list fa-xl"></i>
          )}
        </button>
        {rowCol ? (
          <div className="p-5 flex flex-wrap">
            {books.length>0?books.map((book)=>(<CardsCol book={ book } />)):<p>No Book Added</p>}
          </div>
        ) : (
          <div className="p-5">
            {books.length>0?books.map((book)=>(<CardsRow book={ book } />)):<p>No Book Added</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default ViewBook;
