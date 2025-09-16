export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          {/* Cột 1 */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We provide high quality pets for adoption and useful information
              for pet lovers.
            </p>
          </div>

          {/* Cột 2 */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#home" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: info@pets.com</p>
            <p>Phone: +84 123 456 789</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Pets Website | All Rights Reserved
      </div>
    </footer>
  );
}
