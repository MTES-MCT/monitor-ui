import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState, type ReactNode } from 'react'

import { INITIAL_VALUES } from './constants'
import { Button, Size } from '../../../src'

export function Form({ children }: { children: ReactNode }) {
  const [withInitialValues, setWithInitialValues] = useState(false)

  const initialValues = withInitialValues ? INITIAL_VALUES : {}

  const toggleValues = () => {
    setWithInitialValues(was => !was)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button onClick={toggleValues} size={Size.SMALL}>
          Togle Values
        </Button>
      </div>

      <Formik key={JSON.stringify(initialValues)} initialValues={initialValues} onSubmit={noop}>
        <>{children}</>
      </Formik>
    </>
  )
}
