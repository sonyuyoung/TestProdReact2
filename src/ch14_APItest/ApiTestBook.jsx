import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";

const ApiTest = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=qSik2aAqQQwmtaBrNnMavyWzinL%2FEYuIs7t21P%2BmrSAazkprKuKHvm%2BtI8n389pMlbMHGYx6PjivrdAWBAqC%2FQ%3D%3D&pageNo=3&numOfRows=20"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            row={8}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default ApiTest;
