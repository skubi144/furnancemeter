import React, { useMemo } from "react";
import "./styles.scss";
interface ISkeletonProps {
  icons?: number;
}
const Skeleton = ({ icons = 5 }: ISkeletonProps) => {
  const iconsArr = useMemo(() => new Array(icons).fill({}), [icons]);
  return (
    <section className="furnanceSkeleton">
      <section className="furnanceSkeleton__section furnanceSkeleton__section--justifyRight">
        <h1 className="furnanceSkeleton__title"></h1>
      </section>
      <section className="furnanceSkeleton__section">
        {iconsArr.map((_, id) => (
          <Icon key={id} />
        ))}
      </section>
    </section>
  );
};
export default Skeleton;
const Icon = () => <div className="furnanceSkeleton__icon" />;
