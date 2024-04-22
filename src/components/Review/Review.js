"use client";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "./review.css";
const Review = () => {
  const [reviewData, setReviewData] = useState({
    opinion: true,
    praise: [],
    safetyRating: 0,
    communicationRating: 0,
    overallExperience:""
  });
  const PraiseData = [
    "Adventurous",
    "Clean",
    "Good listener",
    "Honest",
    "Humorous",
    "Inspiring",
    "Kind",
    "Knowledgable",
    "Spontaneous",
    "Trustworthy",
    "Non-judgemental",
    "Talkative",
    "Thoughtful",
  ];

  const updatePraise = (praiseText) => {
    if (reviewData.praise.includes(praiseText)) {
      let temp = reviewData.praise.filter((e) => e !== praiseText);
      setReviewData({...reviewData,praise:temp});
    } else {
      setReviewData({...reviewData,praise:[...reviewData.praise, praiseText]});
    }
  };

  return (
    <div id="Review">
      <IoClose id="closeBtn" />
      <h1>Leave a Review</h1>
      <div id="collection">
        <h2>Safety</h2>
        <p>How safe did you feel With Trausti?</p>
        <ReactStars
          count={5}
          onChange={(rating) =>
            setReviewData({ ...reviewData, safetyRating: rating })
          }
          size={60}
          value={reviewData.safetyRating}
          className="ratingStar"
          color2={"#ffc94d"}
        />
      </div>
      <div id="collection">
        <h2>Communication</h2>
        <p>How easy was to communicate With Trausti?</p>
        <ReactStars
          count={5}
          onChange={(rating) =>
            setReviewData({ ...reviewData, communicationRating: rating })
          }
          size={60}
          value={reviewData.communicationRating}
          className="ratingStar"
          color2={"#ffc94d"}
        />
      </div>
      <div id="collection">
        <h2>Would you recommend Trausti?</h2>
        <p>Your opinion won't be posted publicly.</p>
        <div className="opinion">
          <div
            id={reviewData.opinion ? "" : "opinionActive"}
            onClick={() => setReviewData({...reviewData,opinion:false})}
            >
            <FaThumbsDown />
            <h3>No</h3>
            </div>
            <div
            id={reviewData.opinion ? "opinionActive" : ""}
            onClick={() => setReviewData({...reviewData,opinion:true})}
          >
            <FaThumbsUp />
            <h3>Yes</h3>
          </div>
        </div>
      </div>
      <div id="collection">
        <h2>Praise</h2>
        <p>What traits best describe Trausti?</p>
        <div className="PraiseBtns">
          {PraiseData.map((curr, id) => {
            return (
              <button
                key={id}
                id="PraiseBtn"
                className={reviewData.praise.includes(curr) ? "PraiseBtnActive" : ""}
                onClick={() => updatePraise(curr)}
              >
                {curr}
              </button>
            );
          })}
        </div>
      </div>
      <div id="collection">
        <h2>Care to share more?</h2>
        <p>
          How was your overall experience? What's that one thing you won't
          forget Traustl for?
        </p>
        <textarea placeholder="Come on, you know the drill." onChange={(e)=>setReviewData({...reviewData,overallExperience:e.target.value})} value={reviewData.overallExperience}></textarea>
      </div>
      <button id="submitBtn" onClick={()=> console.log(reviewData)}>PUBLISH REVIEW</button>
    </div>
  );
};

export default Review;
