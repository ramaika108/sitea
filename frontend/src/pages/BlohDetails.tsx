import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fetch from "../components/Fetch";
import { BlohType } from "../components/types";

import { Link } from "react-router-dom";

const BlohDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlohType>();

  useEffect(() => {
    Fetch(`/api/v1/blohs/${id}`, setBlog);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {blog && (
          <div className="col-lg-10 article__wrapper">
            <div className="article__heading">
              <h3>{blog.title}</h3>
              <Link to={"/blohs?category=" + blog.category_id}>
                <p>{blog.category}</p>
              </Link>
            </div>

            <img
              src={"/app/photos/" + blog.main_img}
              alt=""
              className="article__main-img"
            />
            <article className="article__content">
              <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
            </article>
            <div className="article__info">
              <p className="info__date">{blog.creation_date}</p>
              <p className="info__author">{blog.author}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlohDetails;
