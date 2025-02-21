import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mortgage-calculator" className="text-sm text-gray-600 hover:text-primary">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Better Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

