import React, { createContext, useState } from "react";

export const BookIdResponseContext = createContext();
export const AddBookResponseContext = createContext();
export const AddReviewResponseContext = createContext();

function ContextShare({ children }) {
  const [BookIdResponse, setbookIdResponse] = useState("");
  const [AddBookResponse, setAddBookResponse] = useState("");
  const [AddReviewResponse, setAddReviewResponse] = useState("");
  return (
    <>
      <AddReviewResponseContext.Provider
        value={{ AddReviewResponse, setAddReviewResponse }}
      >
        <AddBookResponseContext.Provider
          value={{ AddBookResponse, setAddBookResponse }}
        >
          <BookIdResponseContext.Provider
            value={{ BookIdResponse, setbookIdResponse }}
          >
            {children}
          </BookIdResponseContext.Provider>
        </AddBookResponseContext.Provider>
      </AddReviewResponseContext.Provider>
    </>
  );
}

export default ContextShare;
