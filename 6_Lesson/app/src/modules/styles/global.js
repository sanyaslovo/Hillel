import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  label {
    color: ${({ theme }) => theme.label};
  }
  button {
    background: ${({ theme }) => theme.buttons};
    color: ${({ theme }) => theme.buttonsColor};
  }
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .modal__inputs input[type="text"] {
    border: 1px solid rgb(0 0 0 / 40%) !important;
  }
  * {
    outline: none !important;
    border: 0 !important;
  }
  .App-link {
    color: #61dafb;
  }

  .modal__wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(2px);
  }

  .modal__wrapper.open {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }

  .modal__wrapper.close {
    height: 0;
    display: none;
  }

  .modal__body {
    max-width: 300px;
    background: white;
    padding: 30px;
    border-radius: 3px;
    box-shadow: 1px 1px 20px #282c34;
  }

  input[type="text"] {
    height: 30px;
    margin: 10px 0;
    border: 1px solid rgb(0 0 0 / 40%);
    outline: none;
    padding: 0 10px;
  }

  .modal__inputs {
    display: flex;
    flex-direction: column;
  }

  .modal__btns {
    margin-top: 25px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  table{
    margin: 0 auto;
  }

  th {
    text-align: left;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    border: 0;
  }

  .add-contact {
    position: fixed;
    right: 10px;
    bottom: 10px;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    color: #fff;
    background: green;
    box-shadow: 1px 1px 10px green;
  }
  .toggle_theme {
    position: fixed;
    right: 10px;
    top: 10px;
  }
`;