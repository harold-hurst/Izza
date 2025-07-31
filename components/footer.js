export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

      
          <div className="flex flex-col h-full justify-between">
            <img src="/svg/izza.svg" alt="Logo" className="h-8 w-auto mb-8 self-start" />
            <p className="text-xs">
              &copy;IZZA is a company limited by garantee registered in England
              and Wales.
            </p>
          </div>
        

        <div className="flex flex-col h-full justify-between">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-xs font-bold">Contact Us</p>
              <hr />
              <p className="font-bold">1234 567890</p>
            </div>
            <div>
              <p className="text-xs font-bold">Follow US</p>
              <hr />
              <div className="flex space-x-4 mt-2">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                >
                  <img
                    src="/svg/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    
                  />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                >
                  <img
                    src="/svg/insta.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    
                  />
                </a>
                
                {/* Twitter */}
                <a
                  href="#"
                  aria-label="Twitter"
                >
                  <img
                    src="/svg/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    
                  />
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/svg/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <span className="text-xs">Made By</span>
            <img
              src="/img/cloudfy-logo-172x42.webp"
              alt="Cloudfy Logo"
              className="h-6 w-auto mb-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
