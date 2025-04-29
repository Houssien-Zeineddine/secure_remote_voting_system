import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import politician from "../../../assets/Politician giving his speech to public.svg";
import "./style.css";

const Elections = () => {
  const navigate = useNavigate();
  const registeredVoters = 200; //getting voters number from backend
  const totalVotes = 220; //getting voters number from backend
  const malisciousVotes = 20; //getting voters number from backend

  //hardcoded results object for testing
  const results = [
    {
      candidate_name: "candidate 1",
      result: 12,
    },
    {
      candidate_name: "candidate 2",
      result: 40,
    },
    {
      candidate_name: "candidate 3",
      result: 4,
    },
    {
      candidate_name: "candidate 4",
      result: 22,
    },
    {
      candidate_name: "candidate 5",
      result: 2,
    },
    {
      candidate_name: "candidate 6",
      result: 9,
    },
    {
      candidate_name: "candidate 7",
      result: 1,
    },
    {
      candidate_name: "candidate 8",
      result: 3,
    },
    {
      candidate_name: "candidate 9",
      result: 7,
    },
  ];

  //calling the results API
  // const [results, setResults] = React.useState({});

  // React.useEffect(() => {
  //   fetch("/api/results")
  //     .then((res) => res.json())
  //     .then((data) => setResults(data));
  // }, []);
  return (
    <div className="elections-dashboard-container">
      <div className="description-live-results-container">
        <div className="dashboard-description-container">
          <div className="dashboard-description">
            <h4>Ongoing Elections</h4>
            <h2>Elections Name</h2>
            <Button
              text="Vote Now"
              variant="blue"
              size="small"
              onClick={() => navigate("/candidates")}
              className="vote-now-btn"
            />
          </div>
          <img src={politician} alt="Politician giving his speech to public" />
        </div>
        <div className="dashboard-live-results">
          {Object.entries(results).map(([id, candidate]) => (
            <div key={id} className="candidate-row">
              <span className="candidates-names">
                {candidate.candidate_name}
              </span>
              <div
                className="vote-bar"
                style={{ width: `${candidate.result}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="statistics-container">
        <h4>Voting Process</h4>
        <div className="round-div registered-voter">
          <p>{registeredVoters}</p>
        </div>
        <p>Total Number of Registered Voters</p>
        <div className="round-div total-votes">
          <p>{totalVotes}</p>
        </div>
        <p>Total Number of Votes</p>
        <div className="round-div maliscious-votes">
          <p>{malisciousVotes}</p>
        </div>
        <p>Total Number of Malicious votes</p>
      </div>
    </div>
  );
};

export default Elections;
