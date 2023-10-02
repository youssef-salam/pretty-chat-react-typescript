import { CSSProperties, useState } from "react";

import valley from "../assets/valley.jpeg";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const backgroundImage = {
    backgroundImage: `url(${valley})`, // Here due to variable
  } as CSSProperties;

  return (
    <div className="background-image" style={backgroundImage}>
      <div className="background-gradient-dark">
        <div style={styles.formContainerStyle}>
          <div style={styles.titleStyle}>Orongo🍊Chat</div>

          {hasAccount ? (
            <SignUpForm onHasAccount={() => setHasAccount(true)} />
          ) : (
             <LogInForm onHasNoAccount={() => setHasAccount(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  formContainerStyle: {
    width: "100%",
    maxWidth: "650px",
    padding: "36px 72px",
  } as CSSProperties,
  titleStyle: {
    fontSize: "24px",
    fontFamily: "El Messiri",
    letterSpacing: "0.5px",
    color: "white",
    paddingBottom: "11vw",
  } as CSSProperties,
};

export default AuthPage;
