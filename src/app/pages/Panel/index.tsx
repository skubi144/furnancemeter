import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { FurnanceWrapper, Menu, Modal } from "../../shared/components";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import {
  fetchFurnances,
  getFurnances,
  getNumberOfSkeletons,
  getStatus,
} from "../../redux/furnance/furnanceSlice";
import Skeleton from "../../shared/components/Skeleton";
import { FurnanceInfo } from "../../shared/components/Furnance";
import { getModal } from "../../redux/appSettings/appSettingsSlice";

const Panel = () => {
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState<boolean>(true);
  const status = useSelector(getStatus);
  const numberOfSkeletons = useSelector(getNumberOfSkeletons);
  const furnances = useSelector(getFurnances);
  const modal = useSelector(getModal);
  console.log(numberOfSkeletons);
  useEffect(() => {
    dispatch(fetchFurnances());
  }, []);
  return (
    <section className={`panel ${modal.isVisible ? "blurred" : ""}`}>
      <Modal isVisible={modal.isVisible}>
        <h1>XD</h1>
      </Modal>
      <section className="panel__top">
        <Hamburger toggle={setToggled} toggled={toggled} />
      </section>
      <section className="panel__middle">
        <section className="panel__middle--left">
          <Menu
            isHidden={!toggled}
            menuItems={[
              { to: "/panel", isExact: true, text: "Home" },
              { to: "/panel/furnance", isExact: false, text: "Piec" },
              {
                to: "/panel/weatherForecast",
                isExact: true,
                text: "Sprawdź prognozę pogody",
              },
              { to: "/panel/profile", isExact: true, text: "Profil" },
              { to: "/panel/logout", isExact: true, text: "Wyloguj" },
            ]}
          />
        </section>
        <section
          className={`panel__middle--right ${!toggled ? " translateX14" : ""}`}
        >
          <Switch>
            <Route exact path="/panel">
              {status === "request" &&
                new Array(9).fill({}).map((_, id) => <Skeleton key={id} />)}
              {status === "success" &&
                furnances.map((furnance) => (
                  <FurnanceWrapper furnance={furnance} key={furnance.id} />
                ))}
              {status === "failure" && <button>Spróbuj ponownie ! </button>}
            </Route>
            <Route path="/panel/furnance/:id">
              <FurnanceInfo />
            </Route>
            <Route path="/panel/weatherForecast">
              <h2>Pogoda</h2>
            </Route>
            <Route path="/panel/profile">
              <h2>Profil</h2>
            </Route>
            <Route path="/panel/logout">
              <h2>logout</h2>
            </Route>
          </Switch>
        </section>
      </section>
      <div className="panel__top--time">
        <span>14:11:02</span>
      </div>
    </section>
  );
};
export default Panel;
