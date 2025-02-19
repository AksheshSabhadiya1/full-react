import React from "react";
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function RTE({ name, control, label, defaultvalue = '' }) {

    return (
        <div className="w-full">
            {
                label && <label className="inline-block mb-1 pl-1">{label}</label>
            }
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor apikey ='ov58a21etdg1ba07gvtkd3ty5ecice0zb4o8x3mmpqzllv60'
                        initialValue={defaultvalue}
                        onEditorChange={onChange}
                        init={
                            {
                                initialValue: defaultvalue,
                                editable_root: true,
                                menubar: true,
                                height: 500,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: 'body { font-family:Helvetica, Arial, sans-serif; font-size:14px}',
                                tinycomments_mode: 'embedded',
                            }
                        }
                    />
                )}
            />
        </div>
    )
}