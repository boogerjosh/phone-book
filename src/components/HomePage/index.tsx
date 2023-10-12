"use client";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, SerializedStyles } from '@emotion/react';
import React from "react";

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles;
  }
}

const Container = styled.div`
  display: flex;
  align-items: start;
  padding-top: 1rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
`
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`
const CardContainer = styled.div`
  border-radius: calc(var(--radius) + 4px);
  border-width: 1px;
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

const HeadingAsH3 = styled.h3`
  letter-spacing: -.025em;
  line-height: 1;
  font-weight: 600;
`

const Text = styled.p`
  color: hsl(var(--muted-foreground));
  font-size: .875rem;
  line-height: 1.25rem;
  margin-top: 0.375rem;
`

const CardContent = styled.div`
  padding-top: 0;
  padding: 1.5rem;
`

const SearchField = styled.div`
  display: flex;
`

const Input = styled.input`
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  font-size: .875rem;
  line-height: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  border-width: 1px;
  border-radius: calc(var(--radius) - 2px);
  width: 100%;
  display: flex;
  border-style: solid;
`

const ButtonSearch = styled.button`
  background-color: #FFFFFF;
  border: 1px solid rgb(209,213,219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .5rem .75rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: rgb(249,250,251);
  }
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  :focus-visible {
  box-shadow: none;
  }
  margin-left: 0.5rem;
`

const HorizontalLine = styled.div`
  background-color: hsl(var(--border));
  width: 100%;
  height: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const HeadingAsH4 = styled.h4`
    font-weight: 500;
    font-size: .875rem; 
    line-height: 1.25rem;
`

const GridLayout = styled.div`
    gap: 1.5rem;
    display: grid;
`

const ListLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

const ProfileLayout = styled.div`
  align-items: center;
  display: flex;
`

const ProfileImage = styled.span`
  border-radius: 9999px;
  overflow: hidden;
  width: 2.5rem;
  flex-shrink: 0;
  height: 2.5rem;
  display: flex;
  background-color: rgb(156 163 175);
  color: #FFF;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const ProfileName = styled.p`
  line-height: 1;
  font-weight: 500;
  line-height: 1.25rem;
  font-size: .875rem;
`

const ProfileNumber = styled.p`
  color: hsl(var(--muted-foreground));
  line-height: 1.25rem;
  font-size: .875rem;
`

const ButtonDots = styled.button`
    background: none;
    border: 0 none;
    line-height: normal;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    width: 100%;
    text-align: left;
    outline: none;
    cursor: pointer;
`

const styles = {
  moreMenu: css({
    position: 'absolute',
    zIndex: 900,
    float: 'left',
    padding: '10px 0',
    backgroundColor: '#fff',
    border: '1px solid #ccd8e0',
    borderRadius: '4px',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.25)',
    opacity: 0,
    transform: 'translate(0, 15px) scale(.95)',
    // transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    pointerEvents: 'none',

  }),
  
  showMoreMenu: css({
    width: '100px',
    position: 'absolute',
    // top: '100%',
    zIndex: 900,
    // float: 'left',
    padding: '10px 0',
    marginTop: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccd8e0',
    borderRadius: '4px',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.25)',
    opacity: '1',
    transform: 'translate(0, 0) scale(1)',
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    pointerEvents: 'auto',
  }),

  moreMenuCaret: css({
    position: 'absolute',
    top: '-10px',
    left: '12px',
    width: '18px',
    height: '10px',
    float: 'left',
    overflow: 'hidden'
  }),

  moreBtn: css({
    background: 'none',
    border: '0 none',
    lineHeight: 'normal',
    overflow: 'visible',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    width: '100%',
    textAlign: 'left',
    outline: 'none',
    cursor: 'pointer',
  }),

  moreDot: css({
    backgroundColor: '#aab8c2',
    margin: '0 auto',
    display: 'inline-block',
    width: '7px',
    height: '7px',
    marginRight: '1px',
    borderRadius: '50%',
    transition: 'backgroundColor 0.3s',
  }),

  moreMenuCaretOuterInner : css({
      position : "absolute",
      display : "inline-block",
      marginLeft : "-1px",
      fontSize : "0",
      lineHeight : "1"
  }),

  moreMenuCaretOuter: css({
      borderBottom : "10px solid #c1d0da",
      borderLeft : "10px solid transparent",
      borderRight : "10px solid transparent",
      height : "auto",
      left : "0",
      top : "0",
      width : "auto"
  }),

  moreMenuCaretInner : css({
      top : "1px",
      left : "1px",
      borderLeft : "9px solid transparent",
      borderRight : "9px solid transparent",
      borderBottom : "9px solid #fff"
  }),

  moreMenuItems : css({
      margin : "0",
      listStyle : "none",
      padding: "0",
      width: '100%',
  }),

  moreMenuItem : css({
    display: "block",
  }),
}

const moreMenuBtn = (props) => css({
  minWidth: "100%",
  color: props.isButton === "delete" ? "red" : "#66757f",
  cursor: "pointer",
  display: "block",
  fontSize: "13px",
  lineHeight: "18px",
  padding: "5px 5px",
  position: "relative",
  whiteSpace: "nowrap",
  border: "none",
  background: "#fff",
  '&:hover': {
    background: '#2074a0',
    color: "white",
  },
});



const HomePage = () => {
  const [isDropdownOpenRegular, setDropdownOpenRegular] = React.useState(false);
  const [isDropdownOpenFavorite, setDropdownOpenFavorite] = React.useState(false);

  const toggleDropdownRegular = () => {
    setDropdownOpenRegular(!isDropdownOpenRegular);
  };

  const toggleDropdownFavorite = () => {
    setDropdownOpenFavorite(!isDropdownOpenFavorite);
  };

  return (
    <Container>
      <ContentContainer>
        <CardContainer>

          <CardHeader>
            <HeadingAsH3>Phone Directory</HeadingAsH3>
            <Text>Welcome to the your phone book! Find anyone, anywhere.</Text>
          </CardHeader>

          <CardContent>
            <div style={{marginBottom: "1.5rem"}}>
              <HeadingAsH4>Favorite contact⭐</HeadingAsH4>
              <GridLayout>
                <ListLayout>
                  <ProfileLayout>
                    <ProfileImage>
                      OM
                    </ProfileImage>
                    <div style={{marginLeft: "1rem"}}>
                      <ProfileName>Olivia Martin</ProfileName>
                      <ProfileNumber>+628 1234 5678</ProfileNumber>
                    </div>
                  </ProfileLayout>

                  <div className="more">
                    <button id="more-btn" css={styles.moreBtn} onClick={toggleDropdownFavorite}>
                      <span css={styles.moreDot}></span>
                      <span css={styles.moreDot}></span>
                      <span css={styles.moreDot}></span>
                    </button>

                    <div css={isDropdownOpenFavorite ? styles.showMoreMenu : styles.moreMenu}>
                        <div css={styles.moreMenuCaret}>
                            <div css={styles.moreMenuCaretOuter}></div>
                            <div css={styles.moreMenuCaretInner}></div>
                        </div>

                        {/* Dropdown */}
                        <ul role="menu" aria-labelledby="more-btn" aria-hidden="true" css={styles.moreMenuItems}>
                            <li role="presentation" css={styles.moreMenuItem}>
                                <button type="button" role="menuitem" css={moreMenuBtn({ isButton: "edit" })}>Edit</button>
                            </li>
                            <li role="presentation" css={styles.moreMenuItem}>
                                <button type="button" role="menuitem" css={moreMenuBtn({ isButton: "delete" })}>Delete</button>
                            </li>
                        </ul>
                    </div>
                  </div>

                </ListLayout>
              </GridLayout>
            </div>

            <SearchField>
              <Input placeholder="Search contact" type="text" />
              <ButtonSearch type="button">Search</ButtonSearch>
            </SearchField>
            <HorizontalLine role="none" data-orientation="horizontal" />
            <div>
              <HeadingAsH4>Regular contact</HeadingAsH4>
              <GridLayout>
                <ListLayout>
                  <ProfileLayout>
                    <ProfileImage>
                      OM
                    </ProfileImage>
                    <div style={{marginLeft: "1rem"}}>
                      <ProfileName>Olivia Martin</ProfileName>
                      <ProfileNumber>+628 1234 5678</ProfileNumber>
                    </div>
                  </ProfileLayout>

                  <div className="more">
                    <button id="more-btn" css={styles.moreBtn} onClick={toggleDropdownRegular}>
                      <span css={styles.moreDot}></span>
                      <span css={styles.moreDot}></span>
                      <span css={styles.moreDot}></span>
                    </button>

                    <div css={isDropdownOpenRegular ? styles.showMoreMenu : styles.moreMenu}>
                        <div css={styles.moreMenuCaret}>
                            <div css={styles.moreMenuCaretOuter}></div>
                            <div css={styles.moreMenuCaretInner}></div>
                        </div>

                        {/* Dropdown */}
                        <ul role="menu" aria-labelledby="more-btn" aria-hidden="true" css={styles.moreMenuItems}>
                            <li role="presentation" css={styles.moreMenuItem}>
                                <button type="button" role="menuitem" css={moreMenuBtn({ isButton: "favorite" })}>Add to favorite</button>
                            </li>
                            <li role="presentation" css={styles.moreMenuItem}>
                                <button type="button" role="menuitem" css={moreMenuBtn({ isButton: "edit" })}>Edit</button>
                            </li>
                            <li role="presentation" css={styles.moreMenuItem}>
                                <button type="button" role="menuitem" css={moreMenuBtn({ isButton: "delete" })}>Delete</button>
                            </li>
                        </ul>
                    </div>
                  </div>

                </ListLayout>
              </GridLayout>
            </div>
          </CardContent>
        </CardContainer>
      </ContentContainer>
    </Container>
  )
}

export default HomePage