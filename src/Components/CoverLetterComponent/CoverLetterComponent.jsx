import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCoverLetterFileName,
  setCoverLetterJobDescription,
  setCoverLetterResult,
  setCoverLetterLoading,
  resetCoverLetterFields,
} from "../../store/slices/userInputSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent"; // <-- Import HeaderContent
import "./CoverLetterComponent.css";
import axios from "axios";
import Footer from "../Footer/Footer";

function CoverLetterComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // redirect to home, login, or wherever you want
  };

  const [copied, setCopied] = useState(false);

  const handleCopyCoverLetter = () => {
    if (coverLetterResult) {
      navigator.clipboard.writeText(coverLetterResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const {
    coverLetterFileName,
    coverLetterJobDescription,
    coverLetterResult,
    coverLetterLoading,
  } = useSelector((state) => state.userInput);

  const [resumeFile, setResumeFileState] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");

  React.useEffect(() => {
    dispatch(resetCoverLetterFields());
    // eslint-disable-next-line
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResumeFileState(file);
      dispatch(setCoverLetterFileName(file.name));
    } else {
      alert("Please upload a PDF file.");
      setResumeFileState(null);
      dispatch(setCoverLetterFileName(""));
    }
  };

  const handleScan = async () => {
    if (!resumeFile) {
      alert("Please upload a resume.");
      return;
    }
    if (!coverLetterJobDescription || coverLetterJobDescription.trim() === "") {
      alert("Please enter a job description.");
      return;
    }

    dispatch(setCoverLetterLoading(true));
    setLoadingMessage("Uploading resume...");
    setProgress(10);

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jobDescription", coverLetterJobDescription);

    // Simulate progress bar
    let progressValue = 10;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);
      if (progressValue < 50) setLoadingMessage("Uploading resume...");
      else if (progressValue < 80) setLoadingMessage("Generating cover letter...");
      else setLoadingMessage("Finalizing...");
      if (progressValue >= 100) clearInterval(interval);
    }, 500);

    try {
      const response = await axios.post("http://localhost:8080/api/generate-cover-letter", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Wait until progress bar hits 100%
      const waitForProgress = () =>
        new Promise((resolve) => {
          if (progressValue >= 100) resolve();
          else {
            const check = setInterval(() => {
              if (progressValue >= 100) {
                clearInterval(check);
                resolve();
              }
            }, 100);
          }
        });
      await waitForProgress();

      if (response.status === 200 && response.data.coverLetter) {
        dispatch(setCoverLetterResult(response.data.coverLetter));
      } else {
        dispatch(setCoverLetterResult("Error: Could not generate cover letter."));
      }
    } catch (err) {
      dispatch(setCoverLetterResult("Error generating cover letter. Please try again."));
      console.error(err);
    }
    dispatch(setCoverLetterLoading(false));
    setLoadingMessage("");
  };

  return (
    <div>
      {/* Header always on top */}
      <HeaderContent /> {/* <--- Add this line at the top */}
      <div className="coverletter-page-flex">
        <Sidebar />
        <div className="user-output-content">

          <div className="coverletter-hero-flex">
      <div className="coverletter-hero-text">
        <h1>Generate the Perfect Cover Letter</h1>
        <p>
          Instantly create a cover letter tailored to any job. <br />
          Just upload your resume and the job description—let AI do the rest!
        </p>
        <button
          className="hero-btn"
          onClick={() => {
    const target = document.getElementById("cover-letter-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}
        >
          Get Started
        </button>
      </div>
      <div className="coverletter-hero-image">
        <img
          src="/cover-letter-2.png"
          alt="Cover letter illustration"
        />
      </div>
    </div>

        
          {/* <div
            className="output-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ margin: 0 }}>
              Upload your resume and job description to generate a Cover Letter
            </h2>
            <button onClick={handleLogout} className="logout-btn">
              Log out
            </button>
          </div> */}

          <div className="user-input-container" id="cover-letter-section">
            <h2 className="new-scan">New Cover Letter</h2>
            <div className="input-sections">
              <div className="input-box">
                <h3>Resume (PDF)</h3>
                <input type="file" accept=".pdf" onChange={handleFileChange} disabled={coverLetterLoading} />
                {coverLetterFileName && <p>{coverLetterFileName}</p>}
              </div>
              <div className="input-box">
                <h3>Job Description</h3>
                <textarea
                  placeholder="Paste job description here..."
                  value={coverLetterJobDescription}
                  onChange={(e) => dispatch(setCoverLetterJobDescription(e.target.value))}
                  disabled={coverLetterLoading}
                />
              </div>
            </div>
            <div className="bottom-section">
              <button className="scan-button" onClick={handleScan} disabled={coverLetterLoading}>
                {coverLetterLoading ? "Generating..." : "Generate Cover Letter"}
              </button>
            </div>
            {coverLetterLoading && (
              <div className="loading-popup">
                <div className="loading-container">
                  <p>{loadingMessage}</p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Result Display */}
            {coverLetterResult && (
              <div className="cover-letter-result">
                <div className="cover-letter-header">
                  <h3 style={{ margin: 0 }}>Generated Cover Letter:</h3>
                  <button className="copy-btn" onClick={handleCopyCoverLetter}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre style={{ whiteSpace: 'pre-wrap' }}>{coverLetterResult}</pre>
              </div>
            )}
          </div>
          {/* <button onClick={() => navigate("/")}>Go Back</button> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CoverLetterComponent;
