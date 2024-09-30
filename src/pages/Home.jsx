import React, { useEffect, useLayoutEffect } from "react";
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ReduxSetAppV, ReduxGetAppV, ReduxCleanAppV } from "@/redux/actions";

import { checkWindowTabId, findDataExistWindowTabId } from "@/helpers";

import { withNavigate } from "@/routes";

import { authenticationService } from "@/services/api_functions";

const Home = (props) => {
  // !CMPDIDMOUNT
  useLayoutEffect(() => {
    setAppVersion();
  }, []);

  // useEffect

  // ! Redux set function for new version
  const setAppVersion = () => {
    props.ReduxSetAppV({
      windowTabId: checkWindowTabId(),
      data: "Version =-> " + parseInt(Math.random(0, 10) * 1000),
    });
  };

  // !Access the redux data
  const findAppVersion = () => {
    let appVersionLst = findDataExistWindowTabId(props.appReducer);
    return appVersionLst;
  };

  return (
    <div>
      Home Redux : {findAppVersion()?.data}
      <Button
        onClick={(e) => {
          e.preventDefault();
          // console.log("Logout Clicked");
          authenticationService.logout();
          props.ReduxCleanAppV();
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

// !Redux state variables
const mapStateToProps = ({ appReducer }) => {
  return { appReducer };
};

// !Redux dispatch Functions
const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      ReduxSetAppV,
      ReduxGetAppV,
      ReduxCleanAppV,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionsToProps)(withNavigate(Home));
