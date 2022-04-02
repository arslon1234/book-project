import { useEffect, useState } from "react";
import axios from "axios";
import "./single.css";
import { useNavigate } from "react-router";

const SingleBook = () => {
  const urlId = window.location.href.split(":");
  const [datas, setDatas] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("tocen") !== "123456789") {
      navigate("/");
    } else {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${urlId[3]}`)
        .then((res) => {
          setDatas([res.data]);
        });
    }
  }, []);
  return (
    <div className="single">
      <div className="single_first">
        <span>The whole world opened up to me when I learned to read</span>
        <button onClick={() => navigate("/home")}>Exist</button>
      </div>
      <div className="single-second">
        <div className="single-img">
          {datas.map((x) => {
            return <img src={x.volumeInfo.imageLinks.thumbnail} alt="" />;
          })}
        </div>
        <div className="single-data">
          {datas.map((x) => {
            return (
              <>
                <p className="title">{x.volumeInfo.title}</p>
                <span>Authors:</span>
                <p className="author">
                  {x.volumeInfo.authors.map(x=> <h6>{x}</h6>)}
                </p>
                <span className="description">Product Details</span>
                <br />
                <span className="desc-letter">
                  Country : {x.accessInfo.country}
                </span>
                <br />
                <span className="desc-letter">
                  {" "}
                  Publisher : {x.volumeInfo.publisher}
                </span>
                <br />
                <span className="desc-letter">
                  {" "}
                  Publish Data : {x.volumeInfo.publishedDate}
                </span>
                <span className="desc-letter">
                  {" "}
                  Pages : {x.volumeInfo.pageCount}
                </span>
                <br />
                <span className="desc-letter">
                  {" "}
                  Language : {x.volumeInfo.language}
                </span>
                <br />
                <span className="description">Description:</span>
                <br />
                <span
                  className="desc-letter"
                  dangerouslySetInnerHTML={{ __html: x.volumeInfo.description }}
                ></span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
