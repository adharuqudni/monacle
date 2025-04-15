export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 relative">
          <div>
            <h3 className="text-xl font-bold mb-4">Monocle Agency</h3>
            <p className="text-gray-400 mb-4">
              1234 Market Street, Suite 1000
              <br />
              San Francisco, CA 94103 US
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Digital Campaign
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Social Activation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tech & Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Performance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">+1 (415) 123-4567</li>
              <li>
                <a href="mailto:contact@monocle.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@monocle.com
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-20 blur-3xl"></div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center">© 2023 Monocle Agency</p>
        </div>
      </div>
    </footer>
  )
}
