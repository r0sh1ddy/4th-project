import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitFeedback();
  };

      const submitFeedback= async (event)=>{
        try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });
    
      
      if (response.ok) {
        setSubmitted(true);
        // You can reset the form here if needed
        // setFeedback("");
      } else {
        console.error("Error submitting feedback:", response.statusText);
        // Handle error states if needed
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Handle error states if needed
    }
      }

  const handleTextareaKeyPress = (event)=>{
    if (event.key=== "Enter"&& !event.shiftKey) {
      event.preventDefault();
      submitFeedback();
    }
  };

  return (
    <div style={{ fontSize: '25px' }} >
      <Sidebar /> 
      <Topbar />
      <div className="page-wrapper ">clearclear
        <div className="page-content ">
          <h4 className="mb-0 text-uppercase">
            Your feedback will be highly appreciated
          </h4>
          {submitted ? (
            <p>Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <textarea
                  id="mytextarea"
                  name="mytextarea"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  style={{ marginRight: "1rem", flex: "1" }}
                >
                  Write Feedback Here
                </textarea>
                {/* Add a submit button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: "none",fontSize:'25px' }}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
