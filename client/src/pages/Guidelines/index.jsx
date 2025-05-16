import "./style.css";

const Guidelines = () => {
  return (
    <div className="along-sidebar-positioning">
      <div className="guidelines-container">
        <div className="title-cont">
          <h2>Secure Voting Guidelines</h2>
          <p>
            To ensure a fair and secure election, our system automatically
            monitors for suspicious activity. Here are the key rules that help
            protect your vote:
          </p>
        </div>
        <div className="guidelines-and-image">
          <div className="guidelines-box">
            <div className="rounded-number">
              <p>1</p>
            </div>
            <div className="guideline-title-text">
              <p>Multiple Votes from Same IP Address</p>
              <p>
                To prevent tampering, votes from the same IP address submitted
                too quickly may be flagged. Please avoid voting from shared or
                public networks when possible.
              </p>
            </div>
          </div>
          <div className="guidelines-box">
            <div className="rounded-number">
              <p>2</p>
            </div>
            <div className="guideline-title-text">
              <p>Voting from Outside the Allowed Region</p>
              <p>
                Voting is limited to residents of approved regions. If your
                location appears outside of the allowed country or city, your
                vote may be flagged. Make sure your device’s location settings
                are accurate.
              </p>
            </div>
          </div>
          <div className="guidelines-box">
            <div className="rounded-number">
              <p>3</p>
            </div>
            <div className="guideline-title-text">
              <p>Unusually Fast Voting</p>
              <p>
                If your vote is submitted seconds after logging in or
                registering, our system may detect this as automated behavior.
                Take your time to review your choices carefully before
                submitting.
              </p>
            </div>
          </div>
          <div className="guidelines-box">
            <div className="rounded-number">
              <p>4</p>
            </div>
            <div className="guideline-title-text">
              <p>Suspicious Device or Browser</p>
              <p>
                Using command-line tools or bots (like cURL or scripts) to
                access the voting system is not allowed. Please vote using a
                secure and supported browser or device.
              </p>
            </div>
          </div>
          <div className="guidelines-box">
            <div className="rounded-number">
              <p>5</p>
            </div>
            <div className="guideline-title-text">
              <p>Duplicate Voting Attempts</p>
              <p>
                Each person is allowed only one vote. If a second attempt is
                detected, even if it’s blocked, the action will be logged and
                flagged for review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
