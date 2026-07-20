import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext'
import AppLayout from './layouts/AppLayout'
import StudentLayout from './layouts/StudentLayout'
import PageWrapper from './components/PageWrapper'
import Spinner from './components/Spinner'

const Home = lazy(() => import('./pages/Home'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetails = lazy(() => import('./pages/CourseDetails'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Pricing = lazy(() => import('./pages/Pricing'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Instructors = lazy(() => import('./pages/Instructors'))
const InstructorDetails = lazy(() => import('./pages/InstructorDetails'))
const Categories = lazy(() => import('./pages/Categories'))
const Programs = lazy(() => import('./pages/Programs'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const NotFound = lazy(() => import('./pages/NotFound'))
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'))
const MyLearning = lazy(() => import('./pages/MyLearning'))
const Bookmarks = lazy(() => import('./pages/Bookmarks'))
const Certificates = lazy(() => import('./pages/Certificates'))
const LessonPlayer = lazy(() => import('./pages/LessonPlayer'))

const renderPage = (Component) => (
  <PageWrapper>
    <Component />
  </PageWrapper>
)

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-dark text-text">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={renderPage(Home)} />
              <Route path="courses" element={renderPage(Courses)} />
              <Route path="courses/:courseId" element={renderPage(CourseDetails)} />
              <Route path="about" element={renderPage(About)} />
              <Route path="contact" element={renderPage(Contact)} />
              <Route path="pricing" element={renderPage(Pricing)} />
              <Route path="faq" element={renderPage(FAQ)} />
              <Route path="programs" element={renderPage(Programs)} />
              <Route path="instructors" element={renderPage(Instructors)} />
              <Route path="instructors/:instructorId" element={renderPage(InstructorDetails)} />
              <Route path="categories" element={renderPage(Categories)} />
              <Route path="login" element={renderPage(Login)} />
              <Route path="register" element={renderPage(Register)} />
              <Route path="forgot-password" element={renderPage(ForgotPassword)} />
              <Route path="reset-password" element={renderPage(ResetPassword)} />
              <Route path="*" element={renderPage(NotFound)} />
            </Route>

            <Route path="/student" element={<StudentLayout />}>
              <Route index element={renderPage(StudentDashboard)} />
              <Route path="dashboard" element={renderPage(StudentDashboard)} />
              <Route path="my-learning" element={renderPage(MyLearning)} />
              <Route path="bookmarks" element={renderPage(Bookmarks)} />
              <Route path="certificates" element={renderPage(Certificates)} />
              <Route path="lesson-player" element={renderPage(LessonPlayer)} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
