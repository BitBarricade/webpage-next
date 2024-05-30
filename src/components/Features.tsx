import React from "react";

const Features: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
              <h5 className="mb-3">Digital Marketing</h5>
              <p className="m-0">
                when companies use computers and the internet to tell people
                about their products and try to get them to buy them. They use
                things like websites, social media, and emails to show people
                what they have to offer.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-search text-primary mb-4"></i>
              <h5 className="mb-3">SEO & Backlinks</h5>
              <p className="m-0">
                Search Engine Optimization, which is like a magic trick that
                helps websites show up higher in Google search results.
                Backlinks are like little roads that connect one website to
                another, and the more roads a website has, the more popular it
                looks to Google. So, if a website has lots of backlinks, it can
                help it show up higher in search results and get more visitors.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
              <h5 className="mb-3">Design & Development</h5>
              <p className="m-0">
                is like building a really cool toy on a computer. First, you
                think about what the toy will look like and how it will work.
                Then, you use special tools and programs to create the toy on
                the computer. Finally, you make sure the toy works perfectly and
                looks amazing before you can play with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
