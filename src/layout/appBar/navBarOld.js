import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '#home', text: 'Home', active: true },
  { href: '#about', text: 'About', active: false },
  { href: '#Features', text: 'Features', active: false },
  { href: '#Pricing', text: 'Pricing', active: false },
  { href: '#Download', text: 'Download', active: false},
];

export default class Navs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      scrolled: false,
      active: false 
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.changeActive = this.changeActive.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleScroll() {
    if(window.pageYOffset > 100 ){
      this.setState({scrolled : true});
    }
    else{
      this.setState({scrolled : false});
    }
  }

  changeActive = () => {
    this.setState({active : !this.link.active})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {

    const CreateNavItem = ({ href, text, className, active }) =>  (
        <NavItem>
          <NavLink href={href} className={className} active={active} onClick={console.log()}>
            <span style={{color: this.state.scrolled ? "#4f4f4f" : "#FFF"}}>{text}</span>
          </NavLink>
        </NavItem>
        );

    return (
      <div>
        <Navbar 
          color="light"
          expand="md" 
          // fixed={this.state.scrolled ? "top" : 'default'} 
          // className={this.state.scrolled ? this.props.classNav : this.props.staticNav}
          className={this.props.className}
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {links.map(CreateNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
