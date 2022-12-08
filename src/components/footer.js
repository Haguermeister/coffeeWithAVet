import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faMugHot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  let navigate = useNavigate();
  let routeChange = (path) => {
    navigate(path);
  };
  return (
    <footer id="footer" class="bg-dark text-center text-white">
      <div class="container p-2">
        <section class="mb-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <button
          type="button"
          className="btn btn-light mb-2 mx-2"
          onClick={() => routeChange("/login")}
        >
          <FontAwesomeIcon className="mx-2" icon={faMugHot} />
          Grab A Coffee
        </button>

        <button
          type="button"
          className="btn btn-light mb-2 mx-2"
          onClick={() => routeChange("/signup")}
        >
          <FontAwesomeIcon className="mx-2" icon={faSignIn} />
          Sign Up
        </button>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright :&nbsp;
        <a class="text-white" href="/">
          CoffeeWithAVet.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
