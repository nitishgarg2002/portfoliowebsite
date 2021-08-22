const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <footer
        style={{ marginTop: "10px", backgroundColor: "black", color: "white" }}
        className="container-fluid shadow   py-3  sticky-bottom"
      >
        <h5 className="text-center">All Rights Reserved</h5>
        <p className="mb-0 text-center">
          &copy; {year}-{year + 1} Nitish Garg
        </p>
      </footer>
    </>
  );
};

export default Footer;
