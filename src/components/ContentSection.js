const ContentSection = ({ product }) => {
  return (
    <section className="content_section">
      {product && (
        <article>
          <div className="headings">
            <h1>{product.productName}</h1>
            <h4>{product.productSub}</h4>
          </div>
          <p>{product.productDesc}</p>
        </article>
      )}
    </section>
  );
};
export default ContentSection;
