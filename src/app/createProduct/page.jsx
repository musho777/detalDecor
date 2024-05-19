"use client"
import UIInput from '@/UI/input';
import TeaxAre from '@/UI/textAre'
import './styles.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UIButton from '@/UI/button';
import { XSvg } from '@/assets/Svg';
import { AddProductPermission, Logout } from '@/services/action/action';


const CreateProduct = () => {
  const user = useSelector((st) => st.user)
  const [show, setShow] = useState(false)

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const permission = useSelector((st) => st.permission)
  console.log(permission.permision, 'permission')
  const dispatch = useDispatch()


  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    let item = [...previews]
    if (item.length < 7) {
      item.push(previewUrls)
    }
    setPreviews(item);
  };

  useEffect(() => {
    if (user.data.role_id == 3) {
      setShow(false)
      window.location = "/";
    }
    else if (user.data.role_id == 2) {
      setShow(true)
    }

  }, [user]);

  const RemoveImg = (i) => {
    let item = [...previews]
    item.splice(i, 1)
    setPreviews(item)
  }

  useEffect(() => {
    dispatch(AddProductPermission())
  }, [])

  if (permission.permision == "allow")
    return <div className="createProduct">
      <p id="createProductTitle" style={{ color: "#FFB800" }} className="jeJost600_24">Добавить товар в каталог</p>
      <p id="createProductPhoto">Фото товара</p>
      <div>
        <p style={{ color: "#BFBFBF", marginBottom: 20 }} className='Jost400_16'>Добавьте фото товара в хорошем качетсве и формате (jpeg, png). Не более 8 шт.</p>
        <div className='AddPhotoCreateProductWrapper'>
          {previews.map((elm, i) => {
            return <div className='AddPhotoCreateProduct'>
              <div onClick={() => RemoveImg(i)}>
                <XSvg />
              </div>
              <img src={elm} />
            </div>
          })}

          <div className='AddPhotoCreateProduct'>
            <label htmlFor="file-upload" className="custom-file-upload">
              +
            </label>
            <input onChange={handleFileChange} id="file-upload" type="file" />
          </div>
        </div>
      </div>
      <div className='createProductInputWrapper'>
        <div>
          <UIInput label={"Название товара"} />
          <UIInput label={"Материал"} />
          <UIInput label={"Размеры"} />
          <UIInput label={"Цвет"} />
        </div>
        <div>
          <UIInput label={"Страна производитель"} />
          <UIInput label={"Цена"} />
          <TeaxAre label={"Описание"} />
        </div>
      </div>
      <div>
        <UIButton title={"Опубликовать"} />
      </div>
    </div>
  else if (permission.permision == "forbid") {
    return <div>
      <p>no permition</p>
    </div>
  }
}

export default CreateProduct