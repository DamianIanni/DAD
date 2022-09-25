import React, { Fragment } from 'react'
import pic from '../images/right-arrow-svgrepo-com.svg'
import pic2 from '../images/contacto.svg'
import pic3 from '../images/lapiz.svg'
import pic4 from '../images/presupuesto.svg'
import pic5 from '../images/serrucho.svg'
import pic6 from '../images/checkout.svg'
import pic7 from '../images/selfie.svg'

export const HowWeWork = () => {
  return (
    <Fragment>
      <div className="mainContainer-hww " id='ComoTrabajamos'>
        <div className="container-hww">
          <div className="individualContainer-hww">
            <div className='contentContainer-hww'>Te pones en contacto con nosotros y nos contas tu proyecto/idea <img className='containerLogo-hww' src={pic2} alt="" /> </div>
            </div>
          <div className="individualContainer-hww"> 
              <div className='ArrowContainer-hww'><img src={pic} alt="" /></div> 
            </div>
          <div className="individualContainer-hww">
          <div className='contentContainer-hww'>Luego de asesorarte, coordinamos para poder ir a tu domicilio y tomar medidas <img className='containerLogo-hww' src={pic3} alt="" /></div>
            </div>
          <div className="individualContainer-hww">
          <div className='ArrowContainer-hww'><img src={pic} alt="" /></div>
            </div>
          <div className="individualContainer-hww">
          <div className='contentContainer-hww'>Te entregamos el presupuesto y conversamos los detalles finales <img className='containerLogo-hww' src={pic4} alt="" /> </div>
            </div>
          <div className="individualContainer-hww">
          <div className='contentContainer-hww'>Comenzamos la fabricacion de tu proyecto/idea <img className='containerLogo-hww' src={pic5} alt="" /></div>
          </div>
          <div className="individualContainer-hww">
            <div className='ArrowContainer-hww'><img src={pic} alt="" /></div>
            </div>
          <div className="individualContainer-hww">
            <div className='contentContainer-hww'>Entrega y colocacion en tu domicilio a coordinar <img className='containerLogo-hww' src={pic6} alt="" /> </div>
            </div>
          <div className="individualContainer-hww">
            <div className='ArrowContainer-hww'><img src={pic} alt="" /></div>
          </div>
          <div className="individualContainer-hww">
            <div className='contentContainer-hww'>Nos ayudas a crecer y que mas gente nos conozca compartiendo una historia y etiquetandonos <img className='containerLogo-hww' src={pic7} alt="" /></div>
            </div>
        </div>
      </div>
    <div className='footerContainer'>
        <h4 className='footer'>Copyright ©. DAD WoodWork todos los derechos reservados.</h4>
        <h4 className='footer'>Tel: 1159258873</h4>
    </div>
    </Fragment>
  )
}
