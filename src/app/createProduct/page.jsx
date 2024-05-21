"use client"
import UIInput from '@/UI/input';
import TeaxAre from '@/UI/textAre'
import './styles.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UIButton from '@/UI/button';
import { XSvg } from '@/assets/Svg';
import { AddProductPermission, CreateProductApi, GetCategory, GetCurrency, GetFilds, Logout } from '@/services/action/action';
import MoonLoader from "react-spinners/ClipLoader";
import UISelect from '@/UI/select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fildes from './components/fildes'


const CreateProduct = () => {
  const [alignment, setAlignment] = useState('am');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const permission = useSelector((st) => st.permission)
  const dispatch = useDispatch()
  const category = useSelector((st) => st.category)
  const getFild = useSelector((st) => st.getFild)
  const [selectCategoryId, setSelectCategoryId] = useState({ value: '', id: "" })
  const [errselectCategoryId, setErrselectCategoryId] = useState("")
  const [subCategory, setSubCategory] = useState([])
  const [selectedSub, setSelectedSub] = useState({ value: '', id: "", error: "" })
  const [imageError, setImageError] = useState("")
  const [fildes, setFildes] = useState([])
  const [price, setPrice] = useState("")
  console.log(permission)
  const [currency_id, setCurrency_id] = useState("")

  const curency = useSelector((st) => st.curency)

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


  const RemoveImg = (i) => {
    let item = [...previews]
    item.splice(i, 1)
    setPreviews(item)
  }

  const changeSelectValue = (e) => {
    let v = category.data.find(item => item.id === e);
    setSelectCategoryId({ value: v, id: e })
    let item = category.data.find(item => item.id === e);
    setSubCategory(item.category)
    setErrselectCategoryId("")
  }

  useEffect(() => {
    dispatch(GetCategory())
    dispatch(AddProductPermission())
    dispatch(GetCurrency())
  }, [])

  useEffect(() => {
    if (selectCategoryId.id) {
      dispatch(GetFilds(selectCategoryId.id))
    }
  }, [selectCategoryId])

  useEffect(() => {
    setFildes(getFild.data)
  }, [getFild])

  console.log(selectedSub)
  const handelChange = (e, id) => {
    let item = [...fildes]
    if (alignment == 'am') {
      item.find(item => item.id === id).value_am = e;
    }
    else if (alignment == 'ru') {
      item.find(item => item.id === id).value_ru = e;
    }
    else if (alignment == "en") {
      item.find(item => item.id === id).value_en = e;
    }
    setFildes(item)
  }

  const SendData = () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('photo[]', file);
    });
    fildes.forEach(file => {
      if (file.value_am) {
        formData.append(`fields[${file.id}][am]`, file.value_am);
      }
      else {
        formData.append(`fields[${file.id}][am]`, null);
      }
      if (file.value_ru) {
        formData.append(`fields[${file.id}][ru]`, file.value_ru);
      }
      else {
        formData.append(`fields[${file.id}][ru]`, null);
      }
      if (file.value_en) {
        formData.append(`fields[${file.id}][en]`, file.value_en);
      }
      else {
        formData.append(`fields[${file.id}][en]`, null);
      }
    });
    formData.append('parent_category_id', selectCategoryId.id);
    formData.append('category_id', selectedSub.id);
    formData.append('currency_id', currency_id);
    formData.append('price', price);

    let item = [...fildes]
    if (selectCategoryId.id == "") {
      setErrselectCategoryId("error")
    }
    else {
      setErrselectCategoryId("")
    }
    if (selectedSub.id == "") {
      setSelectedSub({ ...selectedSub, error: "error" })
    }
    else {
      setSelectedSub({ ...selectedSub, error: "" })
    }

    item.map((elm, i) => {
      if (!elm.value_am) {
        elm.error_am = "error"
      }
      else {
        elm.error_am = ""
      }
      if (!elm.value_ru) {
        elm.error_ru = "error"
      }
      else {
        elm.error_ru = ""
      }
      if (!elm.value_en) {
        elm.error_en = "error"
      }
      else {
        elm.error_en = ""
      }
    })
    setFildes(item)

    let send = true

    if (previews.length == 0) {
      send = false
      setImageError("imgae is required")
    }

    else {
      send = true
      setImageError("")
    }

    item.map((elm, i) => {
      if (elm.error) {
        send = false
      }
    })
    if (send) {
      dispatch(CreateProductApi(formData))
    }
  }



  if (permission.loading) {
    return <div className='LoadingDiv'>
      <MoonLoader
        color={"white"}
        loading={true}
        size={40}
      />
    </div>
  }

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
            <p style={{ marginTop: 10 }} className='InputerrorText'>{imageError}</p>
          </div>
        </div>
      </div>
      <div className='ToggleButtonGroupWrapper'>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="am">Հայերեն</ToggleButton>
          <ToggleButton value="ru">Русский</ToggleButton>
          <ToggleButton value="en">English</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className='createProductInputWrapper'>
        <div>
          <UIInput value={price} onChange={(e) => setPrice(e)} type={"number"} label={"price"} />
          <UISelect
            error={errselectCategoryId}
            multiple={false}
            onChange={(e) => changeSelectValue(e)}
            data={category.data} label={"cateogry"}
          />
          {fildes?.map((elm, i) => {
            if (i % 2 == 0) {
              return <Fildes
                key={i}
                type={elm.type}
                error={
                  alignment == "am" ?
                    elm.error_am :
                    (alignment == "en" ?
                      elm.error_en :
                      elm.error_ru)
                }
                value={
                  alignment == "am" ?
                    elm.value_am :
                    (alignment == "en" ?
                      elm.value_en :
                      elm.value_ru)
                }
                handelChange={(e) => handelChange(e, elm.id)}
                lable={
                  alignment == "am" ?
                    elm.label_am :
                    (alignment == "en" ?
                      elm.label_en :
                      elm.label_ru)
                }
              />
            }
          })}
        </div>
        <div>
          <UISelect
            error={errselectCategoryId}
            multiple={false}
            onChange={(e) => setCurrency_id(e)}
            data={curency.data} label={"Currency"}
          />
          <UISelect
            onChange={(e) => setSelectedSub({ ...selectedSub, value: e.name, id: e })}
            multiple={false}
            data={subCategory}
            label={"podCategory"}
            error={selectedSub.error}
          />
          {fildes?.map((elm, i) => {
            if (i % 2 != 0) {
              return <Fildes
                key={i}
                type={elm.type}
                error={
                  alignment == "am" ?
                    elm.error_am :
                    (alignment == "en" ?
                      elm.error_en :
                      elm.error_ru)
                }
                value={
                  alignment == "am" ?
                    elm.value_am :
                    (alignment == "en" ?
                      elm.value_en :
                      elm.value_ru)
                }
                handelChange={(e) => handelChange(e, elm.id)}
                lable={
                  alignment == "am" ?
                    elm.label_am :
                    (alignment == "en" ?
                      elm.label_en :
                      elm.label_ru)
                }
              />
            }
          }
          )}
        </div>
      </div>
      <div>
        <p className='errorText' style={{ marginBottom: 30 }}>{permission.data}</p>
        <UIButton onClick={() => SendData()} title={"Опубликовать"} />
      </div>
    </div>
  else if (permission.permision == "forbid") {
    return <div>
      <p>{permission.error}</p>
    </div>
  }
}

export default CreateProduct