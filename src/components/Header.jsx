const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">LandingPage</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;