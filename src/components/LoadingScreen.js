import React from "react";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div className="LoaderBalls" id="loadingBody">
        <div className="LoaderBalls__item" />
        <div className="LoaderBalls__item" />
        <div className="LoaderBalls__item" />
      </div>
    );
  }
}

export default LoadingScreen;
