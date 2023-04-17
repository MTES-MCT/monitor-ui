import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { FormikEffect, FormikMultiCheckbox, FormikMultiRadio, FormikMultiSelect, FormikSelect } from '../../src'

export default {
  title: 'Tests/All formiks',

  parameters: {
    options: {
      showPanel: false
    }
  }
}

export function Template() {
  const [outputValue, setOutputValue] = useState<any>('∅')

  return (
    <Formik initialValues={{}} onSubmit={noop}>
      <>
        <FormikEffect onChange={setOutputValue} />

        <h1>Test Page</h1>

        <div>
          <FormikSelect
            label="Select"
            name="select"
            options={[
              { label: 'First select option', value: 'FIRST_SELECT_OPTION' },
              { label: 'Second select option', value: 'SECOND_SELECT_OPTION' },
              { label: 'Third select option', value: 'THIRD_SELECT_OPTION' }
            ]}
          />
          <hr />
          <FormikSelect
            label="Select with search input"
            name="selectWithSearchInput"
            options={new Array(50).fill(undefined).map((_, index) => ({
              label: `Select with search input option ${String(index + 1).padStart(2, '0')}`,
              value: `SELECT_WITH_SEARCH_INPUT_OPTION_${String(index + 1).padStart(2, '0')}`
            }))}
            searchable
          />
          <hr />
          <FormikSelect
            isLabelHidden
            label="Select with hidden label"
            name="selectWithHiddenLabel"
            options={[
              { label: 'First select with hidden label option', value: 'FIRST_SELECT_WITH_HIDDEN_LABEL_OPTION' },
              { label: 'Second select with hidden label option', value: 'SECOND_SELECT_WITH_HIDDEN_LABEL_OPTION' },
              { label: 'Third select with hidden label option', value: 'THIRD_SELECT_WITH_HIDDEN_LABEL_OPTION' }
            ]}
          />

          <hr />
          <FormikMultiSelect
            label="Multi select"
            name="multiSelect"
            options={[
              { label: 'First multi select option', value: 'FIRST_MULTI_SELECT_OPTION' },
              { label: 'Second multi select option', value: 'SECOND_MULTI_SELECT_OPTION' },
              { label: 'Third multi select option', value: 'THIRD_MULTI_SELECT_OPTION' }
            ]}
          />
          <hr />
          <FormikMultiSelect
            label="Multi select with search input"
            name="multiSelectWithSearchInput"
            options={new Array(50).fill(undefined).map((_, index) => ({
              label: `Multi select with search input option ${String(index + 1).padStart(2, '0')}`,
              value: `MULTI_SELECT_WITH_SEARCH_INPUT_OPTION_${String(index + 1).padStart(2, '0')}`
            }))}
            searchable
          />
          <hr />
          <FormikMultiSelect
            isLabelHidden
            label="Multi select with hidden label"
            name="multiSelectWithHiddenLabel"
            options={[
              {
                label: 'First multi select with hidden label option',
                value: 'FIRST_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Second multi select with hidden label option',
                value: 'SECOND_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Third multi select with hidden label option',
                value: 'THIRD_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
              }
            ]}
          />

          <hr />
          <FormikMultiCheckbox
            isInline
            label="Multi checkbox"
            name="multiCheckbox"
            options={[
              { label: 'First multi checkbox option', value: 'FIRST_MULTI_CHECKBOX_OPTION' },
              { label: 'Second multi checkbox option', value: 'SECOND_MULTI_CHECKBOX_OPTION' },
              { label: 'Third multi checkbox option', value: 'THIRD_MULTI_CHECKBOX_OPTION' }
            ]}
          />
          <hr />
          <FormikMultiCheckbox
            isInline
            isLabelHidden
            label="Multi checkbox with hidden label"
            name="multiCheckboxWithHiddenLabel"
            options={[
              {
                label: 'First multi checkbox with hidden label option',
                value: 'FIRST_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Second multi checkbox with hidden label option',
                value: 'SECOND_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Third multi checkbox with hidden label option',
                value: 'THIRD_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
              }
            ]}
          />

          <hr />
          <FormikMultiRadio
            isInline
            label="Multi radio"
            name="multiRadio"
            options={[
              { label: 'First multi radio option', value: 'FIRST_MULTI_RADIO_OPTION' },
              { label: 'Second multi radio option', value: 'SECOND_MULTI_RADIO_OPTION' },
              { label: 'Third multi radio option', value: 'THIRD_MULTI_RADIO_OPTION' }
            ]}
          />
          <hr />
          <FormikMultiRadio
            isInline
            isLabelHidden
            label="Multi radio with hidden label"
            name="multiRadioWithHiddenLabel"
            options={[
              {
                label: 'First multi radio with hidden label option',
                value: 'FIRST_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Second multi radio with hidden label option',
                value: 'SECOND_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
              },
              {
                label: 'Third multi radio with hidden label option',
                value: 'THIRD_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
              }
            ]}
          />
        </div>

        {outputValue !== '∅' && <Output value={outputValue} />}
      </>
    </Formik>
  )
}
