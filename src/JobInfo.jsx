import Duties from "./Duties";

const JobInfo = ({ jobs, currentJob }) => {
  const { company, dates, duties, title } = jobs[currentJob];
  // console.log(id ,order ,title , dates ,duties ,company);
  // console.log(jobs[0]);
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date"> {dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
