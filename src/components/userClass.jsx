import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    //API Call ---
    const data = await fetch("https://api.github.com/users/anandhimanshu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="">
        <img className="py-2 my-2" src={avatar_url} />
        <h2 className="text-2xl font-bold">Name: {name}</h2>
        <h3 className="text-xl font-semi-bold">Bio: {bio}</h3>
        <h4>anshuhim001@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
