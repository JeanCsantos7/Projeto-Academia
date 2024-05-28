



import { TailSpin } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <>
      

      <div style={{marginTop: "7%", margin: "0 auto", display: "flex", justifyContent: "center", textDecoration: "none"}}>

      
      <TailSpin
  visible={true}
  height="45"
  width="80"
  color="#FF383E"
  ariaLabel="tail-spin-loading"
  radius="1"

  />
      </div>
     
    </>
  );
}
