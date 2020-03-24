import React from 'react'

export interface IUpload {
    accept: string
    type: 'drag' | 'select'
    action?: any
    method: 'POST' | 'PUT' | 'post' | 'put',
    directory?: boolean // https://caniuse.com/#feat=input-file-directory
    beforeUpload?: () => void
    customRequest?: () => void
    data?: any
    disabled?: boolean
    headers?: any
    defaultFileList?: any
    fileList?: object[]
    listType?: string
    multiple?: boolean // from IE 10+
    name?: string // name of uploading file
    previewFile?: (file: File | Blob) => Promise<{ dataUrl: string }>
    showUploadList?: any
    supportServerRender?: boolean
    withCredentials?: boolean
    openFileDialogOnClick?: boolean
    onChange?: () => void
    onPreview?: () => void
    onRemove?: () => void
    onDownload?: () => void
    transformFile?: any
    iconRender?: React.ReactNode
    children?: React.ReactNode
}
