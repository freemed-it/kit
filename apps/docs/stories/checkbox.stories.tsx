import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Label } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: docs('checkbox'),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: args => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="terms1"
        >
          Accept terms and conditions
        </Label>
        <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox disabled id="terms2" />
      <Label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms2"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
}
