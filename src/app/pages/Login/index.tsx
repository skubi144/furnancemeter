import React, { useState } from "react";
import "./styles.scss";
import { Fire, LoadingIndicator } from "../../shared/components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  getLoginFetchStatus,
  getToken,
} from "../../redux/user/userSlice";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const status = useSelector(getLoginFetchStatus);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: LoginProps) => {
    dispatch(fetchUser(data));
  };
  return (
    <section className="login">
      {token && <Redirect to="/panel" />}
      <aside className="login__left">
        <Fire />
      </aside>
      <section className="login__right">
        {status === "request" ? (
          <LoadingIndicator />
        ) : (
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="login__input"
              type="text"
              id="name"
              name="name"
              placeholder="login"
              ref={register({ required: true })}
            />

            <span
              className={`login__warning ${
                errors.name && errors.name.type === "required"
                  ? "opacity1"
                  : "opacity0"
              }`}
            >
              Pole wymagane
            </span>

            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              placeholder="hasło"
              ref={register({ required: true })}
            />

            <span
              className={`login__warning ${
                errors.password && errors.password.type === "required"
                  ? "opacity1"
                  : "opacity0"
              }`}
            >
              Pole wymagane
            </span>

            <input
              type="submit"
              className="btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal"
              value="Zaloguj"
            />
          </form>
        )}
      </section>
    </section>
  );
};
export default Login;
