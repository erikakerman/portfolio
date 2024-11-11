function Header() {
  return (
    <header className="py-6 mb-12">
      <div className="container mx-auto px-4 flex justify-end">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/projects" className="transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/blogs" className="transition duration-300">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="mailto:erikakerman@gmail.com"
                className="transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
