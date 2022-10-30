import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default function Editor(prop) {
  try {
    return (
      <div className="Editor">
        <div className="des_tour">
          <p className="tour_text"> {prop.data} </p>
          <hr />
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData()
          }}
        />
        <hr />
      </div>
    )
  } catch (e) {
    return 'error'
  }
}
