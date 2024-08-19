import UserClass from "./userClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="p-4 m-4">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <h2 className="text-3xl font-semi-bold my-2">
          This is a Namaste React WebSeries !!!
        </h2>

        <UserClass
          name={"anshu"}
          location={"lucknow"}
          email={"someone@class.com"}
        />
      </div>
    );
  }
}

export default About;
