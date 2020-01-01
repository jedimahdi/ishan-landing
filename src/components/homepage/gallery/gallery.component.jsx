import React from 'react';
import { Link } from 'react-router-dom';

import './gallery.styles.scss';

const Gallery = () => (
  <section className="student-gallery">
    <div className="seprator-lg" />

    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="title">گالری دانش آموختگان</div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/170/thumb-1558117877-VinayBhardwaj_DestructionBot.jpg?1558117877"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/169/thumb-1558117836-TomHearne_WarriorQueen_full.jpg?1558117836"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/168/thumb-1558117785-StevenSong_PirateLady.jpg?1558117785"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/167/thumb-1558117725-SinjinTreharne_RichardIII_ECU_2K.jpg?1558117725"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/166/thumb-1558117678-SinjinTreharne_Giants_300dpi.jpg?1558117678"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/165/thumb-1558117605-Rhiannon_Remo_The_Farmer.jpg?1558117605"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/164/thumb-1558117554-Omar-Mukhtar---Falling-Arrows_RE2.jpg?1558117554"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/163/thumb-1558117502-Mariam-Hamed_The-fold-weapon.jpg?1558117502"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/162/thumb-1558117458-LotemSason_Astronaut_001.jpg?1558117458"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 image">
          <Link to="/">
            <img
              className="img-responsive-full"
              src="https://d2kektcjb0ajja.cloudfront.net/images/showcase_artworks/thumbs/000/001/161/thumb-1558117399-Kasita-Wonowidjojo_YoungMechanic_Closeup.jpg?1558117399"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3 hidden-sm hidden-xs">
          <Link className="link-white" to="/showcase">
            گالری دانشجویان <i className="fa fa-long-arrow-left" />
          </Link>
          <br />
          <Link className="link-white" to="/showcase/graduate-reels">
            فارغ التحصیلی <i className="fa fa-long-arrow-left" />
          </Link>
          <br />
          <Link className="link-white" to="/showcase/best-of-term">
            بهترین ترم <i className="fa fa-long-arrow-left" />
          </Link>
        </div>
      </div>
    </div>

    <div className="seprator-lg" />
  </section>
);

export default Gallery;
