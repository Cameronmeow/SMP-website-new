import React , {useState} from 'react';
import './announcements.css'; // Include the CSS file for styling
import newGif from "../../assets/img/new.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation , faXmark} from '@fortawesome/free-solid-svg-icons';

const Announcements = () => {

  const [openAnnouncements,setOpenAnnouncements] = useState(false);
  return (
    <>
    <div className='announcements' onClick={() => setOpenAnnouncements(!openAnnouncements)}> 
      <FontAwesomeIcon icon={faExclamation} size="xl"/></div>
    {openAnnouncements &&  
    <div className="announcement-container">
    <div id="side">
      <div id="news_section">
        <div className="news-header">
          <h4 className="text-left ">Announcements </h4>
          <FontAwesomeIcon  className='close-icon' icon={faXmark} size="xs" onClick={() => setOpenAnnouncements(false)}/>
        </div>
        <div className="news-content">
          <ul>
            <li className="link" style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>
              You can check the Academic calendar{' '}
              <a className="link" href="https://www.iitb.ac.in/newacadhome/toacadcalender.jsp">
                here
              </a>
              . Note that the dates are subject to change.
            </li>
            <li className="link" style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>{' '}
              <b>Update</b>: The option for branch change has been removed for the academic year
              2024-25. Please refer to{' '}
              <a className="link" href="https://youtu.be/F8XGjwg41p0">
                this
              </a>{' '}
              video and{' '}
              <a className="link" href="academics_dept.php">
                this
              </a>{' '}
              page to know more about the branches at IITB and make an informed choice.
            </li>
            <li style={{ fontSize: '0.75em' }}>
              Contact information for prospective women students:{' '}
              <a href="mailto:jeew.helpdesk@iitb.ac.in">jeew.helpdesk@iitb.ac.in</a>
            </li>
            <li>
              <a href="faq.php">FAQs and Query Portal</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>}
  
  </>
  );
};

export default Announcements;
