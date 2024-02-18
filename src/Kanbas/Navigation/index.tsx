import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaTv, FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const iconStyle={ color: 'red' }
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={iconStyle}/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" style={iconStyle} />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
    { label: "Inbox",     icon: <FaInbox className="fs-2" style={iconStyle}/>          },
    { label: "History",     icon: <FaClock className="fs-2" style={iconStyle}/>          },
    { label: "Studio",     icon: <FaTv className="fs-2" style={iconStyle}/>          },
    { label: "Commons",     icon: <FaArrowCircleRight className="fs-2" style={iconStyle}/>          },
    { label: "Help",     icon: <FaQuestionCircle className="fs-2" style={iconStyle}/>          },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <a href="http://northeastern.edu">
          <img alt='' src="/images/n_logo.png" style={{width: '60px'}}/>
        </a>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;