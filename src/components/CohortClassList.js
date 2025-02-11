import React from "react";

export default function CohortClassList({ displayAllStudents, sortCohort }) {
  
  return (
    //should display filtered student on click 
    <div className="CohortList">
      <aside>
        <h2 className="cohort">Choose a class by start date</h2>
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2026")}>Winter 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2026")}>Fall 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2026")}>Summer 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2026")}>Spring 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2025")}>Winter 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2025")}>Fall 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2025")}>Summer 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2025")}>Spring 2025</h4>
      </aside>
    </div>
  );
}
