import type { Meta, StoryObj } from '@storybook/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component: docs('resizable'),
      },
    },
  },
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
    <ResizablePanelGroup className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]" direction={direction}>
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
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
    <ResizablePanelGroup className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]" direction={direction}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
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
    <ResizablePanelGroup className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]" direction={direction}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
