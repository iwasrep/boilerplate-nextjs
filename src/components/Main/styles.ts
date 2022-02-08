import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #000526;
  background-image: url('/images/backgrounds/background-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10rem 2rem;
`
export const Logo = styled.img`
  width: min(50rem, 100%);

  @media (max-width: 800px) {
    margin: 25px auto;
  }
`
export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`
