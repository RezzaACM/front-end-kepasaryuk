import React, { useEffect, useState } from "react";
import { Row, Col } from 'antd';
import "./Login.scss";
import { useFormik } from "formik";
import { LoginValidation } from "../../helpers/validation";
import AuthApi from "../../services/login.services";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useHistory, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import ActionType from "../../modules/redux/reducer/globalActionType";

require('dotenv').config()

// loginValue
const loginValues = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [isVisible, setVisible] = useState(false); //set hidden or show pass

  // const match = useRouteMatch();
  const history = useHistory();

  // declare formik format
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    // setFieldValue,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: loginValues,
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      login(values)
      // console.log(values);
    },
  });

  const login = (values) => {
    AuthApi.login(values)
      .then(res => {
        document.location.replace('/')
        localStorage.setItem('user_data', JSON.stringify(res.data))
        localStorage.setItem('access_token', JSON.stringify(res.access_token))
        props.handleLogin(true)
      }, err => {
        setSubmitting(false)
        console.log(err);
      })
  }

  const isHidden = () => {
    if (isVisible === false) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  // lifecycle methode
  useEffect(() => {
  });

  if (props.isLogin) {
    return (
      <Redirect to={'/'} />
    )
  }

  return (
      <div className="card-login">
        <div className="logo">
          <img
            src="https://image.freepik.com/free-vector/supermarket-logo-template_23-2148451518.jpg"
            alt="logo_kepasaryuk"
          />
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col span={24}>
                <input
                  className={'form-custom' + (errors.email && touched.email ? ' is-invalid' : '')}
                  placeholder="Email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="text"
                />
                <div className="feedback-error">{touched.email && errors.email}</div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="input-icons">
                  <input
                    className={'form-custom' + (errors.password && touched.password ? ' is-invalid' : '')}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='password'
                    type={isVisible === false ? 'password' : 'text'}
                  /><span onClick={isHidden} >{isVisible === false ? <EyeInvisibleOutlined /> : <EyeOutlined />}</span>
                </div>
                <div className="feedback-error">{touched.password && errors.password}</div>
              </Col>
            </Row>
            <button
              type="submit"
              className="submit"
              disabled={isSubmitting}
            >Sign in</button>
          </form>
        </div>
        <div className="footer__card">
          <p>atau masuk dengan</p>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}

const mapsDispatchToProps = dispatch => ({
  handleLogin: (value) => dispatch({ type: ActionType.LOGIN, value })
})

export default connect(mapStateToProps, mapsDispatchToProps)(Login);
