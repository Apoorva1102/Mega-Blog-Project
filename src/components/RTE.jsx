import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTE({name, control, label, defaultValue=""}) {
    return(
        <div className="w-ful">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller 
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor 
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500, 
                    menubar: true,
                    placeholder: "start writing...",
                    
                    plugins: [
                    "advlist", "anchor", "autolink", "autosave",
                    "charmap", "code", "codesample",
                    "directionality", "emoticons",
                    "fullscreen", "help", "image",
                    "importcss", "insertdatetime",
                    "link", "lists", "media",
                    "nonbreaking", "pagebreak",
                    "preview", "quickbars",
                    "searchreplace", "table",
                    "visualblocks", "visualchars",
                    "wordcount"
                  ],

                    toolbar: "undo redo restoredraft | blocks fontfamily fontsize | bold italic underline strikethrough subscript superscript | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink anchor | image media table | charmap emoticons | codesample code | searchreplace | insertdatetime | ltr rtl | visualblocks visualchars | pagebreak nonbreaking | preview fullscreen | removeformat help",
                    content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px}"
                }}
                onEditorChange={onChange}
                />
            )}
            />
            
        </div>

    )
}