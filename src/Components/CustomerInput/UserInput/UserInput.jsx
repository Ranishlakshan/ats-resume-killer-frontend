import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResumeFile, setJobDescription, setScanResult } from "../../../store/slices/userInputSlice";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";  
import "./UserInput.css";

// Firebase Auth Imports
import { auth, provider } from "../../../firebase"; // Adjust path as needed
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const UserInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const { resumeFileName, jobDescription } = useSelector((state) => state.userInput);
  const [resumeFile, setResumeFileState] = useState(null);
  const [loading, setLoading] = useState(false);  
  const [progress, setProgress] = useState(0);  
  const [loadingMessage, setLoadingMessage] = useState("Uploading resume...");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResumeFileState(file);
      dispatch(setResumeFile(file.name));
    } else {
      alert("Please upload a PDF file.");
    }
  };

  // Check sign-in status and handle login if not signed in
  const ensureGoogleSignIn = async () => {
    if (auth.currentUser) {
      return true; // Already signed in
    }
    try {
      await signInWithPopup(auth, provider);
      return true;
    } catch (error) {
      alert("Google Sign-In was cancelled or failed. Please try again.");
      return false;
    }
  };

  const handleScan = async () => {
  // 1. Validate input fields
  if (!resumeFile) {
    alert("Please upload a resume.");
    return;
  }
  if (!jobDescription || jobDescription.trim() === "") {
    alert("Please enter a job description.");
    return;
  }

  // 2. Ensure Google Sign-In
  const signedIn = await ensureGoogleSignIn();
  if (!signedIn) return;

  // 3. Continue with scan logic after ensuring sign-in
  setLoading(true);
  setProgress(0); // <-- reset progress at start
  let progressValue = 0;

  // Simulate progress bar
  const interval = setInterval(() => {
    progressValue += 10;
    setProgress(progressValue);

    if (progressValue < 50) {
      setLoadingMessage("Uploading resume...");
    } else if (progressValue < 80) {
      setLoadingMessage("Analyzing and making results...");
    } else {
      setLoadingMessage("Finalizing...");
    }

    if (progressValue >= 100) {
      clearInterval(interval);
    }
  }, 500);

  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jobDescription", jobDescription);

  try {
    // Await the backend API call
    const response = await axios.post("http://localhost:8080/api/scan", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Wait until progress bar hits 100% before routing
    const waitForProgress = () =>
      new Promise((resolve) => {
        if (progressValue >= 100) {
          resolve();
        } else {
          const check = setInterval(() => {
            if (progressValue >= 100) {
              clearInterval(check);
              resolve();
            }
          }, 100);
        }
      });

    await waitForProgress();

    if (response.status === 200) {
      dispatch(setScanResult(response.data));
      setLoading(false);
      navigate("/user-output");
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    setLoading(false);
  }
};


  return (
    <div className="user-input-container" id="resume-scan-section">
      <img
        src="/process.png"
        alt="Process steps"
        className="process-image"
        style={{
          display: "block",
          margin: "0 auto 24px auto",
          maxWidth: "850px",
          width: "100%",
          height: "auto"
        }}
      />
      <div className="input-sections">
        <div className="input-box">
          <h3>Resume (PDF)</h3>
          <div className="file-input-wrapper">
            <input type="file" accept=".pdf" onChange={handleFileChange} disabled={loading} />
            {resumeFileName && <p>{resumeFileName}</p>}
          </div>
        </div>

        <div className="input-box">
          <h3>Job Description</h3>
          <textarea
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => dispatch(setJobDescription(e.target.value))}
            disabled={loading}
          />
        </div>
      </div>

      <div className="bottom-section">
        <div className="bottom-section">
          <button className="scan-button" onClick={handleScan} disabled={loading}>
            {loading ? "Scanning..." : "Scan"}
          </button>
        </div>
      </div>

      {/* Only show the progress bar pop-up during loading */}
      {loading && (
        <div className="loading-popup">
          <div className="loading-container">
            <p>{loadingMessage}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInput;
