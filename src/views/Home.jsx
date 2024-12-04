import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex  w-full min-h-screen items-start justify-center">
      <span>Home</span>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
