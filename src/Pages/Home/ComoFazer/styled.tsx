import styled from 'styled-components'

export const Container = styled.section`
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  box-shadow: 10px 5px 30px rgba(0, 0, 0, .1);

  @media screen and (min-width: 1024px) {
    display: flex;
    width: fit-content;
    height: 27.5rem;
    margin: 0 auto;
    box-shadow: 10px 5px 30px rgba(0, 0, 0, .1);
  }
`

export const FigureContainer = styled.figure`
  img {
    width: 80vw;
    @media screen and (min-width: 1024px) {
      width: auto;
    }
  }
`

export const Wrapper = styled.div`
  padding: 1em 2em;
  background-color: #fff;

  @media screen and (min-width: 1024px) {
    padding: 3em 5em 3em 2em; 
  }
`

export const Titulo = styled.h2`
	font-size: 1.5em;
  color: rgba(32, 32, 32, .5);

  @media screen and (min-width: 1024px){
    font-size: 22px;
  }
`

export const Subtitulo = styled.h3`
	font-family: Elsie Swash Caps;
	font-size: 3em;
	font-weight: 900;
	margin: .25em 0;

	@media screen and (min-width: 1024px) {
		font-size: 42px;
	}
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 2em 0;
`

export const Icone = styled.button`
  background-color: #FFCB47;
  border-radius: 50px;
  border: none;
  display: inline-block;
  height: 1rem;
  width: 1rem;
  margin-right: 1em; 

  @media screen and (min-width: 1024px){
    background-color: #FFCB47;
    border-radius: 50px;
    border: none;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    margin-right: 1em; 
  }
`

export const Paragrafo = styled.p`
  font-size: 1.2em;
  color: rgba(32, 32, 32, .5);

  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`