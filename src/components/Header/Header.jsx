import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const Header = () => {
  const [search, setSearch] = useState("");
  // console.log(search)
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("tocen") !== "123456789") {
      navigate("/");
    } else {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=programming")
        .then((res) => {
          setData(res.data.items);
          console.log(res.data.items);
        });
    }
  }, []);
  return (
    <div className="head">
      <div className="head_first">
        <span>Today a reader, tomorrow a leader.</span>
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="head_btn"
          onClick={() => {
            localStorage.removeItem("tocen");
            navigate("/");
          }}
        >
          EXIT
        </button>
      </div>
      <div className="container mt-4 scroll">
        <table
          className="table table-bordered table-hover table-responsive-md table-responsive-sm"
          style={{ cursor: "pointer" }}
        >
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Authors</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                if (search === "") {
                  return item.volumeInfo;
                } else if (
                  item.volumeInfo.title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return item.volumeInfo;
                }
              })
              .map((x, y) => (
                <tr onClick={() => navigate(`/singlebook/:${x.id}`)} key={y}>
                  <td>{y + 1}</td>
                  <td>{x.volumeInfo.title}</td>
                  <td>
                    {x.volumeInfo.authors.map((x) => {
                      return (
                        <>
                          <span>{x}</span> <br />
                        </>
                      );
                    })}
                  </td>
                  <td>
                    <img
                      className="table_img"
                      src={x.volumeInfo.imageLinks.thumbnail}
                      alt=""
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
