import styled from 'styled-components'
type Viajes_Index={
    imagen:string;
    titulo:string;
    descripcion:string;
  }
  const Viajes=(props:Viajes_Index)=>(
    <>
        
        <Div >
            <Img src={props.imagen} alt="" />
            <div className="contenido">
                <H>{props.titulo}</H>
                <P>{props.descripcion}</P>
            </div>
        </Div>
    </>
  )
  export default Viajes;
  const Div=styled.div`
    display: flex;
    flex-direction: row;
    border: 3px dashed #000;
    margin-top: 52px;
    border-radius: 10px;
    background-color: #aaa;
    width: 99vmax;
    align-items: center;
    
  `
const H=styled.h2`
    margin: 30px;
    margin-left: 0;
    letter-spacing: 15px;
    text-transform: uppercase;
    text-decoration: underline 2px #aaa;
`
const P=styled.p`
    display: flex;
    align-items: flex-end;
    letter-spacing: 3px;
    color: #000;
`
const Img=styled.img`
    width: 250px;
    height: 150px;
    margin: 25px;
    border: 5px solid #000;
`