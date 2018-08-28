import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/action';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  error = () => {
    toast.error('Nothing Found', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  }
  success = () => {
    toast.success('Successfully Signout', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  }
  logoutHandler = () => {
    this.props.logout();
    localStorage.removeItem('userId');
    this.success();
    let self = this;
    setTimeout(() => {
      self.props.history.goBack();
    }, 2000)

  }
  searchHandler = (e) => {
    let self = this;
    e.preventDefault();
    let searchKeywork = document.getElementById('searchInput').value;
    let catogary = document.getElementById('searchSelect').value;
    console.log(searchKeywork + '  ' + catogary);
    axios({
      method: 'post',
      url: catogary == 'all' ?
        '/search/all' : '/search/catogary',
      data: {
        searchKeywork, catogary
      }
    })
      .then(function (response) {
        if (response.data.message) {
          console.log(response.data.message)
          return self.error();
        }
        localStorage.setItem('searchResult', JSON.stringify(response.data));
        self.props.history.push('/search');
        console.log(self.props)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container-fluid border">
        <div>
          <ToastContainer />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light ">
          <h2 className="navbar-brand text-primary">
            <Link to='/'><span className='ml-3'>OLX Pakistan</span></Link>
          </h2>
          <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/property">Property for Sale</Link>
                  <Link className="dropdown-item" to="/rent">Property for Rent</Link>
                  <Link className="dropdown-item" to="/vehicles">Vehicles</Link>
                  <Link className="dropdown-item" to="/bikes">Bikes </Link>
                  <Link className="dropdown-item" to="/electronics">Electronics & Home Appliances</Link>
                  <Link className="dropdown-item" to="/mobiles">Mobiles</Link>
                  <Link className="dropdown-item" to="/jobs">Jobs</Link>
                  <Link className="dropdown-item" to="/services">Services</Link>
                  <Link className="dropdown-item" to="/buisiness">Business Industrial & Agriculture</Link>
                  <Link className="dropdown-item" to="/furniture">Furniture & Home Decorate</Link>
                  <Link className="dropdown-item" to="/animals">Animals</Link>
                  <Link className="dropdown-item" to="/fashion">Fashion & Beauty </Link>
                  <Link className="dropdown-item" to="/books">Books, Sports & Hobbies</Link>
                  <Link className="dropdown-item" to="/kids">Kids</Link>
                </div>
              </li>
              <li className={this.props.auth ? 'd-none' : "nav-item"}>
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              {this.props.auth ?
                <li className={this.props.auth ? "nav-item" : 'd-none'}>
                  <Link className="nav-link" to="/user">Hi {this.props.user.name}</Link>
                </li> : ''
              }
              {this.props.auth ?
                <li className={this.props.auth ? "nav-item" : 'd-none'}>
                  <Link className="nav-link" to="#"><span onClick={this.logoutHandler}>Logout</span></Link>
                </li> : ''
              }
              <li className={this.props.visible ? "nav-item" : 'd-none'}>
                <Link className="nav-link" to={`${this.props.postAddress}/postad`}>Post Ad</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.searchHandler}>
              <input className="form-control mr-sm-2" type="search"
                placeholder="Search" aria-label="Search" id='searchInput' required />
              <div className="dropdown mr-sm-2">
                <select className="form-control" id="searchSelect">
                  <option value='all'>Search All</option>
                  <option value='property'>Property for Sale</option>
                  <option value='rent'>Property for Rent</option>
                  <option value='vehicles'>Vehicles</option>
                  <option value='bikes'>Bikes</option>
                  <option value='electronics'>Electronics & Home Appliances</option>
                  <option value='mobiles'>Mobiles</option>
                  <option value='jobs'>Jobs</option>
                  <option value='services'>Services</option>
                  <option value='buisiness'>Business Industrial & Agriculture</option>
                  <option value='furniture'>Furniture & Home Decorate</option>
                  <option value='animals'>Animals</option>
                  <option value='fashion'>Fashion & Beauty </option>
                  <option value='books'>Books, Sports & Hobbies</option>
                  <option value='kids'>Kids</option>
                </select>
              </div>
              <button className="btn btn-outline-secondary my-sm-0 mr-2" type="submit" id='searchBtn'>Search</button>
            </form>
          </div>
        </nav>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
