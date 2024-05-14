"use client"
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../Auth/index'
import { useEffect, useState } from 'react'
import { GetCountry, Register } from '@/services/action/action'
import Swicher from '../swicher'
import UIButton from '@/UI/button'
import UIInput from '@/UI/input'
import UISelect from '@/UI/select'
import { Validation } from '../../functions/validation'
import axios from 'axios'
import InputMask from 'react-input-mask';



const Registr = ({ open, close, changeModal }) => {
  const country = useSelector((st) => st.country)
  const [role_id, setRole_id] = useState(2)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCountry())
  }, [])


  useEffect(() => {
    if (role_id == 2) {
      setData([
        { input: true, type: 'string', placeholder: 'name', value: '', id: "name" },
        { input: true, type: 'string', placeholder: 'surname', value: '', id: "surname" },
        { input: true, type: 'email', placeholder: 'Электронная почта', value: '', id: "email" },
        { mask: true, type: 'string', placeholder: 'phone', value: '', id: "phone", },
        { input: true, type: 'password', placeholder: 'password', value: '', id: "password" },
        { input: true, type: 'password', placeholder: 'password_confirmation', value: '', id: "password_confirmation" },
      ])
    }
    else {
      setData([
        { input: true, type: 'string', placeholder: 'company_name', value: "", id: "company_name" },
        { input: true, type: 'email', placeholder: 'Электронная почта', value: "", id: 'email' },
        { mask: true, type: 'string', placeholder: 'phone', value: "", id: "phone" },
        { select: true, type: 'select', placeholder: 'country', value: [], id: "country" },
        { input: true, type: 'password', placeholder: 'password', value: "", id: 'password' },
        { input: true, type: 'password', placeholder: 'password_confirmation', value: "", id: "password_confirmation" },
      ])
    }
  }, [role_id])
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const SendData = () => {
    let item = [...data]
    item.map((elm, i) => {
      if (elm.input || elm.mask) {
        if (Validation(elm.value, elm.type)) {
          elm.error = true
        }
        else {
          elm.error = false
        }
        if (elm.type == 'password') {
          if (item[i + 1]) {
            if (elm.value?.length < 8) {
              elm.error = true
            }
            else if ((elm.value != item[i + 1].value)) {
              elm.errorText = "password not same"
              elm.error = true
            }
            else {
              elm.errorText = ""
              elm.error = false
            }
          }
        }
        if (elm.type == 'email') {
          if (!validateEmail(elm.value)) {
            elm.error = true
            if (elm.value?.length > 0) {
              elm.errorText = "mail is incorect"
            }
            else {
              elm.errorText = ""
            }
          }
          else {
            elm.error = false
            elm.errorText = ""
          }
        }
      }
      else if (elm.select) {
        console.log(elm)
        if (!elm.value.length) {
          elm.error = true
        }
        else {
          elm.error = false
        }
      }
    })
    setData(item)
    let send = true
    item.map((elm, i) => {
      if (elm.error) {
        send = false
      }
    })

    if (send) {
      dispatch(Register({
        role_id: role_id,
        name: item.find(elm => elm.id == "name")?.value,
        email: item.find(elm => elm.id == "email")?.value,
        surname: item.find(elm => elm.id == "surname")?.value,
        phone: item.find(elm => elm.id == "phone")?.value,
        country_id: [1],
        password: item.find(elm => elm.id == "password")?.value,
        password_confirmation: item.find(elm => elm.id == "password_confirmation")?.value,
        company_name: item.find(elm => elm.placeholder == "company_name")?.value
      }))
    }

  }
  const changeValue = (e, i) => {
    let item = [...data]
    item[i].value = e
    setData(item)
  }

  const changeSelectValue = (e, i) => {
    console.log(e)
    let item = [...data]
    if (!item[i].value.includes(e)) {
      item[i].value.push(e)
    }
    else {
      let index = item[i].value.findIndex(el => el.name == e.name)
      console.log(index)
      item[i].value.splice(index, 1)
    }
    setData(item)
  }


  const [data, setData] = useState([])
  return <Auth data={country.data} type="reg" changeModal={changeModal} open={open} close={close} input={data} >
    <div>
      <p id="LoginTitle" className="Jost600">Регистрация</p>
      <Swicher setRole_id={(e) => setRole_id(e)} mb={20} mt={10} />
      <div className="AuthInput">
        {data?.map((elm, i) => {
          if (elm.input)
            return <UIInput errorText={elm.errorText} onChange={(e) => changeValue(e, i)} error={elm.error} key={i} type={elm.type} placeholder={elm.placeholder} />
          if (elm.select) {
            return <div>
              <UISelect
                multy
                onChange={(e) => changeSelectValue(e, i)}
                error={elm.error}
                data={country.data}
                key={i}
                type={elm.type}
                placeholder={elm.placeholder}
                selectedData={elm.value}
              />
              <p className='InputerrorText'></p>
            </div>
          }
          if (elm.mask) {
            return <div>
              <InputMask
                className='input'
                value={elm.value}
                mask="+374 (99) 999-999"
                placeholder={'PhoneNumber'}
                onChange={e => changeValue(e.target.value, i)}
                id={elm.error ? 'errorInput' : ''}
              />
              <p className='InputerrorText'></p>
            </div>
          }
        })}
      </div>
      <UIButton onClick={() => SendData()} full title={"Войти"} />
      <p className="Jost400" id="RegistrP">Уже зарегистрирован? <span onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        changeModal()
      }}>Войти</span></p>
    </div>
  </Auth>
}

export default Registr