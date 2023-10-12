"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const FIVERR = "Fiverr Portfolio";

const CrowdTrack = () => {
  const searchParams = useSearchParams();

  const welcome = searchParams.get("welcome") ?? "";

  const isAppAdmin = welcome?.length > 0 && welcome === "none";

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
    if (!isAppAdmin && !seen) {
      onViewerEnter();
    }
  }, [isAppAdmin]);

  return "";
};

export default CrowdTrack;
