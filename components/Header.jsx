import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag,UilReceipt } from '@iconscout/react-unicons'
import {useStore} from '../store/store'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Header(){
  const [Order, setOrder] = useState('')

  useEffect(()=> {
   setOrder(localStorage.getItem("order")) 
  }, [])
  const state = useStore((state) => state)
  const items = useStore((state)=> state.cart.pizzas.length)
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="logo" width={50} height={50}/>
        <span>Food</span>
      </div>
      <ul className={css.menu}>
        <li>
          <Link href='../'>Home</Link>
          </li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightSide}>
        <Link href="/cart">
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2e2e2e"/>
          <div className={css.badge}>{items}</div>
        </div>
        </Link>
        {Order && (
                  <Link href={`/order/${Order}`}>
                  <div className={css.cart}>
                    <UilReceipt size={35} color="#2e2e2e"/>
                    <div className={css.badge}>{Order != "" && 
                      <div className={css.badle} >1</div>
                    }</div>
                  </div>
                  </Link>
        )}
      </div>
    </div>
  )
}

