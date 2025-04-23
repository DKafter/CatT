import "../styles/CatCardStyle.css"

interface Props {
  url: string;
}

export const CatImageComponent = ({ url }: Props) => {
  return (
    <div className="card__picture">
      <img src={url} className="picture-image" alt="cat" />
    </div>
  );
};
