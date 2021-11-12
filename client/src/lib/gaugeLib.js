// 'use strict';

export default class GaugeLib {
  getGauge(liquidFillGauge, triangleImg, waterColor, waterText, safeImg) {
    return (
      <div>
        <div
          style={{
            position: 'relative',
            width: 72,
            height: 72,
          }}
        >
          <div>
            <div
              style={{
                position: 'absolute',
                zIndex: 60,
                margin: '0 auto',
                backgroundColor: '#eee',
                borderRadius: '50%',
              }}
            >
              {liquidFillGauge}
            </div>

            <div
              style={{
                position: 'absolute',
                zIndex: 60,
                margin: '0 auto',
                top: 62,
                zIndex: 30,
              }}
            >
              {triangleImg}
            </div>

            <div
              style={{
                display: 'absolute',
                textAlign: 'center',
                width: 70,
                paddingTop: 40,
              }}
              className="waterText"
            >
              <text
                style={{
                  color: `${waterColor}`,
                  margin: 0,
                  fontSize: 12,
                }}
              >
                {waterText}
              </text>
            </div>
          </div>
        </div>
        <div>
          <img
            src="img/Label.png"
            style={{
              width: 100,
              height: 'auto',
              marginLeft: -15,
              marginTop: 15,
            }}
            alt="profile"
          />
          <div style={{ marginTop: -31 }}>
            <div style={{ marginLeft: -27 }}>{safeImg}</div>
            <p
              style={{
                width: 100,
                height: 'auto',
                margin: '-27px 0 0 5px',
                fontFamily: 'Noto Sans CJK KR',
                fontStyle: 'normal',
              }}
            >
              순천만 습지
            </p>
          </div>
        </div>
      </div>
    );
  }

  getGaugeBottom(liquidFillGauge, waterText, waterData, waterColor) {
    return (
      <div>
        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: -1,
              margin: '0 auto',
            }}
          >
            {liquidFillGauge}
          </div>

          <div
            style={{
              display: 'absolute',
              textAlign: 'center',
              width: 110,
              paddingTop: 70,
            }}
            className="waterText"
          >
            <text
              style={{
                color: `${waterColor}`,
                margin: 0,
              }}
            >
              {waterText}
            </text>
          </div>
        </div>
      </div>
    );
  }
}
