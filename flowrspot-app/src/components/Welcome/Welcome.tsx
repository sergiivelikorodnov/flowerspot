function Welcome(): JSX.Element {
    return (
      <section>
      <h1 className="visually-hidden">Discover flowers around you</h1>
      <div className="page-header__content-text">
        <p className="page-header__title">Discover flowers around you</p>
        <p className="page-header__subtitle">Explore between more than 8.427 sightings</p>
        <div className="form__fieldset-container ">
          <input className="form__input" id="form-search" type="search" name="form-search" placeholder="Looking for something specific?"
            required />
          <button className="form__fieldset-container--icon"></button>
        </div>
      </div>
    </section>
    );
  }

  export default Welcome;
