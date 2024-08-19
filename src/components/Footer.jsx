import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center m-4 p-4 text-xl">
      Created By:
      <i class="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/himanshu-anand-3486ab2b2/"
        target="_blank"
      >
        ❤️<b>Himanshu Anand</b>
      </a>
      &nbsp;&copy;{year}{" "}
      <Link to="/">
        <b>AnshuBites</b>
      </Link>
    </div>
  );
};

export default Footer;
