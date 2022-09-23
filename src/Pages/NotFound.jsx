// import { useEffect } from "react"
import styled from "styled-components"

const NotFoundStyled = styled.div`
  background: whitesmoke;
  width: calc(100% - 200px);
  height: max-content;
  margin: 30px 100px;
  padding: 30px
`

const NFText = styled.div`
  color: #666;
  font-size: 30pt;
  font-weight: 700;
  margin-bottom: 20px;
`

function NotFound() {

  return(
    <NotFoundStyled>
      <NFText>404 - Page Not Found</NFText>
      <p>{window.location.pathname} does not exist</p>
    </NotFoundStyled>
  )
}

export default NotFound