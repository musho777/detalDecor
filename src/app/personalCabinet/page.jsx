"use client"

import { CameraSvg } from "@/assets/Svg"
import { Input } from './components/input'
import UIButton from "@/UI/button"
import { useDispatch, useSelector } from "react-redux"
import { StatusAction, UpdateUserInfo } from '../../services/action/action'
import { useEffect, useState } from "react"
import TeaxAre from '../../UI/textAre/index'
import Image from "next/image"
import Skeleton from '@mui/material/Skeleton';
import MoonLoader from "react-spinners/ClipLoader";



const PersonalCabinet = () => {
  const [companiName, setCompaniName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const user = useSelector((st) => st.user)
  const [files, setFiles] = useState();
  const [whatsapp, setWhatsapp] = useState("")
  const [viber, setViber] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [firstTime, setFirstTime] = useState(true)
  const [error, setError] = useState({ name: false, company: false, description: false, phone: false })

  const updateData = useSelector((st) => st.updateData)

  console.log(error, '000000')

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPhoto(previewUrls[0])
  };

  const dispatch = useDispatch()

  useEffect(() => {
    if (!companiName) {
      setCompaniName(user.data.company_name)
      setPhone(user.data.phone)
      if (user.data.logo) {
        setPhoto(`https://detaldecor.digiluys.com/${user.data.logo}`)
      }
      setSurname(user.data.surname)
      setViber(user.data?.viber)
      setWhatsapp(user.data?.whatsapp)
      setName(user.data.name)
      setDescription(user.data.description)
    }
  }, [user.data])


  const UpdateUser = () => {
    const formData = new FormData();
    formData.append('company_name', companiName);
    if (files) {
      formData.append('logo', files[0]);
    }
    formData.append('phone', phone)
    formData.append('whatsapp', whatsapp)
    formData.append('viber', viber)
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('description', description)
    setFirstTime(false)
    let send = true

    let item = { ...error }

    if (user.data.role_id != 3) {
      if (name == '') {
        send = false
        item.name = true
        dispatch(StatusAction('errorStatus', "name is requride"))
      }
      if (name == '') {
        item.name = false
      }
    }
    else {
      if (companiName == '') {
        send = false
        dispatch(StatusAction('errorStatus', "company name is requride"))
        item.company = true
      }
      else {
        item.company = false
      }

      if (phone == '') {
        send = false
        dispatch(StatusAction('errorStatus', "phone is requride"))
        item.phone = true
      }
      else {
        item.phone = false
      }
      if (description == '') {
        send = false
        item.description = true
        dispatch(StatusAction('errorStatus', "description is requride"))
      }
      else {
        item.description = false
      }
    }
    setError(item)
    if (send) {
      dispatch(UpdateUserInfo(formData))
    }
  }

  const change = (val, type) => {
    console.log(val.length, type)
    val = val.replace(/[^0-9]/g, '');
    if (val.length <= 11) {
      let num = `+${val.substring(0, 3)} ${val.substring(3, 5)} ${val.substring(5, 8)} ${val.substring(8, val.length)}`;
      if (!num.includes("+")) {
        num = "+" + num
      }
      num = num.trim();
      if (type == 'phone') {
        console.log('phon')
        setPhone(num);

      }
      else if (type == 'Whatsapp') {
        setWhatsapp(num)
      }
      else if (type == 'viber') {
        setViber(num)
      }
    }
  };

  if (user.loading && firstTime) {
    return <div className="loading">
      <MoonLoader
        color={"white"}
        loading={true}
        size={40}
      />
    </div>
  }

  else if (user.data.role_id == 3)
    return <div className="PersonalCabinetDiv">
      <p className="Jost500_18" style={{ color: '#FFB800' }} >Личные данные</p>
      <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} ></p>
      <div className="PersonalCabinet">
        <div className="avatarDiv">
          {photo != "" ?
            <Image
              loading="lazy"
              width={120}
              alt="#"
              height={120}
              src={photo}
            /> :
            <div className='ImgLoading'>
              <Skeleton
                sx={{ bgcolor: '#3a3c3d' }}
                variant="circular" width={120} height={120} />
            </div >}
          <div className="CameraSvg">
            <div className='AddPhotoCreateProduct'>
              <label htmlFor="file-upload" className="custom-file-upload">
                <CameraSvg />
              </label>
              <input onChange={handleFileChange} id="file-upload" type="file" />
            </div>
          </div>
        </div>
        <div className="PersonalCabinetInputWrappr">
          <div>
            <Input error={error.company} onChange={(e) => setCompaniName(e)} value={companiName} label={"company name"} />
            <Input onChange={(e) => change(e, 'Whatsapp')} value={whatsapp} label={"Whatsapp"} />
          </div>
          <div>
            <Input error={error.phone} label={"phone number"} onChange={(e) => change(e, 'phone')} value={phone} />
            <Input onChange={(e) => change(e, 'viber')} value={viber} label={"Viber"} />
          </div>
        </div>
        <div className="TeaxAreDiv">
          <TeaxAre error={error.description} value={description} onChange={(e) => setDescription(e)} />
        </div>
        <div className='personalCabinetButton'>
          <UIButton loading={updateData.loading} title={"Сохранить изменения"} onClick={() => UpdateUser()} />
        </div>
      </div>
    </div>
  else {
    return <div className="PersonalCabinetDiv">
      <p className="Jost500_18" style={{ color: '#FFB800' }} >Личные данные</p>
      <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} ></p>
      <div className="PersonalCabinet">
        <div className="PersonalCabinetInputWrappr">
          <div>
            <Input error={error.name} onChange={(e) => setName(e)} value={name} label={"Name"} />
            <Input onChange={(e) => setSurname(e)} value={surname} label={"Surname"} />
          </div>
          <div>
            <Input error={error.phone} label={"phone number"} onChange={(e) => change(e, 'phone')} value={phone} />
          </div>
        </div>
        <div className='personalCabinetButton'>
          <UIButton loading={updateData.loading} title={"Сохранить изменения"} onClick={() => UpdateUser()} />
        </div>
      </div>
    </div>
  }
}
export default PersonalCabinet