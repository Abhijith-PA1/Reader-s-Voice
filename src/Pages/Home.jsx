import React, { useEffect, useState } from "react";
import { getHomeBookAPI } from "../Services/Allapi";

function Home() {
  const [bookimg, setBookimg] = useState([]);
  console.log(bookimg);
  
  const getHomeBooks = async () => {
    const result = await getHomeBookAPI();
    // console.log(result);
    if (result.status == 200) {
      setBookimg(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    getHomeBooks();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/book-review-reader-desk-rating-stars-novel-reviewer-s-illuminated-warm-light-lamp-waiting-assessment-words-177957568.jpg')",
          }}
          aria-label="Hero section with books background"
        >
          <h1 className="text-black opacity-50 text-5xl md:text-7xl md:hover:text-9xl hover:text-7xl font-bold bg-opacity-50 p-6 rounded">
            Reader’s Voice
          </h1>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto my-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">About This App</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Discover and share reviews of your favorite books. Connect with
            fellow readers, explore genres, and find your next great read with
            ease.
          </p>
        </section>

        {/* Marquee Section */}
        <section className="my-16 overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="10"
            className=""
          >
            <div className="w-full flex justify-between">
              {bookimg.length>0?bookimg.map((img)=>(<div className="w-fit">
                <img
                  src={`${img.image}`}
                  alt={""}
                  className="inline-block sm:w-32 w-22 sm:h-48 h-38 p-1 object-cover rounded-lg shadow-md mr-8"
                />
              </div>)):null}
            </div>
          </marquee>
        </section>
      </div>
    </>
  );
}

export default Home;
