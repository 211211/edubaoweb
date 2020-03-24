import React from 'react'
import { Upload } from 'antd'
import styled from 'styled-components'
// import {color as themeColor} from 'themes'

const defaultProps = {
  accept: 'application/pdf,image/*', // all image, pdf
  action: '', // api url
  method: 'post',
  type: 'select',
  directory: false,
  // beforeUpload: '',
  // customRequest: '',
  // data: '',
  disabled: false,
  // headers: '',
  // defaultFileList: undefined,
  // fileList: '',
  listType: 'picture', // 'text' | 'picture' | 'picture-card'
  multiple: false,
  name: '',
  // previewFile(file) {
  //   console.log('Your upload file:', file);
  //   // Your process logic. Here we just mock to the same file
  //   return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
  //     method: 'POST',
  //     body: file,
  //   })
  //     .then(res => res.json())
  //     .then(({ thumbnail }) => thumbnail);
  // },
  showUploadList: true,
  // Boolean or { showPreviewIcon?: boolean, showDownloadIcon?: 
  // boolean, showRemoveIcon?: boolean, removeIcon?: 
  // React.ReactNode, downloadIcon?: React.ReactNode }
  supportServerRender: false,
  withCredentials: false,
  openFileDialogOnClick: true,
  // onChange: ():> {),
  // onPreview: ():> {),
  // onRemove: ():> {),
  // onDownload: ():> {),
  // transformFile: '',
  // iconRender: '',
}

export const StyledUpload =
  styled(({
    children,
    ...rest
  }: any) => {
    return (
      <Upload
        {...defaultProps}
        {...rest}
      >
        {children}
      </Upload>
    )
  })`

`
