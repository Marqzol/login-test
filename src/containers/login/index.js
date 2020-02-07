import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginForm } from "../../components/loginForm";
import { Loader } from "../../components/loginForm/loader";
import { request } from "../../services/request";
import { Success } from "../../components/loginForm/success";
import { setUserName, setLoginStatus, setLoginSuccess } from "../../store/user/actions";
import { getLoginStatus, getUserName } from "../../store/user/selectors";

function ConnectedLogin({ userName, _setUserName, loginStatus, _setLoginSuccess }) {
  const [loading, setLoading] = useState(false);

  function handleSubmitForm(name, password) {
    setLoading(true);
    request
      .submitLogin("ok", { name, password })
      .then(res => {
        setLoading(false);
        _setUserName(res.name);
        _setLoginSuccess();
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
  }

  return (
    <React.Fragment>
      {!loading && (
        <LoginForm
          submitMethod={(name, password) => handleSubmitForm(name, password)}
        />
      )}
      {loading && <Loader />}
      {loginStatus && <Success printValue={userName} />}
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    _setUserName: name => {
      dispatch(setUserName(name));
    },
    _setLoginSuccess: status => {
        dispatch(setLoginSuccess());
    }
  };
};

const mapStateToProps = state => {
  return {
    loginStatus: getLoginStatus(state),
    userName: getUserName(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);
