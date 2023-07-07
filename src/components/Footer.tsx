import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

export default function Footer() {
  return (

    <div className="footer-container">
      <div>
        <h1>
          <Link to="/">Chatter</Link>
        </h1>
      </div>

      <div>
        <ul>
          <li>
            <p>Explore</p>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/">Trending blogs</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>Support</p>
          </li>
          <li>
            <Link to="/">Support docs</Link>
          </li>
          <li>
            <Link to="/">Join Slack</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>Official blog</p>
          </li>
          <li>
            <Link to="/">Official blog</Link>
          </li>
          <li>
            <Link to="/">Engineering blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


