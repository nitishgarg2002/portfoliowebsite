const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="container-fluid shadow bg-light my-0 py-3 text-dark sticky-bottom">
      <h5 className="text-center">All Rights Reserved</h5>
      <p className="mb-0 text-center">
        &copy; {year}-{year + 1} Nitish Garg
      </p>
    </footer>
  );
};

export default Footer;
