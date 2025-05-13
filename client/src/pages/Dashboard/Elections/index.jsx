import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import politician from "../../../assets/Politician giving his speech to public.svg";
import "./style.css";
import { CheckElectionsContext } from "../../../components/Context/CheckElectionsContext";
import { capitalizeTitle } from "../../../Utils/helpers";
import axiosBaseUrl from "../../../Utils/axios";

const Elections = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const [stats, setStats] = useState("");
  const access_token = localStorage.getItem("access_token");

  const getStats = async () => {
    try {
      const response = await axiosBaseUrl.get("/user/getstats", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      setStats(response.data);
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  //hardcoded results object for testing
  // const result = [
  //   { candidate_name: "candidate 1", result: 12 },
  //   { candidate_name: "candidate 2", result: 40 },
  //   { candidate_name: "candidate 3", result: 4 },
  //   { candidate_name: "candidate 4", result: 22 },
  //   { candidate_name: "candidate 5", result: 2 },
  //   { candidate_name: "candidate 6", result: 9 },
  //   { candidate_name: "candidate 7", result: 100 },
  //   { candidate_name: "candidate 8", result: 3 },
  //   { candidate_name: "candidate 9", result: 7 },
  // ];

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
            <h2>{capitalizeTitle(ongoingActiveElections.title)}</h2>
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
          <div className="candidates-names">
            {Array.isArray(results) &&
              results.map((candidate, index) => (
                <div key={index}>
                  <p>{candidate.name}</p>
                </div>
              ))}
          </div>
          <div className="bars-container">
            {results.map((candidate, index) => (
              <div key={index} className="bar-result-container">
                <div
                  className="vote-bar"
                  style={{ "--target-width": `${candidate.percentage}%` }}
                ></div>
                <p>{candidate.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="statistics-container">
        <h4>Voting Process</h4>
        <div className="round-div registered-voter">
          <p>{stats.counted_votes}</p>
        </div>
        <p>Total Number of Registered Voters</p>
        <div className="round-div total-votes">
          <p>{stats.voter_count}</p>
        </div>
        <p>Total Number of Votes</p>
        <div className="round-div maliscious-votes">
          <p>{stats.malicious_votes}</p>
        </div>
        <p>Total Number of Malicious votes</p>
      </div>
    </div>
  );
};

export default Elections;
