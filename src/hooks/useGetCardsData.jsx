import { useState } from "react";
import axios from "axios";

function useGetCardsData() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/travel/api/v1/travel/"
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return { data, fetchData };
}

export  {useGetCardsData};
