import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@freemed-kit/ui'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertial'],
      control: 'radio',
      table: { defaultValue: { summary: 'horizontal' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Docs: Story = {
  render: args => (
    <div>
      <div className="tw-space-y-1">
        <h4 className="tw-text-sm tw-font-medium tw-leading-none">Radix Primitives</h4>
        <p className="tw-text-sm tw-text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="tw-my-4" />
      <div className="tw-flex tw-h-5 tw-items-center tw-space-x-4 tw-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}
