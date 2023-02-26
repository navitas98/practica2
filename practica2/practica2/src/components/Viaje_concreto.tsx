import Link from 'next/link';
import styled from 'styled-components'
type Viajes_Index={
    imagen:string;
    titulo:string;
    descripcion:string;
  }
const Viajes_concreto=(props:Viajes_Index)=>(
    <>
        <Div>
            <H>{props.titulo}</H>
            <Img src={props.imagen} alt="" />
            <P>{props.descripcion}</P>
            <Link href={'/'}><Button>Volver</Button></Link>
        </Div>
    </>
  )
  export default Viajes_concreto;

  const Div=styled.div`
    position: fixed;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  `
   const H=styled.h1`
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #000;
   `
  const Img=styled.img`
    width: 700px;
    height: 500px;
    border-radius: 50%;
    border: 3px solid #000;
  `
 
  const P=styled.p`
    background-color: #aaa;
    border-radius: 15px;
    height: 250px;
    border: 3px solid #000;
    padding: 30px;
  `
  const Button=styled.button`
    width: 250px;
    height: 50px;
    border: 3px solid #000;
  `