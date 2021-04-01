import React from "react";
import "./styles.scss";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import FlareIcon from "@material-ui/icons/Flare";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Furnance } from "../../../redux/furnance/furnanceSlice";
import { useHistory } from "react-router";

interface FurnanceWrapperProperties {
  furnance: Furnance;
}
const FurnanceWrapper = ({ furnance }: FurnanceWrapperProperties) => {
  const history = useHistory();
  const { name, id, sensors } = furnance;
  const handleRedirect = () => {
    history.push(`/panel/furnance/${id}`);
  };
  return (
    <section className="furnance" onClick={handleRedirect}>
      <section className="furnance__section furnance__section--justifyRight">
        <h1 className="furnance__title">{name}</h1>
      </section>
      <section className="furnance__section">
        {sensors.map((sensor,id) => (
          <div key={`${sensor.name}&ASD^${id}`} className="furnance__icon">
            <h5 className="furnance__iconTitle">{sensor.status}</h5>
            <img className="furnance__img" src={sensor.img} />
          </div>
        ))}
      </section>
    </section>
  );
};
export default FurnanceWrapper;
