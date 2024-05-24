import { XSvg } from '@/assets/Svg';

const AddImage = ({ previews, RemoveImg, imageError, handleFileChange }) => {
  return <div className='AddPhotoCreateProductWrapper'>
    {previews?.map((elm, i) => {
      return <div key={i} className='AddPhotoCreateProduct'>
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
}

export default AddImage