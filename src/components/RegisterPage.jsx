import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container d-flex justify-content-center align-items-center py-5 h-100">
          <div className="row w-100">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="card shadow-lg" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 d-none d-md-block" style={{ backgroundColor: "#ff6219", borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}></div>
                  <div className="col-md-6">
                    <div className="card-body p-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-4">
                          <i className="fas fa-cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                          <span className="h3 fw-bold mb-0 text-dark">
                            Welcome to <b>Desphixs 👋</b>
                          </span>
                        </div>
                        <h5 className="fw-normal mb-4 pb-3" style={{ letterSpacing: 1, color: "#495057" }}>
                          Sign Up
                        </h5>

                        {/* Email Input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        {/* Username Input */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>

                        {/* Password Input */}
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                          />
                        </div>

                        {/* Register Button */}
                        <div className="pt-1 mb-4">
                          <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Register
                          </button>
                        </div>

                        {/* Login Link */}
                        <p className="mb-5 pb-lg-2" style={{ color: "#495057" }}>
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: "#ff6219" }}>
                            Login Now
                          </Link>
                        </p>

                        {/* Terms and Privacy */}
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>{" "}
                        |{" "}
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          © {new Date().getFullYear()} Desphixs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default RegisterPage;
