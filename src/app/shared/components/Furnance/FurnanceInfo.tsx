import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFurnanceById } from "../../../redux/furnance/furnanceSlice";
import SensorFlipCard from "./SensorFlipCard";
import SettingsIcon from "@material-ui/icons/Settings";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import { setModal } from "../../../redux/appSettings/appSettingsSlice";
const FurnanceInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const furnance = useSelector(getFurnanceById(id));
  const [isAdvancedViewToggled, setIsAdvancedViewToggled] = useState<boolean>(
    false
  );
  return (
    <section className="furnanceInfo">
      <section className="furnanceInfo__titleArea">
        <h2>{furnance?.name}</h2>
        <section className="furnanceInfo__icons">
          <FilterNoneIcon
            fontSize="large"
            onClick={() => setIsAdvancedViewToggled(!isAdvancedViewToggled)}
          />
          <SettingsIcon
            fontSize="large"
            onClick={() => {
              dispatch(setModal({ isVisible: true, children: <div>Children as a props</div> }));
            }}
          />
        </section>
      </section>
      {isAdvancedViewToggled && (
        <h1 style={{ color: "black" }}>Zaawansowany Widok</h1>
      )}
      {!isAdvancedViewToggled &&
        furnance?.sensors.map((sensor, id) => (
          <SensorFlipCard
            key={`${id}__sasda#@!${sensor.name}`}
            sensor={sensor}
          />
        ))}
    </section>
  );
};
export default FurnanceInfo;
