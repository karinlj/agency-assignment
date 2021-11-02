const Navlinks = ({ clickLink, products }) => {
  return (
    <>
      <div className="nav_links">
        <ul>
          {products &&
            products.map((item) => {
              return (
                <li key={item.productId} className="link_item">
                  <span
                    onClick={() => clickLink(item.productId)}
                    className="link"
                  >
                    {item.productName}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Navlinks;
