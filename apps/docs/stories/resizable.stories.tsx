import type { Meta, StoryObj } from '@storybook/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@freemed-kit/ui'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      type: {
        name: 'string',
        required: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: ({ direction }) => (
    <ResizablePanelGroup
      className="tw-min-h-[200px] tw-max-w-md tw-rounded-lg tw-border tw-md:min-w-[450px]"
      direction={direction}
    >
      <ResizablePanel defaultSize={50}>
        <div className="tw-flex tw-h-[200px] tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="tw-flex tw-h-[200px] tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: ({ direction }) => (
    <ResizablePanelGroup
      className="tw-min-h-[200px] tw-max-w-md tw-rounded-lg tw-border tw-md:min-w-[450px]"
      direction={direction}
    >
      <ResizablePanel defaultSize={25}>
        <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  args: {
    direction: 'horizontal',
  },
  render: ({ direction }) => (
    <ResizablePanelGroup
      className="tw-min-h-[200px] tw-max-w-md tw-rounded-lg tw-border tw-md:min-w-[450px]"
      direction={direction}
    >
      <ResizablePanel defaultSize={25}>
        <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-p-6">
          <span className="tw-font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
