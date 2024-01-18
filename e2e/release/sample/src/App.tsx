import { DatePicker, DateRangePicker, Figure } from '@mtes-mct/monitor-ui'
import { useState } from 'react'

function App() {
  const [datePickerOutut, setDatePickerOutput] = useState<Date | undefined>()
  const [dateRangePickerOutut, setDateRangePickerOutput] = useState<[Date, Date] | undefined>()

  return (
    <>
      <h2>DatePicker</h2>
      <DatePicker
        data-cy="fields-datepicker"
        defaultValue={undefined}
        label="A date"
        onChange={setDatePickerOutput}
        withTime
      />
      <pre data-cy="fields-datepicker-output">{JSON.stringify(datePickerOutut)}</pre>

      <h2>DateRangePicker</h2>
      <DateRangePicker
        data-cy="fields-daterangepicker"
        defaultValue={undefined}
        label="A date range"
        onChange={setDateRangePickerOutput}
        withTime
      />
      <pre data-cy="fields-daterangepicker-output">{JSON.stringify(dateRangePickerOutut)}</pre>

      <h2>Figure</h2>
      <p>
        This number should be in Open Sans: <Figure>1234</Figure>.
      </p>
    </>
  )
}

export default App
