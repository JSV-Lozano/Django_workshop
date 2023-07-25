import axios from "axios";
import React, { useState } from "react";

function useVacationsPlan() {
  const [data, setData] = useState([]);
  const fetcData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/vacationplan/api/v1/vacation/"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, fetcData };
}

export { useVacationsPlan };
