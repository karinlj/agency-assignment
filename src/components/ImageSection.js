const ImageSection = ({ product }) => {
  return (
    <section className="image_section">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="big_image">
              {product && <img src={product.envImage} alt={product.envImage} />}
            </div>
          </div>
          <div className="col-6">
            <div className="small_image">
              {product && (
                <img src={product.prodImage} alt={product.prodImage} />
              )}
            </div>
          </div>
          <div className="col-6">
            {product && (
              <div className="box" style={{ background: product.linkBgColor }}>
                <h2>{product.linkBoxTitle}</h2>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" />
                  </svg>

                  <a href={product.link}>{product.linkText}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageSection;
