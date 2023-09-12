import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading  , setIsLoading ] = useState(true) ;
  const [jobs  , setJobs ] = useState(true) ;
  const [currentJob , setCurrentJob ] = useState(0) ;
  const fetchJobs = async() =>{
    const response  = await  fetch(url) ;
    const newJobs = await response.json() ;
    // console.log(newJobs);
    setJobs(newJobs) ;
    setIsLoading(false) ;
  }

  useEffect(()=>{
      fetchJobs() ;
  } , [])
  if (isLoading) {
    return <section className = "jobs-center" >
      <div className="loading"></div>
    </section>
  }
  return (
    <section className="jobs-center">
      {/* btn container */}
      <BtnContainer jobs={jobs} currentJob={currentJob} setCurrentJob={setCurrentJob} />
      {/* job info */}
      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  );
};
export default App;
