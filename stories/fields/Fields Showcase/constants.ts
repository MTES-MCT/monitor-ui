/* eslint-disable @typescript-eslint/naming-convention */

import { RichBoolean } from '../../../src'

export const INITIAL_VALUES = {
  myCheckbox: true,
  myCheckPicker: ['FIRST_OPTION', 'SECOND_OPTION'],
  myCoordinatesInput: [12.582222, 123.765556],
  myDatePicker: new Date('2024-01-01T00:00:00.000Z'),
  myDateRangePicker: [new Date('2024-01-01T00:00:00.000Z'), new Date('2024-12-31T00:00:00.000Z')],
  myMultiCascader: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION'],
  myMultiCheckbox: ['FIRST_OPTION', 'SECOND_OPTION'],
  myMultiRadio: 'FIRST_OPTION',
  myMultiSelect: ['FIRST_OPTION', 'SECOND_OPTION'],
  myNumberInput: 42,
  myRichBooleanCheckbox: RichBoolean.TRUE,
  mySearch: 'FIRST_OPTION',
  mySelect: 'FIRST_OPTION',
  myTextarea: 'Some text',
  myTextInput: 'Some text',
  myToggle: true
}
