import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const CategoryBox = (props) => {
  CategoryBox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    imageName: PropTypes.string,
  };
  return (
    <Card
      style={{
        width: "7rem",
        height: "9rem",
        fontSize: "10px",
        padding: "0 20px 20px 0",
      }}
    >
      <Card.Img
        src={`/images/${props.imageName}.png`}
        style={{
          width: "9rem",
          height: "9rem",
          borderRadius: "30px",
          paddingBottom: "5px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "black",
            paddingBottom: "5px",
          }}
        >
          {props.name}
        </Card.Title>
        <Card.Title
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "rgb(195, 187, 195)",
            paddingBottom: "5px",
          }}
        >
          2022
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CategoryBox;
