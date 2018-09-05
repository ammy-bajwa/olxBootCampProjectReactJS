import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import LoadingScreen from "./LoadingScreen";

class OfflineAd extends Component {
    state = {
        ad: {},
        btnVisibility: true,
        loading: true
    };
    componentDidMount() {
        let ad;
        if (this.props.location.name) {
            ad = JSON.parse(this.props.location.name);
            localStorage.setItem("ad", this.props.location.name);
        } else {
            ad = JSON.parse(localStorage.getItem("ad"));
        }
        if (ad.userPath) {
            this.setState({ btnVisibility: false });
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                loading: false
                ,
                ad
            }
        })
    }
    render() {
        if (this.state.loading) {
            return <LoadingScreen />;
        }
        return (
            <div className="container-fluid">
                <Header history={this.props.history} />
                <div>
                    <ToastContainer />
                </div>
                <div className="mt-5">
                    <div className="container-fluid row h-100 justify-content-center align-items-center">
                        <img
                            className="w-20 mt-3"
                            src={this.state.ad.itemPic}
                            alt="Card cap"
                        />
                    </div>
                    <div className="card-body">
                        <div className="jumbotron jumbotron-fluid" id="adDetails">
                            <div className="container">
                                <h1 className="display-4">{this.state.ad.adTitle}</h1>
                                <p className="card-text">
                                    Details Are As {this.state.ad.itemDetails}.
              </p>
                                <hr />
                                <p className="card-text">
                                    <b>Price</b>{" "}
                                    <span className="float-right">{this.state.ad.price}</span>.
              </p>
                                <hr />
                                <p className="card-text">
                                    <b>Item Condition</b>{" "}
                                    <span className="float-right">
                                        {this.state.ad.itemCondition}
                                    </span>
                                </p>
                                <hr />
                                <p className="card-text">
                                    <b>Posted By</b>{" "}
                                    <span className="float-right">{this.state.ad.user}</span>
                                </p>
                                <hr />
                                <p className="card-text">
                                    <b>Ad Status</b>{" "}
                                    <span className="float-right">{this.state.ad.status}</span>
                                </p>
                                <hr />
                                <p className="card-text">
                                    <b>Contact</b>{" "}
                                    <span className="float-right">
                                        <a href={`tel:${this.state.ad.contact}`}>
                                            {this.state.ad.contact}
                                        </a>
                                    </span>
                                </p>
                                <hr />
                                <p className="card-text">
                                    <small className="text-muted">
                                        Posted Time Is{" "}
                                        <span className="float-right">
                                            {this.state.ad.createdAt}
                                        </span>
                                    </small>
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(OfflineAd);
