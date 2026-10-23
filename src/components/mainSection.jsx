import foto1 from "../assets/invierno.jpg";
import foto2 from "../assets/otonio.jpg";
import foto4 from "../assets/verano.jpg";
import foto3 from "../assets/primavera.jpg";

function MainSection() {
  const images = [foto1, foto2, foto3, foto4];

  return (
    <>
      <div className="mainSection">
        
            {images.map((img,i) =>(
                <img key={i} src={img} alt="imagen" />
            ))}
       
      </div>
    </>
  );
}

export default MainSection;
