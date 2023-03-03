import Link from "next/link";
import styled from "styled-components";

type destino=
{
  id: number,
  titulo: string,
  descripcion: string,
  descripcionLarga: string,
  imagen_corta: string, // URL de la imagen corta
  imagen_larga: string // URL de la imagen larga
}


const DestinoDetalleStyled = styled.div`
width:400px;

margin-top: 2%;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

border-radius: 20px;
background:#fff;
`;
const Chincheta=styled.div`
border-radius: 50%;
width: 30px;
height: 30px;
background: radial-gradient(circle, #4672eb, #4a5172);
border: solid 3px #010a24;
`


const DestinoImage = styled.img`
border: 10px solid white;
border-radius: 15px;
max-width: 100%;
width: 400px;
height: 400px;
margin-bottom: 2px;
`;

const DestinoTitle = styled.h1`
font-size: 2rem;

color: #000;
`;

const DestinoDescription = styled.p`
font-size: 1.2rem;
margin: 0;
color: #000;
`;


const BackLink = styled(Link)`
color:white;
margin-top: 40px;
background-color: black;
font-size: 1.2rem;
padding: 10px;
border-radius: 10px;
cursor: pointer;
&:hover {
  background-color: grey;
}
`;
export default function DestinoDetalle({ destino }: { destino: destino }) {
  return (
    <div>
        <DestinoDetalleStyled>
        
        <Chincheta></Chincheta>
        <DestinoImage src={destino.imagen_larga} alt={destino.titulo} />
        <BackLink href="/">Volver</BackLink>
      <DestinoTitle>{destino.titulo}</DestinoTitle>
      </DestinoDetalleStyled>
      <DestinoDescription>{destino.descripcionLarga}</DestinoDescription>
      
    </div>
  );
}