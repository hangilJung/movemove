'use strict';
import LiquidFillGauge from 'react-liquid-gauge';

export default class CommonLib {
  constructor() {}
  getWaterText(waterData) {
    let imgName = 'level_1';

    if (waterData > 80) {
      imgName = 'level_5';
    }

    if (waterData <= 80) {
      imgName = 'level_4';
    }

    if (waterData <= 50) {
      imgName = 'level_3';
    }

    if (waterData <= 40) {
      imgName = 'level_2';
    }

    if (waterData <= 30) {
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

  getWaterTextBottom(waterData) {
    let imgName = 'level_1';

    if (waterData > 80) {
      imgName = 'level_5';
    }

    if (waterData <= 80) {
      imgName = 'level_4';
    }

    if (waterData <= 50) {
      imgName = 'level_3';
    }

    if (waterData <= 40) {
      imgName = 'level_2';
    }

    if (waterData <= 30) {
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

  getTriangleImg(waterData) {
    let imgName = 'triangle_1';

    if (waterData > 80) {
      imgName = 'triangle_5';
    }

    if (waterData <= 80) {
      imgName = 'triangle_4';
    }

    if (waterData <= 50) {
      imgName = 'triangle_3';
    }

    if (waterData <= 40) {
      imgName = 'triangle_2';
    }

    if (waterData <= 30) {
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

  getSafeImage(waterData) {
    if (waterData < 80) {
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

  getWaterColor(waterData) {
    let colorRgb = 'rgb(21, 171, 0)';

    if (waterData > 80) {
      colorRgb = 'rgb(255, 43, 0)';
    }

    if (waterData <= 80) {
      colorRgb = 'rgb(200, 64, 13)';
    }

    if (waterData <= 50) {
      colorRgb = 'rgb(255, 120, 0)';
    }
    if (waterData <= 40) {
      colorRgb = 'rgb(0, 59, 174)';
    }
    if (waterData <= 30) {
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
        value={waterData}
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
        value={waterData}
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

  getPlaceName(placeName) {
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
          풍덕교
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
}
