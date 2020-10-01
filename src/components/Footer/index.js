import React from 'react';
import imgfooter from '../../assets/images/footer.svg';
import { Rodape } from './styles';

function Footer() {
  return (
        <Rodape>
          <img src={imgfooter} alt="footer" />
        </Rodape>
  );
}

export default Footer;
