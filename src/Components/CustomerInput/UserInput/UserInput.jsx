import React, { useState , useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResumeFile, setJobDescription, setScanResult } from "../../../store/slices/userInputSlice";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";  
import "./UserInput.css";

// Firebase Auth Imports
import { auth, provider,firestore  } from "../../../firebase"; // Adjust path as needed
import { signInWithPopup , onAuthStateChanged  } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const UserInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const { resumeFileName, jobDescription } = useSelector((state) => state.userInput);
  const [resumeFile, setResumeFileState] = useState(null);
  const [loading, setLoading] = useState(false);  
  const [progress, setProgress] = useState(0);  
  const [loadingMessage, setLoadingMessage] = useState("Uploading resume...");

  //check user available scans
  const [userSubscription, setUserSubscription] = useState(null);
  const [freeScanCount, setFreeScanCount] = useState(null);

    useEffect(() => {
    const fetchUserInfo = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(firestore, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserSubscription(data.subscription || "free");
          setFreeScanCount(data.resumeScan ?? null);
        }
      }
    };
  
    // Listen for auth state change, then fetch info
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo();
      } else {
        setUserSubscription(null);
        setFreeScanCount(null);
      }
    });
  
    return () => unsubscribe();
  }, []);

  //end of user free scans


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
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Reference to user doc
    const userDocRef = doc(firestore, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    // Only add details if this is a first-time sign-in (doc does not exist)
    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        email: user.email,
        subscription: "free",
        updatedAt: new Date().toISOString(),
        resumeScan: 3,
        coverLetterScan: 3,
      });
    }
    return true;
  } catch (error) {
    console.error("Google Auth error:", error);
  alert("Google Sign-In error: " + error.message);
  return false;
  }
};

  //handlescan

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

  // --- 3. If free user, check and update scan count ---
  if (userSubscription === "free") {
    if (freeScanCount === 0) {
      alert("You have used all your free scans.");
      return;
    }

    // Decrement in Firestore (but never below 0)
    const userDocRef = doc(firestore, "users", auth.currentUser.uid);
    const newCount = Math.max(freeScanCount - 1, 0);

    try {
      await updateDoc(userDocRef, { resumeScan: newCount });
      setFreeScanCount(newCount); // update UI immediately
    } catch (e) {
      alert("Failed to update your scan count. Please try again.");
      return;
    }
  }

  // 4. Continue with scan logic after ensuring sign-in
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
    const response = await axios.post("https://api.brewmyjob.com/api/scan", formData, {
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


  //


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
          width: "90%",
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
        {/* LEFT side: Free scan count message */}
        {userSubscription === "free" && freeScanCount !== null ? (
          <div className="free-scans-info" style={{ fontWeight: 500 }}>
            Free available Scans: {freeScanCount}
          </div>
        ) : <div></div>}

        {/* RIGHT side: Scan button */}
        <button
          className="scan-button"
          onClick={handleScan}
          disabled={loading || (userSubscription === "free" && freeScanCount === 0)}
        >
          {loading ? "Scanning..." : "Scan"}
        </button>
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
