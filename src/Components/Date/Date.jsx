
import "./date.css";

function Date() {
  return (
    <div className="datesmp">
      <div className="dateContainer">
            <div className="col-md-12 dateTitle" >
              <h1>Important Dates</h1>
            </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-content">
                <table className="table table-condensed section-table" >
                  <tbody>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent", border:"none"}}>
                        Results of JEE Advanced (2023)
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>18th June 2023</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Tentative Start of Seat Allotment
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>
                        Oct 27 - Nov 20, 2021
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Start of JoSAA registration/choice filling
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>19th June 2023</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Hostel Check-in for students
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>
                        29th July, 2023(saturday), 10:00 AM onwards
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Reporting Date (for IITB)
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>31st July 2023</td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}} >
                        Orientation reporting (for IITB)
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>
                        31st july 2023 (Monday), 08:30 AM
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Orientation week (for IITB)
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}}>
                        31st july 2023 (Monday) to 4 August, 2023 (Friday)
                      </td>
                    </tr>
                    <tr className="dateItem">
                      <td className="dateEvent" style={{backgroundColor:"transparent" , border:"none"}}>
                        Instructions Begins (for IITB)
                      </td>
                      <td className="dateDates" style={{backgroundColor:"transparent" , border:"none"}} >7th August 2023</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="pt-4">Sources</h3>
                <ul className="section-ul-list">
                  <li>
                    <a className="link" href="https://jeeadv.ac.in/">
                      Jee Advanced Website
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      href="https://www.iitb.ac.in/newacadhome/ugNewEntrants2023-24.jsp"
                    >
                      IITB Academic Calender
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;
