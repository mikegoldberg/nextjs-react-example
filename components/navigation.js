import {
  Nav,
  Navbar,
  Container
} from "react-bootstrap";
import Link from "next/link";

const navigationLinks = [
  'Home',
  'Browse',
  'Search',
  'Invite',
  'Film',
  'Mail',
  'Blog',
  'Favorites',
  'Forum',
  'Groups',
  'Events',
  'Videos',
  'Music',
  'Classifieds'
].map(name => ({ name, slug: name.toLowerCase() }));

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              {navigationLinks.map(link => (
                <Nav.Link key={link.name}>
                  <Link href={`/#${link.slug}`}>
                    <a className="nav-link sm" role="button">
                      {link.name}
                    </a>
                  </Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
