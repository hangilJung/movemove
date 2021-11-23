'use strict';
import LiquidFillGauge from 'react-liquid-gauge';
import { FcSettings } from 'react-icons/fc';
import { Button } from 'antd';

// 안전 30 관심 50 주의 60 경계 70 심각80

export default class CommonLib {
  constructor() {}

  getCirclePercent(waterData, Danger, Boundary, Caution, Attention) {
    let circlePercent = '';

    if (waterData >= Danger) {
      circlePercent = 80;
    } else if (waterData >= Boundary) {
      circlePercent = 60;
    } else if (waterData >= Caution) {
      circlePercent = 50;
    } else if (waterData >= Attention) {
      circlePercent = 40;
    } else {
      circlePercent = 30;
    }
    return circlePercent;
  }

  getWaterTextBottom(waterData, Danger, Boundary, Caution, Attention) {
    let imgName = 'level_1';

    if (waterData >= Danger) {
      imgName = 'level_5';
    } else if (waterData >= Boundary) {
      imgName = 'level_4';
    } else if (waterData >= Caution) {
      imgName = 'level_3';
    } else if (waterData >= Attention) {
      imgName = 'level_2';
    } else {
      imgName = 'level_1';
    }

    return (
      <img
        src={'/img/' + imgName + '.png'}
        style={{
          width: 45,
          height: 'auto',
          zIndex: 999,
          position: 'absolute',
          left: 33,
        }}
        alt="profile"
      />
    );
  }

  getWaterText(waterData, Danger, Boundary, Caution, Attention) {
    let imgName = 'level_1';

    if (waterData >= Danger) {
      imgName = 'level_5';
    } else if (waterData >= Boundary) {
      imgName = 'level_4';
    } else if (waterData >= Caution) {
      imgName = 'level_3';
    } else if (waterData >= Attention) {
      imgName = 'level_2';
    } else {
      imgName = 'level_1';
    }

    return (
      <img
        src={'/img/' + imgName + '.png'}
        style={{
          width: 25,
          height: 'auto',
          left: 23,
          zIndex: 999,
          position: 'absolute',
        }}
        alt="profile"
      />
    );
  }

  getTriangleImg(waterData, Danger, Boundary, Caution, Attention) {
    let imgName = 'triangle_1';

    if (waterData >= Danger) {
      imgName = 'triangle_5';
    } else if (waterData >= Boundary) {
      imgName = 'triangle_4';
    } else if (waterData >= Caution) {
      imgName = 'triangle_3';
    } else if (waterData >= Attention) {
      imgName = 'triangle_2';
    } else {
      imgName = 'triangle_1';
    }

    return (
      <img
        src={'/img/' + imgName + '.png'}
        style={{
          width: 20,
          height: 'auto',
          left: 25,
          zIndex: 999,
          position: 'absolute',
        }}
        alt="profile"
      />
    );
  }

  getSafeImage(waterData, Danger) {
    if (waterData < Danger) {
      return (
        <img
          src="img/safe.png"
          style={{ width: 30, height: 'auto' }}
          alt="profile"
        />
      );
    } else {
      return (
        <div>
          <img
            src="img/danger.png"
            style={{ width: 30, height: 'auto' }}
            alt="profile"
          />
          <img
            src="img/red.gif"
            alt="profile"
            style={{
              width: 150,
              position: 'absolute',
              top: -39,
              left: -40,
              zIndex: 50,
            }}
          />
        </div>
      );
    }
  }

  getWaterColor(waterData, Danger, Boundary, Caution, Attention) {
    let colorRgb = 'rgb(21, 171, 0)';

    if (waterData >= Danger) {
      colorRgb = 'rgb(255, 43, 0)';
    } else if (waterData >= Boundary) {
      colorRgb = 'rgb(200, 64, 13)';
    } else if (waterData >= Caution) {
      colorRgb = 'rgb(255, 120, 0)';
    } else if (waterData >= Attention) {
      colorRgb = 'rgb(0, 59, 174)';
    } else {
      colorRgb = 'rgb(21, 171, 0)';
    }
    return colorRgb;
  }

  getGradientStops(color, waterColor) {
    return [
      {
        key: '0%',
        stopColor: color(waterColor),
        stopOpacity: 1,
        offset: '.117',
      },
      {
        key: '50%',
        stopColor: color(waterColor),
        stopOpacity: 1,
        offset: '.117',
      },
      {
        key: '100%',
        stopColor: color(waterColor),
        stopOpacity: 1,
        offset: '.117',
      },
    ];
  }

  getLiquidFillGauge(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  ) {
    return (
      <LiquidFillGauge
        width={70}
        height={70}
        value={circlePercent}
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          // 미터
          const value = Math.round(waterData * 100) / 100;
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 1.7;
          const valueStyle = {
            fontSize: textPixels,
            textShadow:
              '-0.9px -0.9px 0 #fff, 0.9px -0.9px 0 #fff, -0.9px 0.9px 0 #fff, 0.9px 0.9px 0 #eee',
          };
          const percentStyle = {
            fontSize: textPixels * 0.5,
            textShadow:
              '-0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #eee',
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>M</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={1}
        waveAmplitude={4}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: waterColor,
        }}
        waveStyle={{
          fill: waterColor,
        }}
        textStyle={{
          fill: color(waterColor),
          fontFamily: 'Arial',
        }}
        waveTextStyle={{
          fill: color(waterColor),
          fontFamily: 'Arial',
        }}
      />
    );
  }

  getLiquidFillGaugeBottom(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  ) {
    return (
      <LiquidFillGauge
        width={110}
        height={110}
        value={circlePercent}
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          // 미터
          const value = Math.round(waterData * 100) / 100;
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 1.7;
          const valueStyle = {
            fontSize: textPixels,
            textShadow:
              '-0.9px -0.9px 0 #fff, 0.9px -0.9px 0 #fff, -0.9px 0.9px 0 #fff, 0.9px 0.9px 0 #eee',
          };
          const percentStyle = {
            fontSize: textPixels * 0.5,
            textShadow:
              '-0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #eee',
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>M</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={1}
        waveAmplitude={4}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: waterColor,
        }}
        waveStyle={{
          fill: waterColor,
        }}
        textStyle={{
          fill: color(waterColor),
          fontFamily: 'Arial',
        }}
        waveTextStyle={{
          fill: color(waterColor),
          fontFamily: 'Arial',
        }}
      />
    );
  }

  getPlaceText(placeName) {
    if (placeName === 1) {
      return (
        <p
          style={{
            width: 100,
            height: 'auto',
            margin: '-27px 0 0 5px',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          순천만습지
        </p>
      );
    }
    if (placeName === 2) {
      return (
        <p
          style={{
            width: 100,
            height: 'auto',
            margin: '-27px 0 0 15px',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          조곡교
        </p>
      );
    }
    if (placeName === 3) {
      return (
        <p
          style={{
            width: 100,
            height: 'auto',
            margin: '-27px 0 0 15px',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          용당교
        </p>
      );
    }
    if (placeName === 4) {
      return (
        <p
          style={{
            width: 100,
            height: 'auto',
            margin: '-27px 0 0 10px',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          원용당교
        </p>
      );
    }
  }

  getCardTitle(placeName) {
    let cardTitle = '';

    if (placeName === 1) {
      cardTitle = '순천만습지';
    }
    if (placeName === 2) {
      cardTitle = '조곡교';
    }
    if (placeName === 3) {
      cardTitle = '용당교';
    }
    if (placeName === 4) {
      cardTitle = '원용당교';
    }

    return (
      <p
        style={{
          width: 200,
          height: 'auto',
          marginLeft: 5,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        {cardTitle}
      </p>
    );
  }

  getPlaceButton(placeName) {
    let placeButton = '';

    if (placeName === 1) {
      placeButton = '/first';
    }
    if (placeName === 2) {
      placeButton = '/second';
    }
    if (placeName === 3) {
      placeButton = '/third';
    }
    if (placeName === 4) {
      placeButton = '/fourth';
    }

    return { placeButton };
  }

  getCardData(
    waterData,
    waterColor,
    placeName,
    preData,
    cardImg,
    placeButton,
    placeText
    // placeNameText
  ) {
    return (
      <div>
        <div
          style={{
            position: 'relative',
            top: 30,
            padding: 0,
          }}
        >
          <Button
            style={{
              position: 'absolute',
              left: 0,
              top: -38,
              fontSize: 40,
              border: 'none',
            }}
            href={placeButton.placeButton}
          >
            <FcSettings />
          </Button>

          <div
            style={{
              width: 200,
              fontSize: 30,
              color: '#7975F6',
              position: 'absolute',
              top: -43,
              left: 60,
            }}
          >
            {placeText}
          </div>

          <div
            style={{
              position: 'absolute',
              left: 20,
              top: -5,
              fontSize: 20,
              marginTop: 20,
              color: '#ADADAD',
            }}
          >
            <ul>
              <li>수 위 : {waterData} M</li>
              <li>강수량 : {preData} mm</li>
            </ul>
          </div>
          <div>
            <div style={{ position: 'absolute', left: 40, top: 55 }}>
              {cardImg}
            </div>
          </div>
        </div>
      </div>
    );
  }

  getCardImg(waterData, Danger, Boundary, Caution, Attention) {
    let cardImg = '';

    if (waterData >= Danger) {
      cardImg = 'card_5';
    } else if (waterData >= Boundary) {
      cardImg = 'card_4';
    } else if (waterData >= Caution) {
      cardImg = 'card_3';
    } else if (waterData >= Attention) {
      cardImg = 'card_2';
    } else {
      cardImg = 'card_1';
    }

    return (
      <div style={{ position: 'absolute', left: -10, top: -13 }}>
        <img
          src={'/img/' + cardImg + '.png'}
          style={{
            width: 300,
            height: 'auto',
            left: 20,
            top: -20,
            zIndex: 999,
            position: 'absolute',
          }}
          alt="profile"
        />
      </div>
    );
  }

  // getPlaceText(placeName) {
  //   let placeText = '';

  //   if (placeName === 1) {
  //     <p> 순천만습지</p>;
  //   }
  //   if (placeName === 2) {
  //     <p> 조곡교</p>;
  //   }
  //   if (placeName === 1) {
  //     <p> 용당교</p>;
  //   }
  //   if (placeName === 1) {
  //     <p> 원용당교</p>;
  //   }

  //   return <div>{placeText}</div>;
}
//   if (placeName === 1) {
//     return (
//       <p
//         style={{
//           width: 200,
//           height: 'auto',
//           fontFamily: 'Noto Sans CJK KR',
//           fontStyle: 'normal',
//         }}
//       >
//         ㅁㄴㅇㄷㄹ
//       </p>
//     );
//   }

//   if (placeName === 2) {
//     return (
//       <p
//         style={{
//           width: 200,
//           height: 'auto',
//           fontFamily: 'Noto Sans CJK KR',
//           fontStyle: 'normal',
//         }}
//       >
//         조곡교
//       </p>
//     );
//   }
//   if (placeName === 3) {
//     return (
//       <p
//         style={{
//           width: 200,
//           height: 'auto',
//           fontFamily: 'Noto Sans CJK KR',
//           fontStyle: 'normal',
//         }}
//       >
//         용당교
//       </p>
//     );
//   }
//   if (placeName === 4) {
//     return (
//       <p
//         style={{
//           width: 200,
//           height: 'auto',
//           fontFamily: 'Noto Sans CJK KR',
//           fontStyle: 'normal',
//         }}
//       >
//         원용당교
//       </p>
//     );
//   }
// }
// }
