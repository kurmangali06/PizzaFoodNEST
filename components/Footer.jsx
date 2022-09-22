import { UilFacebook, UilGithub,UilInstagram} from '@iconscout/react-unicons'
import Image from 'next/image'
import css from '../styles/Footer.module.css'
import Logo from '../assets/Logo.png'

export const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45}/>
        <UilGithub size={45}/>
        <UilInstagram size={45}/>
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="logo" width={50} height={50}/>
        <span>Food</span>
      </div>
    </div>
  )
}
