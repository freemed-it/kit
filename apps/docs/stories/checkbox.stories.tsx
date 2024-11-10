import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Label } from '@freemed-kit/ui'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    <div className="tw-items-top tw-flex tw-space-x-2">
      <Checkbox id="terms1" />
      <div className="tw-grid tw-gap-1.5 tw-leading-none">
        <Label
          className="tw-text-sm tw-font-medium tw-leading-none tw-peer-disabled:cursor-not-allowed tw-peer-disabled:opacity-70"
          htmlFor="terms1"
        >
          Accept terms and conditions
        </Label>
        <p className="tw-text-sm tw-text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
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
