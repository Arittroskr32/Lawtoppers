import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import CoursesLawAcademic from './pages/CoursesLawAcademic';
import CoursesBAR from './pages/CoursesBAR';
import CoursesBJS from './pages/CoursesBJS';
import ExamBatch from './pages/ExamBatch';
import JobPreparation from './pages/JobPreparation';
import QuestionBank from './pages/QuestionBank';
import VivaGuideline from './pages/VivaGuideline';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseDetails from './pages/CourseDetails';
import CoursePreview from './pages/CoursePreview';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/courses/law-academic" element={<CoursesLawAcademic />} />
        <Route path="/courses/bar" element={<CoursesBAR />} />
        <Route path="/courses/bjs" element={<CoursesBJS />} />
        <Route path="/exam-batch" element={<ExamBatch />} />
        <Route path="/job-preparation" element={<JobPreparation />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/viva-guideline" element={<VivaGuideline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course-details/:courseId" element={<CourseDetails />} />
        <Route path="/course/preview" element={<CoursePreview />} />
      </Routes>
    </BrowserRouter>;
}