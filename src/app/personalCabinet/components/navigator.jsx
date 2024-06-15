"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const Navigator = () => {
  const [count, setCount] = useState(1)
  const pathname = usePathname()
  useEffect(() => {
    if (pathname == '/personalCabinet/Safety') {
      setCount(5)
    }
    else if (pathname == '/personalCabinet/Statistics') {
      setCount(4)
    }
    else if (pathname == '/personalCabinet/Safety') {
      setCount(3)
    }
    else if (pathname == '/personalCabinet/Safety') {
      setCount(2)
    }
    else if (pathname == '/personalCabinet') {
      setCount(1)
    }
  }, [pathname])



  return <div className="navigator">
    <p id="NavigatorTitle" className="Jost600_24">Личный кабинет</p>
    <div className='navigatorDiv'>
      <Link href="/personalCabinet" id={count == 1 && 'actieceNavigation'} className="Jost500_18" >Личные данные</Link>
      <p id={count == 2 && 'actieceNavigation'} className="Jost500_18" >Тарифы</p>
      <p id={count == 3 && 'actieceNavigation'} className="Jost500_18">Мои товары</p>
      <Link href="/personalCabinet/Statistics" id={count == 4 && 'actieceNavigation'} className="Jost500_18" >Статистика продаж</Link>
      <Link href="/personalCabinet/Safety" id={count == 5 && 'actieceNavigation'} className="Jost500_18">Безопасность</Link>
    </div>
  </div>
}