import { useState } from 'react'

import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FileUploader as FileUploaderComponent, UploadMode, useFieldControl } from '../../src'

import type { FileUploaderProps } from '../../src/components/FileUploader/FileUploader'
import type { FileApi } from '../../src/components/FileUploader/types'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FileUploaderProps> = {
  ...META_DEFAULTS,

  title: 'Components/FileUploader',
  component: FileUploaderComponent,

  argTypes: {
    mode: ARG_TYPE.OPTIONAL_UPLOAD_MODE
  },

  args: {
    files: undefined,
    mode: UploadMode.FILES
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 }
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function FileUploader(props: FileUploaderProps) {
  const [, setOutputValue] = useState<FileApi[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.files, setOutputValue)

  const [errorValue, setErrorValue] = useState<string | undefined>('')

  const { controlledOnChange: controlledOnError, controlledValue: controlledError } = useFieldControl(
    errorValue,
    setErrorValue
  )

  return (
    <>
      <FileUploaderComponent
        files={controlledValue}
        mode={props.mode}
        onDelete={nextFiles => controlledOnChange(nextFiles)}
        onError={nextError => controlledOnError(nextError)}
        onUpload={nextFiles => controlledOnChange(nextFiles)}
      />
      {controlledError && <p>{controlledError}</p>}
    </>
  )
}
