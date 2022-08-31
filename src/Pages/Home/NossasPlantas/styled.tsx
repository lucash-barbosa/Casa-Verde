import styled from 'styled-components'
import seta from 'assets/seta.svg'
import setaParaCima from 'assets/setaUp.png'
import setaParaBaixo from 'assets/setaDown.png'

export const ContainerOfertas = styled.div`
  text-align: center;
  padding: 3rem 0;
`

export const Filtros = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  height: fit-content;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }

  div {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 375px) {
      flex-direction: row;
    }

    input {
      display: none;
    }
    input:checked + label > span {
      background-image: url(${setaParaCima});
    }
  
    label {
      color: #202020;
      margin: .5em 1em;
      cursor: pointer;
  
      span {
        background-image: url(${setaParaBaixo});
        background-size: cover;
        padding: .1px 8px;
        margin-left: .5em;
      }
  }
  }
`

export const SelecionaPreco = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  div {
    display: inline-block;

    input {
      display: inline-block;
      width: 80vw;
      border: 0;
      border-bottom: .5px solid #202020;
      color: #202020;
      padding: 7px 1em;
      margin: 0 -4em 1em 1em;
      border: solid .1px #202020;
      border-radius: 5px;
      background: transparent;

      @media screen and (min-width: 480px) {
        width: 10rem;
        margin-bottom: 0;
      }
    }

    label {
      width: max-content;
      font-size: .9em;
      background-color: #fff;
      position: relative;
      padding: 0 .1em;
      margin: 0;
      height: fit-content;
      top: -18px;
      left: -180px;

      @media screen and (min-width: 480px) {
        left: -85px;
      }
    }
  }

  button {
    border: none;
    background-color: #fff;
    color: #202020;
    padding: .7em 1em;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #FFCB47;
    color: #fff;
  }
`

export const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const FigureImg = styled.figure`
  img {
    width: 10rem;
    height: 13rem;

    @media screen and (min-width: 480px) {
      width: 14rem;
      height: 15rem;
    }
  }
`

export const Wrapper = styled.nav`
  display: flex;
  margin: 1rem;
  width: 90vw;
  background-color: #fff;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, .1);
  cursor: pointer;

 &:hover {
  width: 26rem;
  margin: 0;
  transition: .1s;
 } 

 @media screen and (min-width: 480px) {
  width: 25rem;
 }

  ul {
    text-align: left;
    height: fit-content;
    margin: auto 0;
    padding: 0;
  }
`

export const NomePlanta = styled.li`
  font-family: Elsie Swash Caps;
  font-size: 25px;
  font-weight: 900;

  @media screen and (min-width: 480px) {
    font-size: 32px;
  }
`

export const Preco = styled.li`
  color: rgba(32, 32, 32, 0.5);
  margin: 2em 0;
`

export const Botao = styled.li`
  display: flex;
  align-items: center;
  
  button {
    color: #ffcb47;
    background-color: transparent;
    border: none
  }
`

export const Icone = styled.button`
  background-image: url(${seta});
  background-repeat: no-repeat;
  background-size: contain;
  width: 1em;
  height: .5em;
  margin-left: 1em;
`