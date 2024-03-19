import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import { FaGreaterThan } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];
  return (
    <div>
      <div>
        <div style={{display:'flex', color:'red', alignItems: 'center'}}>
          <h3 style={{paddingRight:'10px', paddingLeft:'10px'}}><HiMiniBars3 /></h3>
          <h3> {course?.name}</h3>
          <FaGreaterThan className='fs-5' style={{color:'grey'}}/>
          <h3 style={{color:'black'}}>{lastPart}</h3>
        </div>
        <hr/>
      </div>
      <div className='d-flex'>
        <CourseNavigation />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
      </div>

    </div>
  );
}
export default Courses;