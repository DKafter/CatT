import {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import "../styles/CatCardStyle.css";

interface Props {
  onChange: () => void;
  children: React.ReactElement[];
}

export const CatCardComponent = ({ onChange, children }: Props) => {
  const [isEnable, setIsEnable] = useState(false);
  const refreshId = useRef(0);

  const handleChangeEnabled = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setIsEnable(checked);
    },
    [isEnable]
  );

  const handleChangeRefresh = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      if (checked) {
        refreshId.current = setInterval(async () => {
          if (checked) {
            onChange();
          }
        }, 5000);
      } else {
        clearInterval(refreshId.current);
      }

      return () => {
        clearInterval(refreshId.current);
      };
    },
    [refreshId.current]
  );

  const handleGetCat = () => {
    if (isEnable) {
      onChange();
    }
  };

  return (
    <div className="card">
      <label className="card__label">
        <input
          onChange={handleChangeEnabled}
          type="checkbox"
          name="checkboxEnable"
          id="checkboxEnable"
          className="card__checkbox"
        />
        Enable
      </label>
      <label className="card__label">
        <input
          onChange={handleChangeRefresh}
          type="checkbox"
          name="checkboxAutoRefresh"
          id="checkboxAutoRefresh"
          className="card__checkbox"
        />
        Auto - refresh every 5 second
      </label>
      <button
        className="card__button"
        onClick={handleGetCat}
        disabled={!isEnable}
      >
        Get Cat
      </button>
      {children}
    </div>
  );
};
