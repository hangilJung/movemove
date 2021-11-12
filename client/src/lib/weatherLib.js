export default class WeatherLib {
  getWeather(preData, windData) {
    return (
      <div>
        <div
          style={{
            margin: '42px 0 0 0',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
            position: 'relative',
          }}
        >
          <div style={{ margin: '0 auto', fontSize: 10 }}>
            <img
              src="img/pre.gif"
              style={{
                width: 25,
                height: 25,
                marginBottom: 5,
              }}
              alt="profile"
            />
            <text>강수량 : {preData}mm/h</text>
          </div>
          <hr
            style={{
              width: 110,
              position: 'absolute',
              top: 17,
              zIndex: 9999,
            }}
          />
          <p style={{ margin: '0 auto', fontSize: 10 }}>
            <img
              src="img/wind.gif"
              style={{
                width: 25,
                height: 25,
                margin: '-18px 5px -15px 0',
              }}
              alt="profile"
            />
            바 람 : {windData}m/s
          </p>
        </div>
      </div>
    );
  }
}
