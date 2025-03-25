import React from "react";
import { Col, Row, Card, Image, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ImageUrl } from "../../config/helper";

function BlogCard({item}) {
  return (
    <div>
      <Card
        className="blogCard"
        title={
          <>
            <Image preview={false} src={ImageUrl(item.image)} />
           
          </>
        }
        bordered={false}
      >
         <h3>{item.title}</h3>
        <p>
          <strong>{item.price}</strong>
          {item.para}
        </p>

        <h6>{item.subHeading}</h6>
      </Card>
    </div>
  );
}

export default BlogCard;
