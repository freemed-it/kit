import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: docs('separator'),
      },
    },
  },
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
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}
