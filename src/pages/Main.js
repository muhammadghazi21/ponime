import React from "react";
import MyNavbar from "../components/MyNavbar";
import AnimeCardList from "../components/AnimeCardList";
import LeftSideNavbar from "../components/LeftSideNavbar";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <aside className="leftsidenavbar">
          <LeftSideNavbar />
        </aside>
        <section>
          <article>
            <AnimeCardList />
          </article>
        </section>
        <aside className="rightsidenavbar">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Main;
