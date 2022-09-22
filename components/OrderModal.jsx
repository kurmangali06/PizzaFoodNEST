import { Modal, useMantineTheme } from "@mantine/core"
import { useRouter } from "next/router"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { createOrder } from "../lib/orderHandler"
import { useStore } from "../store/store"

import css from '../styles/Modal.module.css'

export default function OrderModal({opened, setOpened, PaymentMethod}) {
  const router = useRouter();
  const [FormData, setFormData] = useState({})
  const handleInput = (e) => {
    setFormData({...FormData, [e.target.name]: e.target.value})
  }
  const theme = useMantineTheme()
  const total = typeof window !=="undefined" && localStorage.getItem('total')
  const reserCart = useStore((state)=> state.reserCart)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = await createOrder({...FormData, total, PaymentMethod})
    toast.success("Order Placed");
    reserCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id)
    }
    router.push(`/order/${id}`)
  }
  return(
    <Modal
    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
    overlayOpacity={0.55}
    overlayBlur={3}
    opened={opened}
    onClose={()=> setOpened(null)}
    >
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input onChange={handleInput} type="text"  name="name" required placeholder="Name"/>
        <input onChange={handleInput} type="text" name="phone"  placeholder="Phone number"/>
        <textarea onChange={handleInput} name="address"  crows={3} placeholder="Address"></textarea>
        <span>You will pay <span>$ {total}</span> on delivery</span>
        <button type="submit" className="btn">Place Order</button>
      </form>
      <Toaster/>
    </Modal>
  )
}