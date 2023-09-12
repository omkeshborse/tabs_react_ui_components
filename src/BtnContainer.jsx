const BtnContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentJob(index)}
            className={currentJob === index ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
