import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Utils/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 flex justify-between items-center bg-bghero text-textmain relative">
      {/* Logo / Brand */}
      <div className="text-lg font-bold text-txthover">AI Interview</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-txthover">
          Home
        </a>
        <a href="#" className="hover:text-txthover">
          Members
        </a>
        <a href="#" className="hover:text-txthover">
          Documents
        </a>
        <a href="#" className="hover:text-txthover">
          About us
        </a>
        <a href="#" className="hover:text-txthover">
          Contact us
        </a>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-3">
        <Button variant="secondary">Sign In</Button>
        <Button variant="primary">Get Started</Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-bghero text-textmain shadow-lg md:hidden z-50">
          <nav className="flex flex-col items-center space-y-4 py-6 text-sm font-medium">
            <a href="#" className="hover:text-txthover">
              Home
            </a>
            <a href="#" className="hover:text-txthover">
              Members
            </a>
            <a href="#" className="hover:text-txthover">
              Documents
            </a>
            <a href="#" className="hover:text-txthover">
              About us
            </a>
            <a href="#" className="hover:text-txthover">
              Contact us
            </a>
            <div className="flex space-x-3 mt-4">
              <Button variant="secondary">Sign In</Button>
              <Button variant="primary">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
