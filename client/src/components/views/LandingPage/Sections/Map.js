/*global kakao*/
import React, { useEffect } from 'react';
import '../../../../Styles/LandingPage.css';

const Location = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(34.97474, 127.49126),
      level: 7,
    };

    const positions = [
      {
        content:
          '<div class ="label"><span class="left"></span><span class="center">선평교</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(34.9921917, 127.4931337),
      },
      {
        content:
          '<div class ="label"><span class="left"></span><span class="center">용당교</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(34.970743, 127.4894874),
      },
      {
        content:
          '<div class ="label"><span class="left"></span><span class="center">조곡교</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(34.9552238, 127.4887462),
      },
      {
        content:
          '<div class ="label"><span class="left"></span><span class="center">장대공원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(34.9476425, 127.4942711),
      },
    ];

    const map = new kakao.maps.Map(container, options);

    for (var i = 0; i < positions.length; i++) {
      var customOverlay = new kakao.maps.CustomOverlay({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        content: positions[i].content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
      customOverlay.setMap(map);
    }

    // for (var i = 0; i < positions.length; i++) {
    //   //   // 마커를 생성합니다
    //   var customOverlay = new kakao.maps.CustomOverlay({
    //     map: map, // 마커를 표시할 지도
    //     position: positions[i].latlng, // 마커의 위치
    //   });

    //   //   // 마커에 표시할 인포윈도우를 생성합니다
    //   var infowindow = new kakao.maps.InfoWindow({
    //     content: positions[i].content, // 인포윈도우에 표시할 내용
    //   });

    //   //   // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    //   //   // 이벤트 리스너로는 클로저를 만들어 등록합니다
    //   //   // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    //   kakao.maps.event.addListener(
    //     customOverlay,
    //     'mouseover',
    //     makeOverListener(map, customOverlay, infowindow)
    //   );
    //   kakao.maps.event.addListener(
    //     customOverlay,
    //     'mouseout',
    //     makeOutListener(infowindow)
    //   );
    // }

    // // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    // function makeOverListener(map, customOverlay, infowindow) {
    //   return function () {
    //     infowindow.open(map, customOverlay);
    //   };
    // }

    // // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    // function makeOutListener(infowindow) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }

    // // 마커가 지도 위에 표시되도록 설정합니다
    // customOverlay.setMap(map);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '50vh',
          margin: 'auto',
          padding: '0',
        }}
      ></div>
    </div>
  );
};

export default Location;
