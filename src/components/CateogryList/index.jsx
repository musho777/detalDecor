"use client"

import CategoryItem from '../categoriItem'
import React, { useRef, useState } from 'react';
import './styles.css';
// import soundFile from "../../assets/voice/RPReplay_Final1714777134.mp3";

function CateogryList() {
  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);
  const [isDragStart, setDragStart] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const handleDragStart = (e) => {
    setDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragging = (e) => {
    if (!isDragStart) return;
    // e.preventDefault();
    setDragging(true);
    carouselRef.current.classList.add("dragging");
    setPositionDiff((e.pageX || e.touches[0].pageX) - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    // showHideIcons();
  };

  const handleDragStop = () => {
    setDragStart(false);
    carouselRef.current.classList.remove("dragging");

    if (!isDragging) return;
    setDragging(false);
    autoSlide();
  };

  const autoSlide = () => {
    // const sound = new Audio(soundFile);
    // sound.play();
    if (carouselRef.current.scrollLeft - (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) > -1 || carouselRef.current.scrollLeft <= 0) return;
    let positionDiffAbs = Math.abs(positionDiff);
    let firstImgWidth = firstImgRef.current.clientWidth + 50;
    // let firstImgWidth = 120

    let valDifference = firstImgWidth - positionDiffAbs;
    if (carouselRef.current.scrollLeft > prevScrollLeft) {
      return carouselRef.current.scrollLeft += positionDiffAbs > firstImgWidth / 3 ? valDifference : -positionDiffAbs;
    }
    carouselRef.current.scrollLeft -= positionDiffAbs > firstImgWidth / 3 ? valDifference : -positionDiffAbs;

  };

  return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef} onMouseDown={handleDragStart} onTouchStart={handleDragStart} onMouseMove={handleDragging} onTouchMove={handleDragging} onMouseUp={handleDragStop} onTouchEnd={handleDragStop}>
        <CategoryItem title={"Гостиная10"} ref={firstImgRef} />
        <CategoryItem title={"Гостиная2"} />
        <CategoryItem title={"Гостиная3"} />
        <CategoryItem title={"Гостиная4"} />
        <CategoryItem title={"Гостиная5"} />
        <CategoryItem title={"Гостиная6"} />
        <CategoryItem title={"Гостиная7"} />
        <CategoryItem title={"Гостиная8"} />

      </div>
    </div>
  );
}

export default CateogryList;
