"use client"
import Link from 'next/link'
import '../styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
export const Navigator = () => {
  const [count, setCount] = useState(1)
  const params = useParams()
  useEffect(() => {
    console.log(params, '10')
  }, [params])
  return <div className="navigator">
    <p id="NavigatorTitle" className="Jost600_24">Личный кабинет</p>
    <div className='navigatorDiv'>
      <p id="actieceNavigation" className="Jost500_18" >Личные данные</p>
      <p className="Jost500_18" >Тарифы</p>
      <p className="Jost500_18">Мои товары</p>
      <p className="Jost500_18" >Статистика продаж</p>
      <p className="Jost500_18">Безопасность</p>
    </div>
  </div>
}