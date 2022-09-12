import { Navbar, Text, useTheme, Link } from "@nextui-org/react";

const NavBar = () => {
  const { isDark } = useTheme();
  const collapseItems = [{item: "Home", link: "/"}, {item:"Projects", link: "/projects"}, {item:"Resume", link:"/resume"}, {item:"Contact", link:"/contact"},];


  return (
    <Navbar isBordered={isDark} variant="sticky">
      
      <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
      <Navbar.Brand>
        <Text>Collyn Godlewski</Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/resume">Resume</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map(({item, link}) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={link}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
