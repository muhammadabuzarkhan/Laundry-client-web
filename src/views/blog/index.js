import React, { useState } from "react";
import InnerBanner from "../../components/innerBanner";
import { useNavigate, Link } from "react-router-dom";
import BlogCard from "../../components/blogCard";
import { Col, Row } from "antd";

function Blogs() {
    const [blogCard, SetBlogCard] = useState([
        {
          key: 1,
          image: "blog-small.png",
          title: "How to Store Away Puffer Jackets",
          para: <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. <Link to="blogdetails">READ MORE...</Link></p>
          </>,
        },
        {
          key: 2,
          image: "blog-small.png",
          title: "How to Store Away Puffer Jackets",
          para: <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. <Link to="blogdetails">READ MORE...</Link></p>
          </>,
        },
        {
          key: 3,
          image: "blog-small.png",
          title: "How to Store Away Puffer Jackets",
          para: <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. <Link to="blogdetails">READ MORE...</Link></p>
          </>,
        },
        {
          key: 4,
          image: "blog-small.png",
          title: "How to Store Away Puffer Jackets",
          para: <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. <Link>READ MORE...</Link></p>
          </>,
        },
      ]);
  return (
    <div>
        <InnerBanner
        heading={"Blog"}
        para={
          "Exploring the latest trends in laundrys"
        }
      />
      <Row justify={"center"}>
        <Col xs={22} md={18} lg={16}>
          <Row justify={"center"} gutter={40}>
            
                
              {blogCard.length > 0 &&
                blogCard.map((item, index) => {
                  return <Col xs={22} md={12} lg={6}><BlogCard item={item} /> </Col>;
                })}
            
          </Row>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={22}>
         
          <hr />
        </Col>
      </Row>
    </div>
  )
}

export default Blogs