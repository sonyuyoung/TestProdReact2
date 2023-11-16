// rsc
// axios 모듈을 써서
// 제이슨 플레이스 홀더 , 뉴스 api받아와서작업을 할 예정
// https://jsonplaceholder.typicode.com/
import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
// 'https://jsonplaceholder.typicode.com/todos/1'
const ApiTest = () => {
  // REST API 서버에서 임시로 받아온 data,setData 확인 히기
  const [data, setData] = useState(null);
  // 이벤트 핸들러
  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     //위에 get 함수로 데이터를 받는것을 성공했다면 then 이 실행이된다
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  // "resultCode": 0,
  // "resultMsg": "NORMAL_CODE",
  // "numOfRows": 10,
  // "pageNo": 3,
  // "totalCount": 11842,
  // "items": [
  //   {
  //     "no": 20,
  //     "gnr": "영미에세이",
  //     "ebk_nm": "곰돌이 푸; 서두르지 않아도 괜찮아",
  //     "aut_nm": "곰돌이 푸 (원작)",
  //     "pblshr": "알에이치코리아",
  //     "pblsh_ymd": "2018-05-08",
  //     "loan_avlbl_yn": "N",
  //     "rsvt_noppl": 3,
  //     "avlbl_envrmt": "PC; 스마트폰; 태블릿",
  //     "cn_intro": "디즈니의 사랑스러운 푸가 전하는 삶의 여유!『곰돌이 푸; 서두르지 않아도 괜찮아』는 꾸밈없이 순수하고 진실한 마음으로 세상을 바라보고 생각하며; 서두르는 법이 없이 늘 여유로운 미소를 짓고 느릿느릿한 몸짓으로 숲속을 거니는 곰돌이 푸의 메시지와 삽화를 엮은 책이다. 오늘날을 살아가는 우리에게 의미 있는 지혜를 담은 푸의 이야기와 함께 삶의 방식에 관한 오래된 경전인 《논어》의 혜안을 담았다.적당한 손해를 감수하더라도 내가 가진 소중한 것을 잃지 않겠다는 일관성 있는 삶의 태도로 살아가는 것. 그것이 겉으로 보기에 영리해 보이지는 않지만 푸의 일이 결국엔 잘되는 이유다. 무심코 스쳐 지나갈 수 있는 바쁜 일상 속에서 “걱정 마. 언젠가는 목적지에 도착할 수 있을 거야. 다만 나를 잃지만 않으면 돼”라고 응원하는 푸의 따뜻하고 진심어린 목소리를 통해 삶을 잠시 돌아볼 여유를 갖고; 빠르지도 느리지도 않은 속도로 오늘을 살아갈 수 있을 것이다.",
  // 이벤트 핸들러 await는 promise를 반환하는 함수 앞에 사용 ()
  /// gnr,ebk_nm,pblsh_ymd,cn_intro
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=qSik2aAqQQwmtaBrNnMavyWzinL%2FEYuIs7t21P%2BmrSAazkprKuKHvm%2BtI8n389pMlbMHGYx6PjivrdAWBAqC%2FQ%3D%3D&pageNo=3&numOfRows=10"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* 버튼으로 가져오고 */}
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            row={8}
            // data :stringify 의 함수의 출력할 data
            // null : 모양을 의미하고 문자열을 의미
            // 2: 들여쓰기
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default ApiTest;
