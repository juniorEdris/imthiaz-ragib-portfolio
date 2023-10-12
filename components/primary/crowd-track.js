"use client";

import axios from "axios";
import { useEffect } from "react";

const FIVERR = "Fiverr Portfolio";

const CrowdTrack = () => {
  const onViewerEnter = async () => {
    try {
      const res = await axios.post(`/api/crowd`, {
        traffic: FIVERR,
      });

      if (res?.status === 200) {
        console.log(FIVERR);
        localStorage.setItem(FIVERR, JSON.stringify(FIVERR));
      }
    } catch (error) {
      console.log("TS 🚫");
    }
  };

  useEffect(() => {
    const seen = localStorage.getItem(FIVERR)
      ? localStorage.getItem(FIVERR)
      : false;
    if (!seen) {
      onViewerEnter();
    }
  }, []);

  return "";
};

export default CrowdTrack;
