import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Icon } from '../../src'
import { MapMenuDialog } from '../../src/components/MapMenuDialog'

export default {
  title: 'Components/MapMenuDialog',
  component: MapMenuDialog,
  argTypes: {},
  decorators: [generateStoryDecorator()]
}

export function _MapMenuDialog() {
  return (
    <StyledContainer>
      <StyledFirstLine>
        <MapMenuDialog.Container>
          <MapMenuDialog.Header>
            <MapMenuDialog.CloseButton Icon={Icon.Close} />
            <MapMenuDialog.Title>Two buttons</MapMenuDialog.Title>
            <MapMenuDialog.VisibilityButton accent={Accent.SECONDARY} Icon={Icon.Display} />
          </MapMenuDialog.Header>
          <MapMenuDialog.Body>
            <div>
              Nulla enim leo, faucibus sit amet libero id, pharetra consectetur lorem. Donec et metus placerat enim
              eleifend elementum vitae et metus. Curabitur quis gravida erat. Aenean id tortor id nulla ultricies
              maximus. Donec ullamcorper, tellus vel fermentum finibus, elit sem rhoncus leo, blandit molestie augue
              justo at nisl. In tristique eget lorem non malesuada. Proin eros mi, ornare nec viverra ac, gravida id
              arcu. Donec tincidunt semper eleifend. Fusce finibus, nisi ac pulvinar varius, massa urna fermentum ipsum,
              ac sagittis nulla lorem non nisi. Duis placerat ante eu felis luctus interdum. Etiam ac maximus nulla, vel
              blandit lectus. In placerat varius porta. Donec semper nec enim et hendrerit. Suspendisse ornare elementum
              fringilla. Maecenas sodales lobortis lectus ut vehicula. Aenean luctus arcu non nisi semper cursus at id
              felis. Phasellus malesuada diam non lorem tempor facilisis. Proin sem sapien, pulvinar at pretium sit
              amet, euismod id mauris. Maecenas tincidunt sapien sed lobortis consequat. Vestibulum at sollicitudin
              justo. Morbi efficitur scelerisque justo quis vestibulum.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus augue. Aenean malesuada eget
              purus at dignissim. Sed non pharetra metus. Vivamus laoreet imperdiet est, et pretium nisi pretium id.
              Maecenas non risus rhoncus, efficitur purus at, semper erat. Sed condimentum, lorem ut consectetur
              ullamcorper, lorem augue placerat nunc, at tristique turpis ante consectetur nunc. In quis convallis urna,
              eu lacinia leo. Fusce est nisl, porta eu nisi vitae, suscipit posuere libero. Donec at tincidunt eros.
              Donec tristique, magna et efficitur scelerisque, purus tellus pellentesque neque, sed condimentum turpis
              diam a dui. Quisque eleifend sem vel augue varius consequat.
            </div>
          </MapMenuDialog.Body>
          <MapMenuDialog.Footer>
            <Button Icon={Icon.Plus} isFullWidth>
              Ajouter une nouvelle mission
            </Button>
            <Button accent={Accent.SECONDARY} Icon={Icon.Expand} isFullWidth>
              Voir la vue détaillée des missions
            </Button>
          </MapMenuDialog.Footer>
        </MapMenuDialog.Container>

        <MapMenuDialog.Container>
          <MapMenuDialog.Header>
            <MapMenuDialog.CloseButton Icon={Icon.Close} />
            <MapMenuDialog.Title>One button</MapMenuDialog.Title>
            <MapMenuDialog.VisibilityButton accent={Accent.SECONDARY} Icon={Icon.Display} />
          </MapMenuDialog.Header>
          <MapMenuDialog.Body>
            <div>
              Nulla enim leo, faucibus sit amet libero id, pharetra consectetur lorem. Donec et metus placerat enim
              eleifend elementum vitae et metus. Curabitur quis gravida erat. Aenean id tortor id nulla ultricies
              maximus. Donec ullamcorper, tellus vel fermentum finibus, elit sem rhoncus leo, blandit molestie augue
              justo at nisl. In tristique eget lorem non malesuada. Proin eros mi, ornare nec viverra ac, gravida id
              arcu. Donec tincidunt semper eleifend. Fusce finibus, nisi ac pulvinar varius, massa urna fermentum ipsum,
              ac sagittis nulla lorem non nisi. Duis placerat ante eu felis luctus interdum. Etiam ac maximus nulla, vel
              blandit lectus. In placerat varius porta. Donec semper nec enim et hendrerit. Suspendisse ornare elementum
              fringilla. Maecenas sodales lobortis lectus ut vehicula. Aenean luctus arcu non nisi semper cursus at id
              felis. Phasellus malesuada diam non lorem tempor facilisis. Proin sem sapien, pulvinar at pretium sit
              amet, euismod id mauris. Maecenas tincidunt sapien sed lobortis consequat. Vestibulum at sollicitudin
              justo. Morbi efficitur scelerisque justo quis vestibulum.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus augue. Aenean malesuada eget
              purus at dignissim. Sed non pharetra metus. Vivamus laoreet imperdiet est, et pretium nisi pretium id.
              Maecenas non risus rhoncus, efficitur purus at, semper erat. Sed condimentum, lorem ut consectetur
              ullamcorper, lorem augue placerat nunc, at tristique turpis ante consectetur nunc. In quis convallis urna,
              eu lacinia leo. Fusce est nisl, porta eu nisi vitae, suscipit posuere libero. Donec at tincidunt eros.
              Donec tristique, magna et efficitur scelerisque, purus tellus pellentesque neque, sed condimentum turpis
              diam a dui. Quisque eleifend sem vel augue varius consequat.
            </div>
          </MapMenuDialog.Body>
          <MapMenuDialog.Footer>
            <Button Icon={Icon.Plus} isFullWidth>
              Ajouter une nouvelle mission
            </Button>
          </MapMenuDialog.Footer>
        </MapMenuDialog.Container>
      </StyledFirstLine>
      <MapMenuDialog.Container>
        <MapMenuDialog.Header>
          <MapMenuDialog.CloseButton Icon={Icon.Close} />
          <MapMenuDialog.Title>With buttons only</MapMenuDialog.Title>
          <MapMenuDialog.VisibilityButton accent={Accent.SECONDARY} Icon={Icon.Display} />
        </MapMenuDialog.Header>
        <MapMenuDialog.Body>
          <StyledButtonsContainer>
            <Button Icon={Icon.Plus} isFullWidth>
              Ajouter une nouvelle mission
            </Button>
            <Button accent={Accent.SECONDARY} Icon={Icon.Expand} isFullWidth>
              Voir la vue détaillée des missions
            </Button>
          </StyledButtonsContainer>
        </MapMenuDialog.Body>
      </MapMenuDialog.Container>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`
const StyledFirstLine = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
