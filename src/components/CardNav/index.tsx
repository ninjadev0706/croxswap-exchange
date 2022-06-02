import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'crox-new-uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  background-color: transparent;
  margin-bottom: 5px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    {/* <ButtonMenu activeIndex={activeIndex} variant="primary" >
    </ButtonMenu> */}
      <ButtonMenuItem className='nav-grp' id="swap-nav-link" to="/swap" as={Link} style={{ padding: "30px 25px", margin: "1px", color: "white", backgroundColor: "#ffffff33" }}>
        <TranslatedText translationId={8}> Swap </TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem className='nav-grp' id="pool-nav-link" to="/pool" as={Link} style={{ padding: "30px 10px", margin: "1px", color: "white", backgroundColor: "#ffffff33" }}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
    <ButtonMenuItem className='nav-grp' id="ramp-nav-link" to="/ramp" as={Link} style={{ padding: "30px 40px", margin: "1px", color: "white", backgroundColor: "#ffffff33" }}>
      <TranslatedText translationId={74}>Buy with Fiat</TranslatedText>
    </ButtonMenuItem>
  </StyledNav>
)

export default Nav
