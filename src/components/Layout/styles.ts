import styled from 'styled-components'

export const Wrapper = styled.main`
  animation: layoutAppears 500ms;
  padding: 0 10%;
  display: grid;
  align-items: center;
  height: calc(100vh - 100px);

  @keyframes layoutAppears {
    from {
      opacity: 0;
      transform: translateX(-100vw);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
