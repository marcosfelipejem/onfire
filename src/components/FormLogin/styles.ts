import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .formLogin {
    background-color: #fff;
    border-radius: 5px;
    padding: 70px 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 30vw;

    ${media.lessThan('medium')`
    width: 100%;
  `}
  }

  .formTitle {
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family};
    font-weight: 700;
    font-size: ${theme.font.sizes.xxlarge};
  }

  .signinBtn {
    font-size: ${theme.font.sizes.xlarge};
    border-radius: 20px;
    width: 60%;
    margin-top: 30px;
  }

  .registerLabel,
  .forgotinputLabel {
    color: ${theme.colors.secondary};
    text-decoration: none;
  }

  .loginCenter {
    text-align: center;
  }
`
