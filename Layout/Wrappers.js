import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 1em;
	line-height: 50px;
  min-width: 100%;
  color: #fff;
  display: flex;
  background: #E0EAFC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  justify-content: space-around;
  align-items: center;
`
export const Body = styled.div`
  min-height: calc(100vh - 170px);
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2em;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`
export const Button = styled.button`
  background: #FFF;
  display: block;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #000;
:hover {
  box-shadow: 0 2px 0 #000, 0 2px 0px 2px skyblue;
}
:active {
  top: 4px;
  padding-bottom: 0px;
  box-shadow: 0 1px 0 #000;
}
`


export const Header = styled.header`
  width: 100%;
  font-family: Courrier, "Courrier New";
  line-height: 2em;
	background-color: white;
  display: flex;
  justify-content: space-around;
  border-bottom: 4px solid;
  align-items: center;
`

export const Base = styled.div`
	min-width: 100%;
	overflow-x: hidden;
  font-family: Cantarell, Arial, sans-serif;
  font-size: 90%;

  .phenomic-HeadingAnchor {
    display: none;
  }

	blockquote {
		background-color: #eff0f1;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 2em;
		padding-right: 2em;
 	}

  ul {
    line-height: 1.58;
  }


`
