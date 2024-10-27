import dance from "./events.css";
export const Events = () => {
  return (
    <>
      <div className="container">
        <div className="event">
          <span className="header">EVENTS</span>
          <div className="section">
            <div className="images">
              <div className="picture">
                <img src="/assets/music.png" />
              </div>
              <span class="label">Music</span>
            </div>
            <div className="images">
              <div className="picture">
                <img src="/assets/fineArts.png" />
              </div>
              <span class="label">Fine Arts</span>
            </div>
            <div className="images">
              <div className="picture">
                <img src="/assets/theatre.png" />
              </div>
              <span class="label">Theatre</span>
            </div>
            <div className="images">
              <div className="picture">
                <img src="/assets/dance.png" />
              </div>
              <span class="label">Dance</span>
            </div>
            <div className="images">
              <div className="picture">
                <img src="/assets/literary.png" />
              </div>
              <span class="label">Literary</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
