import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Privacypolicy from './pages/PrivacyPolicy.jsx';
import Suggestions from './pages/Suggestions.jsx';
import ScanResult from './pages/ScanResult.jsx';
import UserOutput from './Components/Customeroutput/UserOutput/UserOutput.jsx';
import CoverLetter from './Components/CoverLetterComponent/CoverLetterComponent.jsx';
import ResumeTips from './pages/Sources/ResumeTips/ResumeTips.jsx';
import Questions from './pages/Sources/Questions/Questions.jsx';
import Ebooks from './pages/Sources/Ebooks/Ebooks.jsx';
import AtsInsight from './pages/Sources/AtsInsight/AtsInsight.jsx';
import HowtoGuide from './pages/Sources/HowtoGuide/HowtoGuide.jsx';
import { Provider } from 'react-redux';  // Import Provider
import Store from './store/store';  // Import the store
import Pricing from "./../src/Components/pricing/pricing.jsx";
import PaymentPage from "./../src/Components/pricing/PaymentPage.jsx";


//Seo articles
import ATSResumeArticle from './pages/Sources/WhatisanATS-1/WhatisanATS-1.jsx';
import TopResumeToolsArticle from './pages/Sources/TopResumeToolsArticle-2/TopResumeToolsArticle-2.jsx';
import ResumeRejectionArticle from './pages/Sources/ResumeRejectionArticle-3/ResumeRejectionArticle.jsx';
import TailorResumeArticle from './pages/Sources/TailorResumeArticle-4/TailorResumeArticle.jsx';
import BestATSFormatsArticle from './pages/Sources/BestATSFormatsArticle-5/BestATSFormatsArticle.jsx';
import CoverLetterArticle from './pages/Sources/CoverLetterAIArticle-6/CoverLetterAIArticle.jsx';
import ResumeCheckerComparison from './pages/Sources/ResumeCheckerComparisonArticle-7/ResumeCheckerComparisonArticle.jsx';
import ImproveATSScoreArticle from './pages/Sources/ImproveATSScoreArticle-8/ImproveATSScoreArticle.jsx';

//services
import LinkedinScore from './pages/Services/LinkedinScore/LinkedinScore.jsx';


// Set up your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/scanresult",
    element: <ScanResult />,
  },
  {
    path: "/user-output",
    element: <UserOutput />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/cover-letter",
    element: <CoverLetter />,
  },
  {
    path: "/privacy-policy",
    element: <Privacypolicy />,
  },
  {
    path: "/suggestions",
    element: <Suggestions />,
  },
  {
    path: "/resume-tips",
    element: <ResumeTips />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/ebooks",
    element: <Ebooks />,
  },
  {
    path: "/ats-insight",
    element: <AtsInsight />,
  },
  {
    path: "/how-to-guide",
    element: <HowtoGuide />,
  },
  {
    path: "/linkedin-optimization",
    element: <LinkedinScore />,
  },
  {
    path: "/what-is-an-ats-and-how-to-beat-it-in-2025",
    element: <ATSResumeArticle />,
  },
  {
    path: "/best-free-resume-tools-to-use-before-applying-jobs-in-2025",
    element: <TopResumeToolsArticle />,
  },
  {
    path: "/why-your-resume-keeps-getting-rejected-and-how-to-fix-it",
    element: <ResumeRejectionArticle />,
  },
  {
    path: "/how-to-tailor-your-resume-to-a-job-description-step-by-step",
    element: <TailorResumeArticle />,
  },
  {
    path: "/best-resume-formats-that-work-with-ats-systems",
    element: <BestATSFormatsArticle />,
  },
  {
    path: "/how-to-write-a-cover-letter-in-2025-using-ai",
    element: <CoverLetterArticle />,
  },
  {
    path: "/free-resume-checker-vs-paid-tools-which-one-should-you-use-in-2025",
    element: <ResumeCheckerComparison />,
  },
  {
    path: "/how-to-improve-your-resume-ats-score-in-10-minutes-in-2025",
    element: <ImproveATSScoreArticle />,
  },
]);

// Wrap the RouterProvider with the Provider to make Redux store available
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>  {/* Wrap RouterProvider with Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
