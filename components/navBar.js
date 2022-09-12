import { Navbar, Text, useTheme, Link } from "@nextui-org/react";

const NavBar = () => {
  const { isDark } = useTheme();
  const collapseItems = [
    "Home",
    "Projects",
    "Resume",
    "Contact",
  ];

  return (

      // <Navbar isBordered={isDark} variant="sticky">
      //     <Navbar.Brand>
      //     <Text>Collyn</Text>
      //   </Navbar.Brand>
      //   <Navbar.Content variant="underline">
      //     <Navbar.Link isActive href="/">Home</Navbar.Link>
      //     <Navbar.Link isActive href="/projects">Projects</Navbar.Link>
      //     <Navbar.Link isActive href="/resume">Resume</Navbar.Link>
      //     <Navbar.Link isActive href="/contact">Contact</Navbar.Link>
      //   </Navbar.Content>
      // </Navbar>

<Navbar variant="sticky">
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs"/>
          <Navbar.Brand>
          <Text>Collyn</Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
          <Navbar.Link href="/resume">Resume</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={index}
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
