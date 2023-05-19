import styled from 'styled-components'

import { generateStoryDecorator } from '../.storybook/components/StoryDecorator'
import { Icon, THEME } from '../src'

import type { IconProps } from '../src'

const args: IconProps = {
  color: THEME.color.charcoal,
  size: 32
}

export default {
  title: 'Icon',
  component: Icon,

  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: [THEME.color.charcoal, THEME.color.goldenPoppy, THEME.color.maximumRed]
      }
    }
  },

  args,

  decorators: [generateStoryDecorator()]
}

export function _Icon(props: IconProps) {
  return (
    <Box>
      <Cell>
        <IconBox>
          <Icon.ActivityFeed {...props} />
        </IconBox>
        <Code>ActivityFeed</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Alert {...props} />
        </IconBox>
        <Code>Alert</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Anchor {...props} />
        </IconBox>
        <Code>Anchor</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Archive {...props} />
        </IconBox>
        <Code>Archive</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Attention {...props} />
        </IconBox>
        <Code>Attention</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Calendar {...props} />
        </IconBox>
        <Code>Calendar</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Check {...props} />
        </IconBox>
        <Code>Check</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Chevron {...props} />
        </IconBox>
        <Code>Chevron</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Clock {...props} />
        </IconBox>
        <Code>Clock</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Close {...props} />
        </IconBox>
        <Code>Close</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Confirm {...props} />
        </IconBox>
        <Code>Confirm</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Control {...props} />
        </IconBox>
        <Code>Control</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Delete {...props} />
        </IconBox>
        <Code>Delete</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Display {...props} />
        </IconBox>
        <Code>Display</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.DoubleChevron {...props} />
        </IconBox>
        <Code>DoubleChevron</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Download {...props} />
        </IconBox>
        <Code>Download</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Drapeau {...props} />
        </IconBox>
        <Code>Drapeau</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Duplicate {...props} />
        </IconBox>
        <Code>Duplicate</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Edit {...props} />
        </IconBox>
        <Code>Edit</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.EditBis {...props} />
        </IconBox>
        <Code>EditBis</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Expand {...props} />
        </IconBox>
        <Code>Expand</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Favorite {...props} />
        </IconBox>
        <Code>Favorite</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FilledArrow {...props} />
        </IconBox>
        <Code>FilledArrow</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Filter {...props} />
        </IconBox>
        <Code>Filter</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FilterBis {...props} />
        </IconBox>
        <Code>FilterBis</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Fishery {...props} />
        </IconBox>
        <Code>Fishery</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FishingEngine {...props} />
        </IconBox>
        <Code>FishingEngine</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FleetSegment {...props} />
        </IconBox>
        <Code>FleetSegment</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Focus {...props} />
        </IconBox>
        <Code>Focus</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FocusVessel {...props} />
        </IconBox>
        <Code>FocusVessel</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.FocusZones {...props} />
        </IconBox>
        <Code>FocusZones</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Hide {...props} />
        </IconBox>
        <Code>Hide</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Info {...props} />
        </IconBox>
        <Code>Info</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Infringement {...props} />
        </IconBox>
        <Code>Infringement</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Landmark {...props} />
        </IconBox>
        <Code>Landmark</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.List {...props} />
        </IconBox>
        <Code>List</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MapLayers {...props} />
        </IconBox>
        <Code>MapLayers</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MeasureAngle {...props} />
        </IconBox>
        <Code>MeasureAngle</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MeasureBrokenLine {...props} />
        </IconBox>
        <Code>MeasureBrokenLine</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MeasureCircle {...props} />
        </IconBox>
        <Code>MeasureCircle</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MeasureLine {...props} />
        </IconBox>
        <Code>MeasureLine</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Minus {...props} />
        </IconBox>
        <Code>Minus</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.MissionAction {...props} />
        </IconBox>
        <Code>MissionAction</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.More {...props} />
        </IconBox>
        <Code>More</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Note {...props} />
        </IconBox>
        <Code>Note</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Observation {...props} />
        </IconBox>
        <Code>Observation</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Pin {...props} />
        </IconBox>
        <Code>Pin</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Pinpoint {...props} />
        </IconBox>
        <Code>Pinpoint</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.PinpointHide {...props} />
        </IconBox>
        <Code>PinpointHide</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Plus {...props} />
        </IconBox>
        <Code>Plus</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Reject {...props} />
        </IconBox>
        <Code>Reject</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Report {...props} />
        </IconBox>
        <Code>Report</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Save {...props} />
        </IconBox>
        <Code>Save</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Search {...props} />
        </IconBox>
        <Code>Search</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.SelectPolygon {...props} />
        </IconBox>
        <Code>SelectPolygon</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.SelectRectangle {...props} />
        </IconBox>
        <Code>SelectRectangle</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.SelectZone {...props} />
        </IconBox>
        <Code>SelectZone</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Semaphore {...props} />
        </IconBox>
        <Code>Semaphore</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.ShowErsMessages {...props} />
        </IconBox>
        <Code>ShowErsMessages</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.ShowXml {...props} />
        </IconBox>
        <Code>ShowXml</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.SortingArrows {...props} />
        </IconBox>
        <Code>SortingArrows</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Summary {...props} />
        </IconBox>
        <Code>Summary</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Tag {...props} />
        </IconBox>
        <Code>Tag</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Target {...props} />
        </IconBox>
        <Code>Target</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Unlock {...props} />
        </IconBox>
        <Code>Unlock</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Vessel {...props} />
        </IconBox>
        <Code>Vessel</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.ViewOnMap {...props} />
        </IconBox>
        <Code>ViewOnMap</Code>
      </Cell>
      <Cell>
        <IconBox>
          <Icon.Vms {...props} />
        </IconBox>
        <Code>Vms</Code>
      </Cell>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.div`
  display: flex;
  height: 48px;
  max-width: 240px;
  min-width: 240px;
`

const IconBox = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 48px;

  > svg {
    box-shadow: 0 0 1px gray;
    height: 32px;
    width: 32px;
  }
`

const Code = styled.code`
  align-items: center;
  background-color: transparent;
  color: #1e1e1e;
  flex-grow: 1;
  font-size: 16px;
  line-height: 48px;
  padding-left: 16px;
`
