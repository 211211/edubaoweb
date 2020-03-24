// @ts-nocheck
import React from 'react'
import { Button } from 'components'
import Upload from 'components/Upload'
import Base from '../Base'

const onRemove = (file: any) => {
  console.log('removed: ', file)
}

const options = {
  name: 'Upload',
  description: 'Upload',
  usage:
    'Upload',
  examples: [
    {
      label: 'Default',
      value: (
        <Upload
          onRemove={onRemove}
        >
          <Button>
            Upload
            </Button>
        </Upload>
      ),
    },
  ],
}
export default () => <Base {...options} />
