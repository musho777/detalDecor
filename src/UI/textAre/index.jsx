import './styles.css'
import { useState } from 'react'
import './styles.css'
import { Editor } from '@tinymce/tinymce-react';


const TeaxAre = ({ placeholder, type, onChange, error, errorText, value, label }) => {
  const [types, setTipes] = useState(type)

  return <div className='TeaxtAreaWrapper'>
    {label && <p id="label" className='Jost400'>{label}</p>}
    {/* <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={types}
      className='input'
      id={error ? "errorInput" : ""}
    />
    <p className='InputerrorText'>{errorText}</p> */}


    <Editor
      apiKey='14dhlnaamh5copp091np7prtcxyx6sqf45p16prxqpcyp7oy'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue=""
    />


  </div >
}

export default TeaxAre 