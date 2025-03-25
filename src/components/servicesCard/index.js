import React from "react";
import { Col, Row, Card, Image, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ImageUrl } from "../../config/helper";
import { FaCheckCircle } from "react-icons/fa";

function ServicesCard({ item }) {
  const navigate = useNavigate();
  const Image_URL = "https://react.customdev.solutions:3021"
 

  return (
    <div>
      <Card
        className="servicescard"
        onClick={() => navigate("/pricelist" , { state : item})}
        style={{cursor:"pointer"}}
        title={
          <>
            <Image preview={false} src={Image_URL+"/"+item.catImage} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </>
        }
        bordered={false}
      >
        <p>
          <strong>{"From"+" "+"£"+item.price}</strong>
          {" "}
             Price Per { item.priceDescription}
        </p>
        {/* <Link>{item.link}</Link>
        <Row justify={"center"}>
          <Col>
            <Button className="mainbtn">BOOK NOW!</Button>
          </Col>
        </Row> */}

        <h6>{item.Includes}</h6>

        <ul>
          {item.tags?.map((val) => (
            <li>
              <FaCheckCircle /> {val}
            </li>
          ))}
        </ul>
        {
          item._id === "6659994b3c1edcdfb89618b0" ?
          (
            <Button className="mainbtn">SEE PRICES</Button>
          )
          :
          (
            <Button className="mainbtn">BOOK NOW!</Button>
          )
        }
       
      </Card>
    </div>
  );
}

export default ServicesCard;
