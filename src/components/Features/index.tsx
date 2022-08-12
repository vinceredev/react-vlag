import React from "react";
import { useVlag } from "../../libs/context";
import Switch from "../switch";

const Features: React.FC = () => {
  const vlag = useVlag();
  const vlagFeatures = vlag.getFlags();

  const vlagID = vlag.flagMap.reduce(
    (o, key) => Object.assign(o, { [key]: vlag.isEnabled(key) }),
    {}
  );
  const [enableFeature, setEnableFeature] = React.useState<any>(vlagID);

  const handleVlagChange = (key: string, val: boolean) => {
    setEnableFeature({ ...enableFeature, [key]: val });
    vlag.setEnable(key, val);
  };

  return (
    <div className="vlag-features">
      {vlagFeatures?.map((feature, i) => (
        <div key={i} className="vlag-features__item">
          <div className="vlag-features__item__content">
            <h2 className="vlag-features__item__content__title">
              {feature?.name}
            </h2>
            {feature?.description && (
              <p className="vlag-features__item__content__description">
                {feature?.description}
              </p>
            )}
            {feature?.helperText && (
              <p className="vlag-features__item__content__helper">
                {feature?.helperText}
              </p>
            )}
          </div>
          <div className="vlag-features__item__toggle">
            <Switch
              checked={enableFeature[feature?.id]}
              disabled={feature.disabled}
              onClick={() =>
                !feature.disabled && handleVlagChange(feature?.id, !enableFeature[feature?.id])
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
